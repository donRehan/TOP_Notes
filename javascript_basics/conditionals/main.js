const select = document.querySelector('select');
const paragraph = document.querySelector('p');

select.addEventListener('change', _);

function _ (){

	const choice = select.value;

	if (choice === 'sunny')
	{
		paragraph.textContent = 
		"It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
	}
	else if (choice === 'rainy')
	{
		paragraph.textContent =
		"Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
	}
	else if (choice === 'snowing')
	{
		paragraph.textContent =
		"The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
	}
	else if (choice === 'overcast')
	{
		paragraph.textContent =
		"It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
	}
	else {
		paragraph.textContent = '';
	}

}

