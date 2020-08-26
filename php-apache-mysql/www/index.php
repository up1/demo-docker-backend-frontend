<?php
$servername = "db";
$username = "user";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully\n";

  $stmt = $conn->query('SELECT name FROM Person');
  while ($row = $stmt->fetch()){
      echo $row['name'] . "\n";
  }
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>