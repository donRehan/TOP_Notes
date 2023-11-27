function listItemClickHandler(e) {
  const li = e.target.closest('li');
  
  if(!li) return;
  
  if (e.target.matches('.delete')) {
    li.remove();
  } 
}

let click_function = () => {
	//Get the input field's text
	let userInput = document.getElementById('item').value;
	//Used for testing
	console.log(userInput);
	//Emptying the element from the input field
	document.getElementById('item').value = '';
	//list items , a list , button per element and a span to contain each 
	//element and its button 
	let shopping_list = document.createElement('li');
	let list_button = document.createElement('button');
	let list_span = document.createElement('span');
	//making the list have children the span and the button
	ul.appendChild(shopping_list);
	shopping_list.appendChild(list_span);shopping_list.appendChild(list_button);
	list_span.textContent = userInput;
	list_button.textContent = 'Delete';
	list_button.classList.add("delete");
	shopping_list.addEventListener("click", listItemClickHandler);
	document.getElementById("item").focus();
}

const ul = document.querySelector('ul');
//ul.textContent = "Working ..."; [DONE]
const input = document.querySelector('#item');
//input.placeholder = "testing ..."; [DONE]
const button = document.querySelector('button');
button.onclick = click_function;
