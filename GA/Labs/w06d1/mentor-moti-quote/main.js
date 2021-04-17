window.onload = function () {
    $.ajax({
        url: 'https://api.unsplash.com/photos/random',
        headers: {
            'Authorization': 'Client-ID JcAywuLoRGoPBD6nTNCsj-VNaEJwwGqsckdre9KZcIk'
        },
        success: function (response) {
            let backgroundDivElem = document.querySelector('#background-wrapper')
            backgroundDivElem.style.background = `url(${response.urls.full})`
        }
    })

    // get quote - with fetch API
    let req = fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let quote = data.quotes[0].text
            let quoteElem = document.querySelector('#quote')
            quoteElem.innerText = quote

        })

}