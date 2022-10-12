<?php
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $massage = $_Post['massage'];

    $email_from = 'tadeeshabinuditha@gmail.com';

    $email_subject = "Ask a FeedBack / Question";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Massage: $massage.\n";

    $to = "anandamuthudam@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

    
?>