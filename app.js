/*jshint esversion: 8 */

const display = document.querySelector('.display-results');
const db_buttons = display.querySelector('.display-db');


display.addEventListener('click', function (button) {

    button.preventDefault();
    console.log(button.target.textContent.trim());

    // Database buttons
    if (button.target.parentElement == db_buttons) {
        console.log('db buttons');
        let table_list = requestTables( button.target.textContent.trim() );
        table_list.then((res)=>{
            console.log(res);
            //populateTables(res);
        });
        // show_tables(table_list);

    }
});

function requestTables(name) {

    var tables = fetch(`model.php?db=${name}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
    return tables;
}

// function requestColumns(table) {

//     fetch(`model.php?table=${table}`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (myJson) {
//             return JSON.stringify(myJson);
//         });

// }


function populateTables(){
    
}