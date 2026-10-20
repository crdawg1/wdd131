// 1. forEach()
const words = ["one", "two", "three"];

words.forEach(function(word) {
    console.log(word);
});


// 2. Template Literal + Array of Names
const names = [
    "Aaron Andrus",
    "Manny Masa",
    "Tamanda Tanda"
];

let output = "";

names.forEach(function(name) {
    output += `
        <h2>${name}</h2>
        <hr>
    `;
});

document.getElementById("output").innerHTML = output;


// 3. map()
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);


// 4. reduce()
const nums = [1, 2, 4];

const total = nums.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total);  // 7


// 5. filter()
const filtered = names.filter(function(name) {
    return name.includes("a");
});

console.log(filtered);


// 6. indexOf()
const position = names.indexOf("Tamanda Tanda");

console.log(position);  // 2