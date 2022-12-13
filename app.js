 /* ex1 */

console.log("Hello JavaScript");


/* ex2 */ 

let x = 3;
let y = 5;
console.log(x+y);


/* ex3 */

var username = prompt("Hello");
document.write("Hello "+username);


/* ex4 */

var n1,n2,vsum;


n1 = parseInt(prompt('Insert number 1'));
n2 = parseInt(prompt('Insert number 2'));

vsum = n1 + n2;
document.write('The sum is '+vsum);


/* ex5 */

var n1 = prompt("Insert number 1");
var n2 = prompt("Insert number 2");
if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}


/* ex6 */

var n1 = prompt("Insert number 1");
var n2 = prompt("Insert number 2");
var n3 = prompt("Insert number 3");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}


/* ex7 */ 

var text = prompt("Write a Sentence");
var nText = text.length;
var i;
for (i = 0; i < nText; i++) {
if (text.length(i,1) === "a");
 {
document.write(text.length(i,1));
}
}


/* ex8 */

var text = prompt("Write a Sentence");
var nText = text.length;
var i;
for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write(text.substr(i,1));
}
}


/* ex9 */ 
var text = prompt("Escribe una frase");
var nText = text.length;
var i;
for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write(text.substr(i,1));
}
}


/* ex10 */ 
var text = prompt("Escribe una frase");
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

/* ex11 */ 

var n1 = prompt("Write a Number");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
document.write("Is divisible by 2, 3, 5 o 7");
} else {
document.write("Is not divisible nor for 2, nor for 3, nor for 5, nor for 7");
}


/* ex12 */ 

var n1 = prompt("Write a Number");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Is divisible by 2. ");
}
if (n1 % 3 === 0) {
document.write("Is divisible by 3. ");
}
if (n1 % 5 === 0) {
document.write("Is divisible by 5. ");
}
if (n1 % 7 === 0) {
document.write("Is divisible by 7. ");
}
} else {
document.write("Is not divisible nor for 2, nnr for 3, nor for 5, nor for 7");
}


/* ex13 */ 

var n1 = prompt("Write a Number");
var i;
for (i=2;i < n1/2; i++) {
if (n1 % i === 0) {
document.write(i,", ");
}
}


/* ex14 */ 

var n1 = prompt("Write a Number");
var n2 = prompt("Write another Number");
var minor;
var i;
if (n1 < n2) {
minor = n1;
} else {
minor = n2;
}
for (i=2; i < minor / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}


/* ex15 Solution 1*/ 

var n1 = prompt("Write a Number");
var i;
var primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
document.write("The Number is prime");
} else {
document.write("The Number is not prime");
}

/* ex15 Solution 2*/ 

var n1 = prompt("Write a Number");
var i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
document.write("The Number is prime");
} else {
document.write("The Number is not prime");
}