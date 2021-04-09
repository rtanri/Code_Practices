jQuery(document).ready(function ($) {

    let body = $('body')

    generateSquares(3, body)

    let target = $('#another-section')

    generateSquares(10, target)

})

// hoisting
function generateSquares(numSq, targetToAppend) {
    for (let i = 0; i < numSq; i++) {
        let sqDiv = $('<div>')
        sqDiv.attr('class', 'square square-' + i)
        targetToAppend.append(sqDiv)
    }
}