// 1. Using jQuery

jQuery(document).ready(function ($) {
    let newLi = $('<li>')

    // vanilla js equivalent:
    // element.innerText = "whatever"
    newLi.text("Milo Peng")

    let favFoodList = $('#fav-foods')
    favFoodList.append(newLi)

    favFoodList.hide()
    favFoodList.show()
})


// // 2. Using Vanilla JS

// // window.onload is a property, not an attribute.
// // so we need to assign the function to property
// // window.onload = function (){...} 
// // window.onload = () => {...} 

// window.onload = function () {
//     let newLi = document.createElement('li')
//     newLi.innerText = "Milo Peng"

//     let favFoodList = document.querySelector('#fav-foods')
//     favFoodList.appendChild(newLi)

//     favFoodList.style.display = "none"
//     favFoodList.style.display = "block"
// }

// // Not like this
// // window.onload (function(){...} )