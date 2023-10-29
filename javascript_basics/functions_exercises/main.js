//Function ad7 takes a number and adds the number 7 to it
let ad7 = num => num + 7;

//Write a function called multiply that takes 2 numbers and returns their product.
let multiply = (num1,num2) => num1 * num2;

//Write a function called capitalize that takes a string and returns that
//string with only the first letter capitalized. Make sure that it can 
//take strings that are lowercase, UPPERCASE or BoTh.
let cap = str => {
	first_letter = str.substring(0,1);
	return first_letter.toUpperCase() + str.substring(1);
}

//Write a function called lastLetter that takes a string and returns the 
//very last letter of that string:
let lastLetter = str => str.substring(str.length - 1);
