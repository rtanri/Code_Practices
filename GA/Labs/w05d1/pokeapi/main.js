jQuery(document).ready(function () {

    // 5. Work on Submit button function
    let searchSubmitButton = $('#search-form-btn')
    // when you click this submit, page being reloaded
    searchSubmitButton.on('click', function (event) {
        event.preventDefault(); // console.log("Form Submitted") - to test

        // grab the value of form input id=pokemon_name
        let pokemonName = $('#pokemon_name').val()
        pokemonName = pokemonName.trim() // remove  whitespace

        if (pokemonName.length === 0) {
            alert('Please fill in your fav pokemon')
            return
        }

        // 1. Make the AJAX
        // 6. Copy paste the AJAX inside here
        // we use 2nd method: jQuery.ajax( [settings ] ) ===== from https://api.jquery.com/jquery.ajax/
        $.ajax({
            // 7. Update the url with + pokemonName
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
            method: "GET",
            // see if this API call success or not
            success: function (response) {
                let searchMsgElement = $('#search-msg')
                searchMsgElement.css('display', 'none')


                let searchResultDiv = $('#search-result')
                // modify the img source with TEMPLATE LITERAL with back-tick `
                searchResultDiv.html(`
                <div class="card">
                    <img src="${response.sprites.front_default}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${response.name} ${response.id}</h5>
                        <p class="card-text">${response.base_experience}</p>
                </div>
                </div>
                `)
                // console.log(response.id)
                // console.log(response.name)
                // console.log(response.base_experience)
                // console.log(response.sprites.front_default)
            },
            // function to show when it error
            error: function (err) {
                let searchMsgElement = $('#search-msg')
                searchMsgElement.css("display", "block")

                if (err.status === 404) {
                    searchMsgElement.children(".alert").text("Pokemon is not found, try again")
                } else {
                    searchMsgElement.children(".alert").text("Unknown Error")
                }
            }
        })
    })


})