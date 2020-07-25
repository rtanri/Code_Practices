var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

request.onload = function() {
	var response = request.response;
	console.log(response); // print out the response (API called from server)
	console.log(typeof response);  //check data type with typeof operator

	var jsonData = JSON.parse(response);
	console.log(jsonData);  // print out json parse to the console
	console.log(typeof jsonData); //check the data type of parsed-data with typeof operator
};

request.send();