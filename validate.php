<?php
session_start();
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) === 1) {
    $_SESSION['username'] = $username;
    header("Location: quiz.php");
} else {
    echo "<script>alert('Invalid Credentials'); window.location.href='login.php';</script>";
}
?>
