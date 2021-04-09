jQuery(document).ready(function ($) {
    // Setup
    let body = $('body')
    let topContainer = $('<div>')
    let bottomContainer = $('<div>')

    topContainer.attr('id', 'top-container')
    bottomContainer.attr('id', 'bottom-container')

    body.append(topContainer)
    body.append(bottomContainer)

    // Top container
    let topContainerH1 = $('<h1>')
    topContainerH1.text('Trois couleurs: whatever, whatever, whatever')

    let couleurDiv1 = $('<div>').attr('class', 'couleur red')
    let couleurDiv2 = $('<div>').attr('class', 'couleur white')
    let couleurDiv3 = $('<div>').attr('class', 'couleur blue')

    topContainer.append(topContainerH1)
        .append(couleurDiv1)
        .append(couleurDiv2)
        .append(couleurDiv3)

    // Bottom container
    let bottomContainerH1 = $('<h1>').text('Lumpy Space Princess')
    let imgContainer = $('<div>').attr('id', 'img-container')
    let imgElem = $('<img>').attr('src', 'https://images.pexels.com/photos/5103756/pexels-photo-5103756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')

    imgContainer.append(imgElem)
    bottomContainer.append(bottomContainerH1).append(imgContainer)

    // Continuing with jQuery:

    // change the 'trois coulers' title to English
    topContainerH1.text('Three colours: red, white, blue')

    // change the second square to black using the jQuery .css() method on the element.
    couleurDiv2.css('background', 'black')

    // change the third square to orange using the .css() method on the element, and change the title to reflect the colors:
    couleurDiv3.css('background', 'orange')
})