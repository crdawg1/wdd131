let age = 23
// declare a variable

console.log(age)

const name = "Caden"
// constant variable

let username = "cdawg"

if(age == 22) {
    // a new scope
    console.log(username)
    let favoriteColor = "blue"
}
// scope = where you can reference a variable by name

console.log(favoriteColor) // this will throw an error because favoriteColor is not defined in this scope

document.querySelector("h1").style.color = "blue" 
// this will change the color of the h1 element to blue