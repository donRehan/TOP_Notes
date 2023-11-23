/*
 * In this file we will practice using the three different event 
 * handling methods in javascript DOM manipulation
 */

// Method One is in the html file 
// DIRECT SCRIPT injection

//Method 2 
//We have created a button and gave it in the html an id
const btn = document.querySelector('#btn')
// This allows only one click property
//btn.onclick = () => {alert("Hey G")}

//Another one would be the following and is the best as it allows more
//options 
//btn.addEventListener('click',
//	//Some work here
//	() => {alert("Hello");}
//)

//A better way is to create a function and then pass it into
//the eventlistener method

//The below allows for details from the press to return into the consol
//btn.addEventListener('click', function (e) {
//  console.log(e);
//});

//This allows the button to change color when it is pressed
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
