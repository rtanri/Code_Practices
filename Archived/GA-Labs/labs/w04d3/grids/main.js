jQuery(document).ready(function($) {

    // let canvasContainer = $('#canvas')
    // let numColRows = Math.sqrt(64)

    // for (let i = 0; i < numColRows; i++) {
    //     // creating rows
    //     let rowDiv = $('<div>')
    //     rowDiv.attr('class', 'row')

    //     // create columns in current row
    //     for (let j = 1; j <= numColRows; j++) {
    //         let columnClass = ""

    //         // determine if is odd or even column
    //         if (j % 2 === 0) {
    //             // it is a even column
    //             columnClass = "even"
    //         } else {
    //             // it is an odd column
    //             columnClass = "odd"
    //         }

    //         let colDiv = $('<div>')
    //         colDiv.attr('class', 'col')

    //         // create square div
    //         let sqDiv = $('<div>')
    //         sqDiv.attr('class', 'square ' + columnClass)
            
    //         // put sqDiv into col
    //         colDiv.append(sqDiv)

    //         // put col into row
    //         rowDiv.append(colDiv)
    //     }

    //     // put row into #canvas section
    //     canvasContainer.append(rowDiv)
    // }

    makeCheckerBox(8)

})

function makeCheckerBox(size) {
    let canvasContainer = $('#canvas')
    let numColRows = size

    for (let i = 0; i < numColRows; i++) {
        // creating rows
        let rowDiv = $('<div>')
        rowDiv.attr('class', 'row')

        // determine the color pattern base on odd/even row
        let pattern = []
        if (i % 2 === 0) {
            pattern = ['black', 'red']
        } else {
            pattern = ['red', 'black']
        }

        // create columns in current row
        for (let j = 1; j <= numColRows; j++) {
            // create the col div
            let colDiv = $('<div>')
            colDiv.attr('class', 'col')

            // create square div
            let sqDiv = $('<div>')
            sqDiv.attr('class', 'square')

            let colOddEven = j % 2
            sqDiv.css('background', pattern[colOddEven])
            
            // put sqDiv into col
            colDiv.append(sqDiv)

            // put col into row
            rowDiv.append(colDiv)
        }

        // put row into #canvas section
        canvasContainer.append(rowDiv)
    }
}

