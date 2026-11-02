<?php

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit('Not found.');
}

require_once __DIR__ . '/src/mailer.php';

try {
    $mail = createMailer();

    $mail->addAddress('sales@accuthermal.com');
    $mail->Subject = 'Accurate Thermal Systems - SMTP Test';
    $mail->Body = '
        <h2>SMTP Test Successful</h2>
        <p>This is a test email from the Accurate Thermal Systems PHP backend.</p>
        <p>MXroute SMTP configuration is working.</p>
    ';
    $mail->AltBody = 'SMTP Test Successful. MXroute SMTP configuration is working.';

    $mail->send();

    echo "SUCCESS: Test email sent to sales@accuthermal.com\n";

} catch (Throwable $e) {
    fwrite(STDERR, "FAILED: SMTP test could not be completed.\n");
    fwrite(STDERR, "Error: " . $e->getMessage() . "\n");
    exit(1);
}
