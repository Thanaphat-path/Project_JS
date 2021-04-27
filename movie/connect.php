<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "movie";

$con = mysqli_connect($host,$user,$pass,$dbname);
mysqli_query($con,"set char set utf8");

?>
