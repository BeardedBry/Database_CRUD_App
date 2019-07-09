/*jshint esversion: 6 */

const display = document.querySelector('.display-results');
const db_div = display.querySelector('#databases');
const db_buttons = display.querySelector('.display-db');
const table_div = display.querySelector('#tables');
let currentDB;

display.addEventListener('click', function (button) {

    button.preventDefault();
    console.log(button.target.textContent.trim());

    // Database buttons
    if (button.target.parentElement == db_buttons) {
        console.log('db buttons');
        currentDB = button.target.textContent.trim();
        let table_list = requestTables( currentDB );
        table_list.then((res)=>{
            console.log(res);
            populateTables(res);
        });
       
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


function populateTables(data){

    db_div.classList.add('hidden');

    let ul = document.createElement('ul');
    
    table_div.appendChild(ul);

    for(let i = 0; i < data.length; i++){
        let li = document.createElement('li');
        let but = document.createElement('button');
        but.textContent = data[i][`Tables_in_${currentDB}`];
        li.appendChild(but);
        ul.appendChild(li);
    }

}