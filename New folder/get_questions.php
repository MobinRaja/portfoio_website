<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "portfolio_questions";

// Create connection
$con =mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch the questions from the database
$sql = "SELECT question FROM questions";
$result = $conn->query($sql);

$questions = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $questions[] = $row['question'];
  }
}

$conn->close();

// Send the questions as JSON response
header('Content-Type: application/json');
echo json_encode($questions);
?>
