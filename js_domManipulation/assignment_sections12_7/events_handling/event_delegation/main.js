//Get the home item 
//let home = document.querySelector('#home');
//home.addEventListener('click', (event) => {
//	console.log("Home was pressed");
//})

//Better design pattern ; to save memory and speed up
//According to the tutorial 
//let menu = document.querySelector('#menu');
//
//menu.addEventListener('click' , (event) => {
//	let target = event.target;
//
//	switch(target.id) {
//		case 'home':
//            console.log('Home menu item was clicked');
//            break;
//		case 'dashboard':
//            console.log('dashboard item was clicked');
//            break;
//		case 'report':
//            console.log('Report item was clicked');
//            break;
//	}
//})

//According to me this is the best design pattern
let menu = document.querySelector('#menu');
menu.addEventListener('click' , (e) => {
	console.log(`${e.target.id} was clicked`);
})
//Simple and easy to understand
