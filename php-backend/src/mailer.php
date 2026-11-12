<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once dirname(__DIR__) . '/vendor/autoload.php';


function createMailer(): PHPMailer
{
    $config = require dirname(__DIR__) . '/config/mail-config.php';

    if (
        empty($config['smtp_username']) ||
        empty($config['smtp_password'])
    ) {
        throw new RuntimeException(
            'SMTP credentials are not configured.'
        );
    }

    $mail = new PHPMailer(true);

    $mail->isSMTP();

    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;

    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'    ];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->SMTPAutoTLS = false;
    
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTP;
    // $mail->Port = 587;

    $mail->CharSet = 'UTF-8';
    $mail->Timeout = 20;

    $mail->setFrom(
        $config['from_email'],
        $config['from_name']
    );

    $mail->isHTML(true);

    return $mail;
}


/**
 * Send business notification.
 */
function sendBusinessNotification(
    string $subject,
    string $html,
    string $customerEmail,
    string $customerName
): void {

    $config = require dirname(__DIR__) . '/config/mail-config.php';

    $mail = createMailer();

    try {

        $mail->addAddress($config['business_email']);

        $mail->addReplyTo(
            $customerEmail,
            $customerName
        );

        $mail->Subject = $subject;
        $mail->Body = $html;
        $mail->AltBody = strip_tags($html);

        $mail->send();

    } catch (Throwable $e) {

        error_log(
            'Business notification email failed: ' .
            $e->getMessage()
        );

        throw $e;
    }
}


/**
 * Send customer confirmation.
 */
function sendCustomerConfirmation(
    string $email,
    string $name,
    string $subject,
    string $html
): void {

    $mail = createMailer();

    try {

        $mail->addAddress($email, $name);

        $mail->Subject = $subject;
        $mail->Body = $html;
        $mail->AltBody = strip_tags($html);

        $mail->send();

    } catch (Throwable $e) {

        error_log(
            'Customer confirmation email failed: ' .
            $e->getMessage()
        );

        throw $e;
    }
}