jQuery(document).ready(function ($) {

    let canvasContainer = $('#canvas')
    let numColRows = Math.sqrt(64)
    // numColRows = 8

    for (let i = 0; i < numColRows; i++) {
        // creating rows
        let rowDiv = $('<div>')
        rowDiv.attr('class', 'row')

        // odd row (first, third)
        if (i % 2 !== 0) {

            // create columns in current row
            for (let j = 1; j <= numColRows; j++) {
                let columnClass = ""

                // determine if is odd or even column
                if (j % 2 === 0) {
                    // it is a even column
                    columnClass = "even"
                } else {
                    // it is an odd column
                    columnClass = "odd"
                }

                let colDiv = $('<div>')
                colDiv.attr('class', 'col')

                // create square div with class 'even' and 'odd'
                let sqDiv = $('<div>')
                sqDiv.attr('class', 'square ' + columnClass)

                // put sqDiv into col
                colDiv.append(sqDiv)

                // put col into row
                rowDiv.append(colDiv)
            }

        } else { //for even row, we change the sequence
            for (let j = 1; j <= numColRows; j++) {
                let columnClass = ""

                // determine if is odd or even column
                if (j % 2 === 0) {
                    // it is a even column
                    columnClass = "odd"
                } else {
                    // it is an odd column
                    columnClass = "even"
                }

                let colDiv = $('<div>')
                colDiv.attr('class', 'col')

                // create square div with class 'even' and 'odd'
                let sqDiv = $('<div>')
                sqDiv.attr('class', 'square ' + columnClass)

                // put sqDiv into col
                colDiv.append(sqDiv)

                // put col into row
                rowDiv.append(colDiv)
            }
        }

        // put row into #canvas section
        canvasContainer.append(rowDiv)
    }

})