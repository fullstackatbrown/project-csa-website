<?php

// if (empty($_POST('message'))) {
//     echo "The message body is empty";
//     exit;
// }

// if (empty($_POST('name'))) {
//     echo "Please fill out the name field";
//     exit;
// }

// if (empty($_POST('reason'))) {
//     echo "Please select a reason for comtact";
//     exit;
// }

// if (empty($_POST('email'))) {
//     echo "Please fill out the email field";
//     exit;
// }

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['reason'];
    $body = $_POST['message'];
    $email = $_POST['email'];
    $headers = "Reply-To: $email \n";
    // $csa = "thebrowncsa@gmail.com";
    $csa = "thebrowncsa@gmail.com";

    mail($csa, "New Form Submission: $subject", "Name: $name \n\n Message: \n $body", $headers);

    if (isset($_POST['checkbox'])) {
        $subject2 = "Copy of Your Form Submission";
        $body2 = "Here is a copy of your message: \n$body";
        $headers2 = "From: $csa";
        mail($email, $subject2, $body2, $headers2);
    }
}

?>
