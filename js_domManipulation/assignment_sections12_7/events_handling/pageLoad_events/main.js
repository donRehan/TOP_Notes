/*
 * Topic of this lesson is page loading events
	* DOMContentLoaded
	* load
 * Page closing events
	 * beforeunload
	 * unload
* */

document.addEventListener('DOMContentLoaded', () => {
	// handle DOMContentLoaded event
	console.log("DOM is loaded");
})

document.addEventListener('load', () => {
	// handle load event
})

//document.addEventListener('beforeunload', (event) => {
//	// handle beforeunload event
//	event.preventDefault();
//	//for google chrome 
//	event.returnValue = '';
//})

document.addEventListener('unload', () => {
	// handle unload event
	// send analytics data
})
