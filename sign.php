<?php
// process_signup.php

// Assume your database connection code is in db_connection.php
require_once 'db_connectionsign.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Hash the password before storing it in the database
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $sql = "INSERT INTO users (first_name, last_name, username, password) VALUES ('$firstName', '$lastName', '$username', '$hashedPassword')";
    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "failed";
    }

    $conn->close();
}
?>
