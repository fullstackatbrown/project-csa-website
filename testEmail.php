<?php 
echo "hello world";
    $to = "clara_guo@brown.edu"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    // $first_name = $_POST['first_name'];
    $first_name = "Clara";
    // $last_name = $_POST['last_name'];
    $last_name = "Guo";
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    // $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . "test";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    
?>