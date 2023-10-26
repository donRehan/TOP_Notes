/* 
This is a practice file to test javascript 

let a = 10;
console.log(9 * a);

const string = "This is a test";
console.log(string)

   --- Multi-line String ---
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

	--- Embedded String ---
const name = "Alhussien";
const greeting = `Hello ${name}`;

	--- String Concatenation ---
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;

    --- Testing some cool stuff {Button and Dynamic text} ---

const button = document.querySelector("button");

greet = () => {
	const name = prompt("What is your name G ?");
	const greeting = document.querySelector('#Demo');
	greeting.textContent = `Hello ${name}, Wagwan cuz!`;
}

button.addEventListener("click", greet);
 */

// --- Expressions in strings ---

const song = "Shelat Al Hashem";
const score = 9;
const highestscore = 10;

const output = `I like the song ${song} and I give it score of ${(score/highestscore) * 100 }%`
