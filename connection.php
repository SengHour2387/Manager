<?php 

$host = "localhost";
$user = "root";
$pass = "";
$db = "login";
$conn = new mysqli($host,$user,$pass,$db);
if($conn->connection_error) {

    echo "Failed to connect BD".$conn->connection_error;
}

?>