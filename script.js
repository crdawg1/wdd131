
// let selectElem = document.querySelector('#theme-select');
// let pageContent = document.querySelector('body');

// selectElem.addEventListener('change', changeTheme);

// function changeTheme() {
//     let current = selectElem.value;
//     if (current === 'ocean') {
//         document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
//         pageContent.style.fontFamily = "Papyrus, fantasy";
//     } else if (current === 'forest') {
//         document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
//         pageContent.style.fontFamily = "Impact, sans-serif";
//     } else if (current === 'desert') {
//         document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
//         pageContent.style.fontFamily = "'Big Caslon', serif";
//     } else {
//         // default
//         document.body.style.backgroundImage = "none";
//         pageContent.style.fontFamily = "Georgia, serif";
//     }
// }

let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

// add smooth transition once
pageContent.style.transition = "background-image 0.5s ease, color 0.5s ease";

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'ocean') {
        document.body.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        pageContent.style.color = "#1b6882";   // light ocean text
    } 
    else if (current === 'forest') {
        document.body.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        pageContent.style.color = "#305407";   // soft green text
    } 
    else if (current === 'desert') {
        document.body.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        pageContent.style.color = "#392502";   // dark desert text
    } 
    else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        pageContent.style.color = "#000";
    }
}

          