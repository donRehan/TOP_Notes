//Practicing event handling in js and html
let showAlert = (event) => {
	//alert(event.type);
	alert("clicked !");
}

let btn = document.getElementById('btn');
//btn.addEventListener('click', showAlert);

//Directly linking onclick to showAlert function
btn.onclick = showAlert;
