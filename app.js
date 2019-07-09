/*jshint esversion: 6 */

const display = document.querySelector('.display-results');
const db_buttons = display.querySelector('.display-db');


display.addEventListener('click', function (button) {

    button.preventDefault();
    console.log(button.target.textContent.trim());

    // Database buttons
    if (button.target.parentElement == db_buttons) {
        console.log('db buttons');
        let table_list = requestTables(button.target.textContent.trim());
        //console.log(table_list);
        // show_tables(table_list);

    }
});

function requestTables(name) {

    fetch(`model.php?db=${name}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
}

function requestColumns(table) {

    fetch(`model.php?table=${table}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return JSON.stringify(myJson);
        });

}