jQuery(document).ready(function ($) {
    // Using jQuery AJAX, make an API call to "headlines" endpoint.
    // For each news entry in the response, create an article with these content in order
    // Title
    // Author
    // Source
    // Published Datetime
    // Article Image
    // Description
    // Read more link
    // Append articles in headlines section

    let headlineNewsRowElement = $('#headline-news .row')

    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=sg&pageSize=9",
        method: "GET",
        headers: {
            'X-Api-Key': '95a961deceff491dac7e403f5fc0311a'
        },
        success: function (response) {
            response.articles.forEach(article => {
                let articleElement = $('<div>')
                articleElement.attr('class', 'col-4')

                articleElement.html(`
                <div class="card mb-3">
                    <img src="${article.urlToImage}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
                `)

                headlineNewsRowElement.append(articleElement)
            })
        },
        error: function (err) {
            console.log(err)
        }
    })

    // search section

    let searchBtn = $('#search-form-btn')

    searchBtn.on('click', function (event) {
        event.preventDefault()

        let searchValue = $('#keyword').val()

        $.ajax({
            url: "https://newsapi.org/v2/everything?q=" + searchValue,
            method: "GET",
            headers: {
                'X-Api-Key': '95a961deceff491dac7e403f5fc0311a'
            },
            success: function (response) {
                response.articles.forEach(article => {
                    let articleElement = $('<div>')
                    articleElement.attr('class', 'col-4')

                    articleElement.html(`
                    <div class="card mb-3">
                        <img src="${article.urlToImage}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                    `)

                    $('#search-results .row').append(articleElement)
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    })

})