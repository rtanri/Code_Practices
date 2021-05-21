jQuery(document).ready(function($) {

    generatePyramid(3)

})

function generatePyramid(numTiers) {
    let canvasContainer = $('#canvas')

    // in each outer iteration,
    // there is an equal amount of iterations in the inner for-loop

    // 1 outer for loop: O(n)
    // 1 outer for loop + an inner for-loop: O(n^2)

    for (let i = 1; i <= numTiers; i++) {
        // create row
        let rowDiv = $('<div>')
        rowDiv.attr('class', 'row')

        // create triangles
        for (let j = 0; j < i; j++) {
            let triDiv = $('<div>')
            triDiv.attr('class', 'triangle')

            // add triangle div into row
            rowDiv.append(triDiv)
        }

        // add row into #canvas section
        canvasContainer.append(rowDiv)
    }
}