//window.addEventListener('load', (event) => {
//    console.log('The page has fully loaded');
//});


window.onload = (event) => {
	console.log('The page has fully loaded');
}

//capture the image element
let image = document.getElementById('logo');
//When the image loads console log image loaded
image.addEventListener('load', (event) => {
	console.log('Image loaded');
})
