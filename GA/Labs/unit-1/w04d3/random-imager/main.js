jQuery(document).ready(function ($) {

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

    button.on('click', function () {
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

    // Task : create a onclick in random-image, then remove them from DOM

    // Method 1: this actually create event handler when the page is loading, 
    // the child image has not existed so the event-delegation didn't function properly
    // let imgDivs = $('.img')
    // imgDivs.on('click', function (e) {...})

    // Method 2: instead we set Event Delegation to parents 'div' with #random-images
    let randomImgDiv = $('#random-images')
    randomImgDiv.on('click', function (event) {
        // we want to try: click the child element, to delete the parents element
        let clickedElement = $(event.target) // checking the clicking target

        let parent = clickedElement.parent() //select the parent DOM of the image
        // console.log(clickedElement)
        // console.log(event.target); // checking w/ normal DOM element
        // console.log($(event.currentTarget)); //checking w/ jQuery DOM element

        // you can choose which child has the EVENT-Delegation from the 'class' assigned
        if (!clickedElement.hasClass('button')) {
            let parent = clickedElement.parent()

            if (parent.hasClass('img')) {
                parent.remove()
            }
        }

    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}