<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "portfolio_questions";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the question from the form submission
$question = $_POST['question'];

// Insert the question into the database
$sql = "INSERT INTO `portfolio_questions`.`questions` (question) VALUES ('$question')";
if ($conn->query($sql) === TRUE) {
  echo "Question saved successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
