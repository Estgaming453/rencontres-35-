<?php


$host = 'localhost';
$dbname = 'ondes_du_coeur';
$username = 'root';
$password = 'lotode';


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}