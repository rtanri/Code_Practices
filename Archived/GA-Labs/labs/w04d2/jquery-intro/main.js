// Using jQuery

// jQuery(document).ready(function($) {
//     let newLi = $('<li>')

//     // vanilla js equivalent:
//     // element.innerText = "whatever"
//     newLi.text("Milo Peng")

//     let favFoodList = $('#fav-foods')
//     favFoodList.append(newLi)

//     favFoodList.hide()
//     favFoodList.show()
// })

// Using vanilla JS

window.onload = function() {
    let newLi = document.createElement('li')
    newLi.innerText = "Milo Peng"

    let favFoodList = document.querySelector('#fav-foods')
    favFoodList.appendChild(newLi)

    favFoodList.style.display = "none"
    favFoodList.style.display = "block"
}
