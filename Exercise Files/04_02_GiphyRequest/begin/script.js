//Api key: FOG8u8OuJBKz4RSlhqDvTlAh4wgGyyOp
// website source - https://developers.giphy.com/docs/api/endpoint#random

var request = new XMLHttpRequest();

// add https:// and API key with '?api_key='
request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=FOG8u8OuJBKz4RSlhqDvTlAh4wgGyyOp")

request.onload = () => {
    const response = request.response;
    const parsedData = JSON.parse(response);

    console.log(parsedData)
    console.log(typeof parsedData)


}


request.send();