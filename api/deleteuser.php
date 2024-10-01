<?php

include_once ('config.php');
$id=mysqli_real_escape_string($conn,trim($_GET['id']));
$sqli="DELETE FROM user where id=$id";
$result=$conn->query($sqli);

if($result){
    echo json_encode(['status'=>'success']);
}else{
    echo json_encode(['status'=>'danger']);
}

?>