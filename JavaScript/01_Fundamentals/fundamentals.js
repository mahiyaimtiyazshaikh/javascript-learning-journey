// operators

let a = 25;
let b = 7;

console.log("Value of a =", a);
console.log("Value of b =", b);

console.log("----------------------");

console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log("Modulus =", a % b);

console.log("----------------------");

// Extra Operators

console.log("Exponent =", a ** 2); // a²
console.log("Increment a =", ++a); // Increase by 1
console.log("Decrement b =", --b); // Decrease by 1

// conditions
let age = 22;
if (age >= 18){
console.log("Legal");
}
else{
    console.log("kiddo");
}

let marks = 89;
if (marks >= 90){
console.log("Grade A++");
}
else if (marks >=75){
    console.log("Grade A");
}
else if (marks >=60){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}

for(i=10; i>=1; i--){
    console.log(i);
}

for(let i=2; i<=40; i+=2){
    console.log(i);
}

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

function greet() {
    console.log("Hello, Mahiya!");
}

greet();

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Mahiya");
greet("Rahul");
greet("Priya");

function add(a, b) {
    console.log("Sum =", a + b);
}

add(10, 20);
add(50, 30);

function add(a, b) {
    return a + b;
}

let result = add(15, 25);

console.log(result);