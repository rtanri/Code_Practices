let numClicks = 0

window.onload = () => {

    let rowsDiv = document.querySelectorAll('.row')

    for (let i = 0; i < rowsDiv.length; i++) {
        let currentRow = rowsDiv[i]

        currentRow.onclick = handleShapeClick
    }

}

function handleShapeClick(event) {
            
    let currentlyClickedShapeDiv = event.target

    // check that event.target is not a row, stop processing if it is
    if (currentlyClickedShapeDiv.classList.contains('row')) {
        return
    }

    // increment number of clicks by 1
    numClicks = numClicks + 1

    // switch statements to set different shape classes
    switch(numClicks) {
        case 1:
            setShape(currentlyClickedShapeDiv, 'circle')
            break;
        case 2:
            setShape(currentlyClickedShapeDiv, 'square')
            break;
        case 3:
            setShape(currentlyClickedShapeDiv, 'triangle-down')
            break;
        case 4:
            setShape(currentlyClickedShapeDiv, 'octagon')
            break;
        case 5:
            setShape(currentlyClickedShapeDiv, 'heart')
            break;
        case 6:
            setShape(currentlyClickedShapeDiv, 'triangle')
            numClicks = 0
            break;
    }

    // to change all shapes back to triangle on the 6th click
    // if (numClicks === 1) {
    //     currentlyClickedShapeDiv.setAttribute('class', 'circle')
    // } else if (numClicks === 2) {
    //     currentlyClickedShapeDiv.setAttribute('class', 'square')
    // } else if (numClicks === 3) {
    //     currentlyClickedShapeDiv.setAttribute('class', 'triangle-down')
    // } else if (numClicks === 4) {
    //     currentlyClickedShapeDiv.setAttribute('class', 'octagon')
    // } else if (numClicks === 5) {
    //     currentlyClickedShapeDiv.setAttribute('class', 'heart')
    // } else if (numClicks === 6) {
    //     let allShapes = document.querySelectorAll('.row div')

    //     for (let j = 0; j < allShapes.length; j++) {
    //         let currentShape = allShapes[j]
    //         currentShape.setAttribute('class', 'triangle')
    //     }
        
    //     numClicks = 0
    // }

}

function setShape(target, shape) {
    target.setAttribute('class', shape)
}
