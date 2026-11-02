<?php

require_once dirname(__DIR__, 2) . '/src/bootstrap.php';
require_once dirname(__DIR__, 2) . '/src/mailer.php';

$firstName = cleanText($data['firstName'] ?? '');
$lastName = cleanText($data['lastName'] ?? '');
$email = cleanText($data['email'] ?? '');
$phone = cleanText($data['phone'] ?? '', 40);
$company = cleanText($data['company'] ?? '');
$department = cleanText($data['department'] ?? '');

if (
    !$firstName ||
    !$lastName ||
    !$company ||
    !$phone ||
    !validEmail($email) ||
    !in_array($department, ['sales', 'technical-support'], true)
) {
    respond(422, [
        'success' => false,
        'message' => 'Please check the submitted information.'
    ]);
}

$customerName = "$firstName $lastName";

$fields = [
    'Department' => $department,
    'Name' => $customerName,
    'Email' => $email,
    'Phone' => $phone,
    'Company' => $company,
];

$html = '<h2>New Contact Enquiry</h2><table cellpadding="8">';

foreach ($fields as $label => $value) {
    $html .= '<tr><td><strong>' . escapeHtml($label) .
        '</strong></td><td>' . escapeHtml($value) . '</td></tr>';
}

$html .= '</table>';

try {
    sendBusinessNotification(
        'New Contact Enquiry - Accurate Thermal Systems',
        $html,
        $email,
        $customerName
    );

    $confirmation = '
        <h2>Thank you for contacting Accurate Thermal Systems!</h2>
        <p>Dear ' . escapeHtml($firstName) . ',</p>
        <p>We have received your enquiry successfully.</p>
        <p>Our team will review your request and get back to you.</p>
        <p>Regards,<br>Accurate Thermal Systems</p>
    ';

    $confirmationSent = true;

    try {
        sendCustomerConfirmation(
            $email,
            $customerName,
            'We received your enquiry - Accurate Thermal Systems',
            $confirmation
        );
    } catch (Throwable $e) {
        $confirmationSent = false;
        error_log('Customer confirmation email failed.');
    }

    respond(202, [
        'success' => true,
        'message' => 'Your enquiry has been received.',
        'confirmationSent' => $confirmationSent
    ]);

} catch (Throwable $e) {
    error_log('Contact enquiry email delivery failed.');

    respond(503, [
        'success' => false,
        'message' => 'We could not process your enquiry right now. Please try again.'
    ]);
}