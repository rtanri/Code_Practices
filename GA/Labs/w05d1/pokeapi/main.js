jQuery(document).ready(function () {
    console.log("Pokeapi")

    let searchSubmitButton = $('#search-form-btn')
    // when you click this submit, page being reloaded
    searchSubmitButton.on('click', function () {
        console.log("Form Submitted")
    })

    // // we use 2nd method: jQuery.ajax( [settings ] ) ===== from https://api.jquery.com/jquery.ajax/
    // $.ajax({
    //     // where i want to post my url to
    //     url: "https://pokeapi.co/api/v2/pokemon/charmander",
    //     method: "GET",
    //     // see if this API call success or not
    //     success: function (response) {
    //         console.log(response.base_experience)
    //     },
    //     // function to show when it error
    //     error: function (err) {
    //         console.log(err)
    //     }
    // })
})