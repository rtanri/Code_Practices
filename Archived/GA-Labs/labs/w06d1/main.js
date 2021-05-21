window.onload = function() {

    // dynamically get background url from API
    $.ajax({
        url: 'https://api.unsplash.com/photos/random',
        headers: {
            'Authorization': 'Client-ID 6TNv3susR058jss_Clz35lw-nEjEx4S6xo0sFMDuWTA'
        },
        success: function(response) {
            let backgroundDivElem = document.querySelector('#background-wrapper')
            backgroundDivElem.style.background = `url(${response.urls.full})`
        }
    })

    // get quote from API and display
    let req = fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let quoteText = data.quotes[0].text
            let quoteElem = document.querySelector('#quote')
            quoteElem.innerText = quoteText
        })

}