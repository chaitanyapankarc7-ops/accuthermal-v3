<?php

return [
    'smtp_host' => 'redbull.mxrouting.net',
    'smtp_port' => 465,
    'smtp_username' => 'bhavin@accuthermal.com',
    'smtp_password' => getenv('ATS_SMTP_PASSWORD') ?: '',

    'from_email' => 'bhavin@accuthermal.com',
    'from_name' => 'Accurate Thermal Systems',

    'business_email' => 'sales@accuthermal.com',
];

// <?php
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
// return [
//     'smtp_host' => 'smtp.gmail.com',
//     'smtp_port' => 587,
//     'smtp_username' => 'dantalasiddhi24@gmail.com',
//     'smtp_password' => getenv('ATS_SMTP_PASSWORD') ?: '',

//     'from_email' => 'dantalasiddhi24@gmail.com',
//     'from_name' => 'Accurate Thermal Systems',

//     'business_email' => 'info@lucumainnovations.com',
// ];


//Current Mailconfig file details
// <?php

// return [
//     'smtp_host' => 'smtp.gmail.com',
//     'smtp_port' => 587,
//     'smtp_username' => 'dantalasiddhi24@gmail.com',
//     'smtp_password' => getenv('ATS_SMTP_PASSWORD') ?: '',

//     'smtp_encryption' => 'tls',

//     'from_email' => 'dantalasiddhi24@gmail.com',
//     'from_name' => 'Accurate Thermal Systems',

//     'business_email' => 'sales@accuthermal.com',
// ];