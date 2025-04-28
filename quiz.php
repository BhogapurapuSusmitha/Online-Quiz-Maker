<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Smart Quiz</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="quiz-container">
    <h1>Hello <?= $_SESSION['username'] ?> 🎉</h1>
    <a href="logout.php" style="float: right;">Logout</a>
    <div id="timer" class="hide">Time left: <span id="time">10</span>s</div>
    <div id="questionBox"></div>
    <div id="optionsBox"></div>

    <div class="button-group">
        <button id="prevBtn" disabled>Previous</button>
        <button id="nextBtn" disabled>Next</button>
    </div>

    <div id="scoreBox" class="hide"></div>
</div>
<script src="js/script.js"></script>
</body>
</html>
