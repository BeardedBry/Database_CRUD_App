 <!-- Display Databases -->
 <?php 
        if(isset($data)){
            ?>
            <h2>Select a Database</h2>
            <form class="display-db">
            <?php
            foreach ($data as $d){
                ?>
                <button class="db" 
                <?php if($d['Database'] !== 'sakila'){ ?>
                    disabled
                <?php } ?>
                >
                
                
                <?php
                echo $d['Database'];
                ?>
                </button>
                <?php
                //var_dump($d);
            }
        } ?>
        <?php
?>