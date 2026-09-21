let heading = document.querySelector("h1");
console.log(heading);

heading.textContent = "HI THERE";

heading.style.color="#0000ff";

heading.style.fontStyle="italic";
heading.style.border="1px solid black";

let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://ubuntucommunity.s3.us-east-2.amazonaws.com/original/3X/3/7/378b822539df27616e8e1b0f1ecb95276ace6c5e.jpeg");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                