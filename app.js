/*jshint esversion: 6 */

// initalize admin bar
const admin_update_div = document.querySelector('#admin-update');
const admin_update_submit = admin_update_div.querySelector('button[type="submit"]');
admin_update_submit.disabled = true;


const admin_create_div = document.querySelector('#admin-create');
const admin_create_submit = admin_create_div.querySelector('button[type="submit"]');
admin_create_submit.disabled = true;



const display = document.querySelector('.display-results');
const db_div = display.querySelector('#databases');
const db_buttons = display.querySelector('.display-db');
const table_div = display.querySelector('#tables');

let currentDB = 'sakila';
let currentVal = null;
let currentView = 'default';



display.addEventListener('click', function (button) {

    button.preventDefault();
    currentVal = button.target.textContent.trim();
    //console.log(button.target.textContent.trim());

    // Database buttons
    if (button.target.parentElement == db_buttons) {
        //currentDB = button.target.textContent.trim()
        console.log('db buttons');
        //currentDB = button.target.textContent.trim();
        let table_list = request('db', 'sakila');
        table_list.then((res) => {
            console.log(res);
            populateTables(res);
        }).catch((exc) => {
            console.log('error');
        });
    }
    else if (table_div.children) {
        console.log('table button');
        let colum_list = request('table', currentVal);
        table_list.then((res) => {
            console.log(res);
            populateTables(res);
        }).catch((exc) => {
            console.log('error');
        });
    }


});



function request(type, val) {

    var tables = fetch(`model.php?${type}=${val}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
    return tables;
}



function populateTables(data) {

    db_div.classList.add('hidden');
    currentView = 'table';

    let ul = document.createElement('ul');
    table_div.appendChild(ul);

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        let but = document.createElement('button');
        but.textContent = data[i][`Tables_in_${currentDB}`];
        li.appendChild(but);
        ul.appendChild(li);
    }

}



// Admin Controls






//helper functions

HTMLElement.prototype.hasChild = function (child) {
    //console.log(this.parentElement);
    let el = this;
    let flag = false;

    let findChild = function (el, child) {
        //console.log(el);
        if (el.childNodes.length > 0) {
            for (let i = 0; i < el.childNodes.length; i++) {
                //console.log(el.childNodes[i]);
                if(el.childNodes[i] == child){
                    console.log('found it ' + el.childNodes[i]);
                    flag = true;
                    return;
                }else{
                    findChild(el.childNodes[i]);
                }
            }
        }
    };

    findChild(el);
    return flag;
};