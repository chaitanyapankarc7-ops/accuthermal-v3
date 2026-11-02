<?php

require_once dirname(__DIR__, 2) . '/src/bootstrap.php';
require_once dirname(__DIR__, 2) . '/src/mailer.php';

$firstName = cleanText($data['firstName'] ?? '');
$lastName = cleanText($data['lastName'] ?? '');
$email = cleanText($data['email'] ?? '');
$phone = cleanText($data['phone'] ?? '', 40);
$company = cleanText($data['company'] ?? '');

$address1 = cleanText($data['address1'] ?? '');
$address2 = cleanText($data['address2'] ?? '');
$city = cleanText($data['city'] ?? '');
$state = cleanText($data['state'] ?? '');
$zip = cleanText($data['zip'] ?? '', 20);
$message = cleanText($data['message'] ?? '', 3000);

$interests = $data['interests'] ?? [];

$allowedInterests = [
    'quote',
    'fluidized-baths',
    'dry-block',
    'hepa',
    'calibration-services',
    'support-service',
    'documentation',
    'sample-cleaning',
    'sample-heat-treatment',
    'other',
];

if (!is_array($interests) || count($interests) > 10) {
    respond(422, ['success' => false, 'message' => 'Invalid interests.']);
}

foreach ($interests as $interest) {
    if (!is_string($interest) || !in_array($interest, $allowedInterests, true)) {
        respond(422, ['success' => false, 'message' => 'Invalid interests.']);
    }
}

$quoteRequested = in_array('quote', $interests, true);

if (
    !$firstName ||
    !$lastName ||
    !$company ||
    !$phone ||
    !validEmail($email)
) {
    respond(422, [
        'success' => false,
        'message' => 'Please check the required information.'
    ]);
}

if (
    $quoteRequested &&
    (!$address1 || !$city || !$state || !$zip)
) {
    respond(422, [
        'success' => false,
        'message' => 'A complete postal address is required for quote requests.'
    ]);
}

$customerName = "$firstName $lastName";

$fields = [
    'Name' => $customerName,
    'Email' => $email,
    'Phone' => $phone,
    'Company' => $company,
    'Address' => $address1,
    'Address Line 2' => $address2,
    'City' => $city,
    'State' => $state,
    'Postal Code' => $zip,
    'Interests' => implode(', ', $interests),
    'Message' => $message,
];

$html = '<h2>New Support Enquiry</h2><table cellpadding="8">';

foreach ($fields as $label => $value) {
    $html .= '<tr><td><strong>' . escapeHtml($label) .
        '</strong></td><td>' . nl2br(escapeHtml($value)) . '</td></tr>';
}

$html .= '</table>';

try {
    sendBusinessNotification(
        'New Support Enquiry - Accurate Thermal Systems',
        $html,
        $email,
        $customerName
    );

    $confirmation = '
        <h2>Thank you for contacting Accurate Thermal Systems!</h2>
        <p>Dear ' . escapeHtml($firstName) . ',</p>
        <p>We have received your support enquiry successfully.</p>
        <p>Our team will review your request and contact you.</p>
        <p>Regards,<br>Accurate Thermal Systems</p>
    ';

    $confirmationSent = true;

    try {
        sendCustomerConfirmation(
            $email,
            $customerName,
            'Support enquiry received - Accurate Thermal Systems',
            $confirmation
        );
    } catch (Throwable $e) {
        $confirmationSent = false;
        error_log('Customer confirmation email failed.');
    }

    respond(202, [
        'success' => true,
        'message' => 'Your support enquiry has been received.',
        'confirmationSent' => $confirmationSent
    ]);

} catch (Throwable $e) {
    error_log('Support enquiry email delivery failed.');

    respond(503, [
        'success' => false,
        'message' => 'We could not process your enquiry right now. Please try again.'
    ]);
}