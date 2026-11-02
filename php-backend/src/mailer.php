<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once dirname(__DIR__) . '/vendor/autoload.php';

function createMailer(): PHPMailer
{
    $config = require dirname(__DIR__) . '/config/mail-config.php';

    if (empty($config['smtp_password'])) {
        throw new RuntimeException('SMTP credentials are not configured.');
    }

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = (int) $config['smtp_port'];

    $mail->CharSet = 'UTF-8';
    $mail->setFrom(
        $config['from_email'],
        $config['from_name']
    );

    $mail->isHTML(true);
    $mail->Timeout = 15;

    return $mail;
}

function sendBusinessNotification(
    string $subject,
    string $html,
    string $customerEmail,
    string $customerName
): void {
    $config = require dirname(__DIR__) . '/config/mail-config.php';

    $mail = createMailer();

    $mail->addAddress($config['business_email']);
    $mail->addReplyTo($customerEmail, $customerName);

    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = strip_tags($html);

    $mail->send();
}

function sendCustomerConfirmation(
    string $email,
    string $name,
    string $subject,
    string $html
): void {
    $mail = createMailer();

    $mail->addAddress($email, $name);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = strip_tags($html);

    $mail->send();
}