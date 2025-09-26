console.log("Hello, World!");

//FortuneTeller function!
let userName = prompt("Insert your name");
let userAge = prompt("Insert your age");


function fortuneTeller(name, age) {
  let nameWithAge = " ";

//if name longer than 7 characters
  if (name.length > 7) {
    nameWithAge = `${name} will marry late in life.`;
  }

//if name shorter than 5 characters
  if (name.length < 5) {
  nameWithAge = `${name} will marry within a year.`;
}

//if name between 5 and 7 characters (inclusive)
if (name.length >= 5 && name.length <= 7) {
  nameWithAge = `${name} will encounter a once-in-a-lifetime opportunity.`;
}

//if name starts with "R"
if (name.startsWith("R")) {
    nameWithAge = `${name} will be rich.`; 
}

//if name inclues "i"
if (name.includes("i")) {
    nameWithAge = `${name} will fall in love this week.`;
}

//if age is less than 18
if (age < 18) {
    nameWithAge = `${name} will have a fun trip!`;
}

//if age is between 18 and 30
if (age >= 18 && age <= 30) {
    nameWithAge = `${name} will touch grass soon!`;
}

//if age is greater than 30
if (age > 30) {
    nameWithAge = `${name} will stop doomscrolling!`;

}


  return nameWithAge;
}

console.log(fortuneTeller(userName, userAge));
