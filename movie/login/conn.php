<?php
$servername = "localhost";
$username = "root";
$password = "";
$databaseName = 'movie';

// Create connection
$conn = new mysqli($servername, $username, $password, $databaseName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

?>