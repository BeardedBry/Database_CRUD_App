<?php

//Remove display errors on deployment
ini_set('display_errors', 'On');

$dsn = 'mysql:host=localhost;dbname=sakila';
$username = 'root';
$password = 'root';
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);

try {
    $db = new PDO($dsn, $username, $password, $options);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e) {
    echo "Connection to DB Error \n";
    echo $e->getMessage();
    die();
}

// $db = new PDO('mysql:~/Applications/MAMP/Library/bin/mysql/sakilla.db');
 
?>

