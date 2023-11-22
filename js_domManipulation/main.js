/*
* This is a practice file so I can learn how to manipulate 
* the DOM using Javascript.
*/

//get me this container
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is a text context";

container.appendChild(content);

// The following part was created from console in the browser
// Added here for documentation purposes
const p = document.createElement('p')
p.textContent = "Hey I am red!"
p.setAttribute('style','color: Red;')
container.appendChild(p)

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.setAttribute('style','color: Blue;');
container.appendChild(h3);

const divContainer = document.createElement('div');
divContainer.setAttribute('style',` 
	border: 1px solid black;
	background-color: pink;
	padding-bottom: 25px;
`)

const body = document.querySelector('body');
body.appendChild(divContainer);

// Adding content inside of div
const h1_divContainer = document.createElement('h1');
h1_divContainer.textContent = "I'm inside the Div !";
divContainer.appendChild(h1_divContainer);
//Adding a P as well
const p_divContainer = document.createElement('p');
p_divContainer.textContent = "I'm inside the Div !";
divContainer.appendChild(p_divContainer);
