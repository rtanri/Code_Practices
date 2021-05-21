jQuery(document).ready(function($) {

    let searchSubmitButton = $('#search-form-btn')
    let searchForm = $('#search-form')

    searchForm.on('submit', function(event) {
        event.preventDefault()

        let pokemonName = $('#pokemon_name').val()
        pokemonName = pokemonName.trim()

        if (pokemonName.length === 0) {
            alert("Please fill in the name")
            return
        }

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
            method: "GET",
            success: function(response) {
                let searchMsgElement = $('#search-msg')
                searchMsgElement.css('display', 'none')

                let searchResultDiv = $('#search-result')
                searchResultDiv.html(`
                <div class="card">
                    <img src="${response.sprites.front_default}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${response.name} (${response.id})</h5>
                        <p class="card-text">${response.base_experience}</p>
                    </div>
                </div>
                `)
            },
            error: function(err) {
                let searchMsgElement = $('#search-msg')
                searchMsgElement.css('display', 'block')

                let searchMsgChild = searchMsgElement.children('.alert')

                if (err.status === 404) {
                    searchMsgChild.text('Pokemon cannot be found')
                } else {
                    searchMsgChild.text('Unknown error')
                }
            }
        })

    })

})
