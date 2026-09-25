// functions
// python:
// def functionName():
//     this is my function block

function functionName(name) {
    console.log('this is my function name: ' + name);
}

// call "invoke" the function
// functionName("function");



// event listeners
    // retrieve someting from the DOM
    let select = document.querySelector('#theme-select');
    // add an event listener to it
    // parameters: event type, function to call when event occurs
    select.addEventListener('change', handleEvent);
    // create a function to handle the event
    function handleEvent(event) {
        console.log(event);
        console.log(event.target.value);
    }





// if statements










let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
