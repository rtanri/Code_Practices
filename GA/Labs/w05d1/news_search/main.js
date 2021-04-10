jQuery(document).ready(function ($) {

    let searchSubmitButton = $('#search-form-btn')

    searchSubmitButton.on('click', function (event) {
        event.preventDefault(); // console.log("Form Submitted") - to test

        // grab the value of form input id=pokemon_name
        let articleName = $('#article_name').val()
        articleName = articleName.trim() // remove  whitespace
        console.log(articleName);

        $.ajax({
            url: "https://newsapi.org/v2/everything?q=" + articleName + "&from=2021-04-10&sortBy=popularity&apiKey=94cdcf1dfe5645b58679b65d26e475a3",
            method: "GET",
            header: {
                "X-Api-Key": "94cdcf1dfe5645b58679b65d26e475a3",
            },
            success: function (response) {
                let newsQuantity = response.articles.length

                const cards = [];

                for (let i = 0; i < newsQuantity; i++) {
                    // console.log(response.articles[i])

                    let createDiv = $('<div>')

                    // let pileOfCards = $('#newsCard') // this cause error - keep selecting same div (ERROR)


                    let createCard = createDiv.html(`
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${response.articles[i].title}</h5>
                                <p class="card-text">Author: ${response.articles[i].author}</p>
                                <p class="card-text">Source: ${response.articles[i].source.id}</p>
                                <p class="card-text">Date of Published: ${response.articles[i].publishedAt}</p>
                                <img src="${response.articles[i].urlToImage}" class="card-img-top" alt="">
                                <p class="card-text">${response.articles[i].description}</p>
                                <a href="${response.articles[i].url}" class="card-text">Read More >>></a>
                        </div>
                        </div>
                    `)

                    // push a card into an empty "cards" array
                    cards.push(createCard);
                }

                // include the array of 'cards' into #newsCard <div>
                $("#newsCard").append(cards);
            },
            error: function (err) {
                console.log(err)
            }
        })
    })

})