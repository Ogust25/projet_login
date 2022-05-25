<?php

$regleEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
$reglePassword = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";

if((isset($_POST['email']))&&(preg_match($regleEmail, $_POST['email']))){
    $email = $_POST['email'];
}
if((isset($_POST['password']))&&(preg_match($reglePassword, $_POST['password']))){
    $password = $_POST['password'];
}
if(($email)&&($password)){
    $res = array('validation' => "Ok");
    echo json_encode($res);
}

?>