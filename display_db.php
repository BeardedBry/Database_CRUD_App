 <!-- Display Databases -->
 <?php 
        if(isset($data)){
            ?>
            <div id="databases">
            <h2>Select a Database</h2>
            <form class="display-db">
            <?php
            foreach ($data as $d){
                ?>
                <button class="db">
                <?php
                echo $d['Database'];
                ?>
                </button>
                <?php
                //var_dump($d);
            }
        } ?>
        </form>
    </div>
        <?php
?>