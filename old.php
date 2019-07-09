<?php
require_once('db.php');

try {
    $show = $db->prepare('SHOW DATABASES');
    $show->execute();
    $data = $show->fetchAll(PDO::FETCH_ASSOC);
}catch(Exception $e){
    echo $e->getMessage();
}


if (!empty($_GET['search'])) { // If a term is searched.
    //$search = strval($_GET['search']);
    $search = '%' . filter_input(INPUT_GET, 'search', FILTER_SANITIZE_STRING) . '%';
    $term = trim($search,'%');

    echo "Search Term: " . $search;
    try {
        $searchQuery = $db->prepare('SELECT * FROM film WHERE title LIKE :term');
        $searchQuery->bindParam(':term', $search, PDO::PARAM_STR);
        $searchQuery->execute();
        $films = $searchQuery->fetchAll(PDO::FETCH_ASSOC);
    } catch (Exception $e) {
        echo $e->getMessage();
    }

}else{
    echo "blank search";
    $films = null;
}

?>



<html>
<head>
    <title>Database Practice</title>
</head>
<body>

    <h1>Database CRUD Operations App</h1>
    <form action="index.php" method="get">
        <label>Search for DB table</label><br>
        <input class='search' name='search'>
        <input type='submit' class='submit'>
    </form>

    <div class="search-term">
        <h2></h2>
        <span></span>
    </div>

    <div class="display-results">
        <?php 
        foreach ($data as $d){
            echo $d['Database'];
            echo "<br>";
            //var_dump($d);
        }
        ?>
    </div>

    <!-- JavaScript -->
    <script type="text/javascript">
        const searchInput = document.querySelector('input.search');
        const submitInput = document.querySelector('input.submit');
        const searchTermH2 = document.querySelector('div.search-term h2');
        const searchTermSpan = document.querySelector('div.search-term span');

        <?php if($films !== null){ ?>
            var films = <?php echo json_encode($films) ?> ;
            console.log(films);
            displayResults(films);

        function displayResults(arr) {
            searchTermSpan.textContent = arr.length + ' results found for \"<?php echo $term ?>\"'; 
        }
        <?php } ?>

        searchInput.addEventListener('keyup', (e) => {
            let inputVal = searchInput.value;
            searchInput.value = inputVal;
        });
        
    </script>
</body>

</html>