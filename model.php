<?php
include_once('db.php');

if (!empty($_GET['db'])) {
    try {
        //$db_choice = $db->prepare('SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE="BASE TABLE"');
        $db_choice = $db->prepare('show tables;');
        //$db_choice->bindParam(':term', $search, PDO::PARAM_STR);
        $db_choice->execute();
        $show = $db_choice->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($show);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}


// if (!empty($_GET['db'])) {

//     $db_choice = filter_input(INPUT_GET, 'db', FILTER_SANITIZE_STRING);

//     try {
//         //$db_choice = $db->prepare('SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE="BASE TABLE"');
//         $db_choice = $db->prepare('show tables;');
//         //$db_choice->bindParam(':term', $search, PDO::PARAM_STR);
//         $db_choice->execute();
//         $show = $db_choice->fetchAll(PDO::FETCH_ASSOC);
//         return json_encode($show);
//     } catch (Exception $e) {
//         echo $e->getMessage();
//     }
// }
