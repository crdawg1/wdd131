
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let textElement = document.body.querySelectorAll('p, h1, h3, h4, h5, h6, li');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333';
        textElement.forEach(element => { 
            element.style.color = '#fff';
        });
        // code for changes to colors and logo
    } else {
        document.body.style.backgroundColor = '#fff';
        textElement.forEach(element => { 
            element.style.color = '#333'});
        // code for changes to colors and logo
    }

}           
