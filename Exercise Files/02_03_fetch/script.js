fetch('https://hplussport.com/api/products')
//Use .then to do something with the response
.then( 
	function(response) {
		return response.json(); // use .json() method to get the json data
	}
)
.then(
	function(respData) {
		console.log(respData);
	}
)