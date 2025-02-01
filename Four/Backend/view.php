<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:*");
header("Access-Control-Allow-Headers:*");

$databse = mysqli_connect("localhost", "root", "", "second8");
$sql = "SELECT * FROM info ORDER BY id DESC";
$mysqli = mysqli_query($databse, $sql);
$json_data = array();
while ($row = mysqli_fetch_assoc($mysqli)) {
    $json_data[] = $row;
}
echo json_encode(['phpresult' => $json_data]);
?>