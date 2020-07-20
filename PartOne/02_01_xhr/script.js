//The Oldest way to create API connection

var request = new XMLHttpRequest(); //use "new"


request.open('GET', "https://hplussport.com/api/products"); //open connection to make a request

request.onload = () => {
   const response = request.response
   console.log(typeof response)
   const parsedData = JSON.parse(response) //to change string to Object
   console.log(parsedData);
   console.log(typeof parsedData);
}


request.send();