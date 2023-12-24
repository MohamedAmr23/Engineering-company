<?php
require_once 'db_connectionlogin.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row["password"];

        if (password_verify($password, $hashedPassword)) {
            // Redirect to index.html on successful login
            header("Location: index.html");
            exit();
        } else {
            // Redirect to login.html with an error message
            header("Location: login.html?error=Invalid credentials");
            exit();
        }
    } else {
        // Redirect to login.html with an error message
        header("Location: login.html?error=Invalid credentials");
        exit();
    }
}

$conn->close();
?> 