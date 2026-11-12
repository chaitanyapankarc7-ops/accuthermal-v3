<?php

// CORS configuration
$allowedOrigins = [
    'http://localhost:3000',
    'https://seashell-starling-220016.hostingersite.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Vary: Origin');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $data): never
{
    http_response_code($status);

    echo json_encode(
        $data,
        JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE
    );

    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Allow: POST, OPTIONS');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== 0) {
    respond(415, ['success' => false, 'message' => 'JSON required.']);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(413, ['success' => false, 'message' => 'Request too large.']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    respond(400, ['success' => false, 'message' => 'Invalid request.']);
}

function cleanText($value, int $max = 200): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);

    return mb_substr($value, 0, $max, 'UTF-8');
}

function validEmail(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function escapeHtml(string $value): string
{
    return htmlspecialchars(
        $value,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    );
}

function rateLimit(string $identifier): bool
{
    $directory = sys_get_temp_dir() . '/ats-enquiry-limits';

    if (!is_dir($directory)) {
        if (!mkdir($directory, 0700, true) && !is_dir($directory)) {
            return false;
        }
    }

    $key = hash('sha256', $identifier);
    $file = $directory . '/' . $key . '.json';

    $handle = fopen($file, 'c+');

    if (!$handle) {
        return false;
    }

    flock($handle, LOCK_EX);

    $content = stream_get_contents($handle);
    $record = json_decode($content ?: '{}', true) ?: [];

    $now = time();
    $window = 600;

    if (($record['time'] ?? 0) < $now - $window) {
        $record = ['time' => $now, 'count' => 0];
    }

    $record['count']++;

    ftruncate($handle, 0);
    rewind($handle);

    fwrite($handle, json_encode($record));
    fflush($handle);

    flock($handle, LOCK_UN);
    fclose($handle);

    return $record['count'] <= 5;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

if (!rateLimit($ip)) {
    respond(429, [
        'success' => false,
        'message' => 'Too many requests. Please try again later.'
    ]);
}