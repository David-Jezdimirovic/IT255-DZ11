<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

include("config.php");

if (isset($_POST['broj']) &&  isset($_POST['naziv']) && isset($_POST['tv']) && isset($_POST['kvadrati']) && isset($_POST['kreveti'])){
  $broj = $_POST['broj'];
  $naziv = $_POST['naziv'];
  $tv = intval($_POST['tv']);
  $kvadrati = $_POST['kvadrati'];
  $kreveti = $_POST['kreveti'];


 // $hasTV = intval($_POST['tv']);
 // $beds = intval($_POST['beds']);

  $stmt = $conn->prepare("INSERT INTO sobe (broj, naziv, tv, kvadrati, kreveti) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("dsddd", $broj, $naziv, $tv, $kvadrati, $kreveti);
  $stmt->execute();
  echo "ok";
 // header('Location: kontakt.component');
}
?>