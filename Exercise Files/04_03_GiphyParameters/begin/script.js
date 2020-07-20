//Api key: FOG8u8OuJBKz4RSlhqDvTlAh4wgGyyOp
// website source - https://developers.giphy.com/docs/api/endpoint#random

var request = new XMLHttpRequest();

//4.3. You can add multiple parameters by adding '&' in between '&tag=squirrels&rating=g'
request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=FOG8u8OuJBKz4RSlhqDvTlAh4wgGyyOp&tag=squirrels&rating=g");

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);

	//4.4. Get the url properties
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);
	console.log(typeof originalUrl); //checking the data and type

	
}

request.send();