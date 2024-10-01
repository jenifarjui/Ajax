<?php 
include_once 'config.php';
$sqli="SELECT * FROM user ";
$result=$conn->query($sqli);
$data=$result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);



?>