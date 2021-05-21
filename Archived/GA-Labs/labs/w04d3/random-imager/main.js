jQuery(document).ready(function($) {

    let imgUrls = [
        "https://via.placeholder.com/300?text=Random+Image+1",
        "https://via.placeholder.com/300?text=Random+Image+2",
        "https://via.placeholder.com/300?text=Random+Image+3",
        "https://via.placeholder.com/300?text=Random+Image+4",
        "https://via.placeholder.com/300?text=Random+Image+5",
        "https://via.placeholder.com/300?text=Random+Image+6",
    ]

    let button = $('#button')
    let randomImagesDiv = $('#random-images')

    button.on('click', function() {
        // get a random arr index
        let randomArrIndex = getRandomInt(imgUrls.length)
        let randomImgUrl = imgUrls[randomArrIndex]

        // create img div
        let imgDiv = $('<div>')
        imgDiv.attr('class', 'sq img')

        // create actual img element
        let imgElement = $('<img>')
        imgElement.attr('src', randomImgUrl)

        // putting img element into img div
        imgDiv.append(imgElement)

        // putting the img div into #random-images section
        randomImagesDiv.append(imgDiv)
    })

    // equivalent in vanilla Js
    // let button = document.querySelector('#button')
    // button.onclick = function() {}

    // click on the image, results in it being removed from DOM
    let randomImgDiv = $('#random-images')
    randomImgDiv.on('click', function(event) {
        let clickedElement = $(event.target)

        let parent = clickedElement.parent()

        if (parent.hasClass('img')) {
            parent.remove()
        }
    })

})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}