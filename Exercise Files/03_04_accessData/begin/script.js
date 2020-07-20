var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?order=name');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);


	for (item in parsedData){
		var name = parsedData[item].name;		
		var products = document.createElement("li")
		products.innerHTML = name
		document.body.appendChild(products);

		var imageUrl = parsedData[item].image;		
		var imageList = document.createElement("img")
		imageList.setAttribute('src', imageUrl);
		document.body.appendChild(imageList);
	}


};

request.send();