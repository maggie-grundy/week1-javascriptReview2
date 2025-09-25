console.log("Hello, World!");

//FortuneTeller function!

function fortuneTeller(name, age) {
    let nameWithAge = ' ';

    nameWithAge = `Name: ${name} and Age ${age}`;
    return nameWithAge;
  
}

let userName = prompt('Insert your name');
let userAge = prompt('Insert your age');

console.log(fortuneTeller(userName, userAge));
  console.log(fortuneTeller('Ulises', 100))