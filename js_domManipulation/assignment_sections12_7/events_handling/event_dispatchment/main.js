//Creating an event 
//let event = new Event(type, [,options])
//default of options is { bubbles: false, cancelable: false}

//creating a click event
//let event = new Event('click');

let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	alert('Mouse Clicked');
});
let clickEvent = new Event('click');
//'Faking a click event'
btn.dispatchEvent(clickEvent);
