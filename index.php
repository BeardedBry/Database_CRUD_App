<?php
require_once('db.php');

try {
    $show = $db->prepare('SHOW DATABASES');
    $show->execute();
    $data = $show->fetchAll(PDO::FETCH_ASSOC);
}catch(Exception $e){
    echo $e->getMessage();
}

?>

<html>
<head>
    <title>Database Practice</title>
    <link rel="stylesheet"
    type="text/css"
    href="style.css">
</head>
<body>

    <h1>Database CRUD Operations App</h1>

    <div class="display-results">
        <!-- Display Databases -->
        <div id="databases">
            <?php include 'display_db.php'; ?>
        </div>
        <!-- Display Tables -->
        <div id="tables">
        </div>
    </div>

    <!-- JavaScript -->
    <script src="app.js" type="text/JavaScript"></script>
</body>

</html>