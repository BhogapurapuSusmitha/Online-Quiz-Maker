<?php
session_start();
if (isset($_SESSION['username'])) {
    header('Location: quiz.php');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="quiz-container">
    <h2>Login to Smart Quiz</h2>
    <form action="validate.php" method="POST">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
</div>
</body>
</html>
