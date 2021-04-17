jQuery(document).ready(function ($) {

    // random unsplash API
    $.ajax({
        url: "https://api.unsplash.com/photos/random/?client_id=JcAywuLoRGoPBD6nTNCsj-VNaEJwwGqsckdre9KZcIk",
        method: "GET",
        success: function (response) {
            // console.log(response)
            let imageUrl = 'url("' + response.urls.raw + '")'
            console.log(imageUrl)

            document.getElementById("backgroundImage").style['background-image'] = imageUrl;
        },
        error: function (err) {
            console.log(err)
        }
    }, )

    // // random quote API - with jQuery Ajax
    // $.ajax({
    //     url: "https://goquotes-api.herokuapp.com/api/v1/random?count=1",
    //     method: "GET",
    //     success: function (response) {
    //         let randomQuote = response.quotes[0].text
    //         let newQuote = document.createElement('p')
    //         newQuote.innerText = randomQuote
    //         $('#daily-quote').append(newQuote)
    //     },
    //     error: function (err) {
    //         console.log(err)
    //     }
    // })


    // random quote API - with Fetch API
    // const token = 'YOUR_TOKEN_HERE';
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1", {
            // headers: {
            //     Authorization: `token ${token}`
            // }
        })
        .then(res => res.json())
        .then(json => console.log(json));
})