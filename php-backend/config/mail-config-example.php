<?php

return [
    'smtp_host' => 'YOUR_SMTP_HOST',
    'smtp_port' => 465,
    'smtp_username' => 'YOUR_EMAIL_ADDRESS',
    'smtp_password' => getenv('ATS_SMTP_PASSWORD') ?: '',

    'from_email' => 'YOUR_EMAIL_ADDRESS',
    'from_name' => 'Accurate Thermal Systems',

    'business_email' => 'YOUR_BUSINESS_EMAIL',
];