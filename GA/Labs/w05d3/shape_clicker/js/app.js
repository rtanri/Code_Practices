//remember to set up your window onload!
// .onload make sure that HTML document is fully loaded before it execute any code in app.js

// previously
// iter .1 -> ref1(func) that store the function
// iter .2 -> ref2(func) 
// iter .3 -> ref3(func) 

// after 3rd optimization 
// funcRef(func)

let numClicks = 0


window.onload = () => {
        // console.log('DOM loaded');

        // // write a code when you click a triangle, change their class to 'circle', 'square', etc
        // let rowDiv = document.querySelectorAll('.row')
        // let shapes = ['triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart']
        // // console.log(rowDiv)

        // for (let i = 0; i < rowDiv.length; i++) {
        // // #1. my answer for Step 1

        // let currentRow = rowDiv[i]
        // let count = 0

        // currentRow.onclick = function (event) {
        //         let currentlyClickedShapeDiv = event.target

        //         // very important preventError of clicking outside pyramid (<div> class:'row')
        //         if (currentlyClickedShapeDiv.classList.contains('row')) {
        //                 return
        //         }

        //         count += 1
        //         console.log(count)
        //         switch (count) {
        //                 case 1:
        //                         currentlyClickedShapeDiv.classList.remove('triangle')
        //                         currentlyClickedShapeDiv.setAttribute('class', 'circle')
        //                         break
        //                 case 2:
        //                         currentlyClickedShapeDiv.classList.remove('circle')
        //                         currentlyClickedShapeDiv.setAttribute('class', 'square')
        //                         break
        //                 case 3:
        //                         currentlyClickedShapeDiv.classList.remove('square')
        //                         currentlyClickedShapeDiv.setAttribute('class', 'triangle-down')
        //                         break
        //                 case 4:
        //                         currentlyClickedShapeDiv.classList.remove('triangle-down')
        //                         currentlyClickedShapeDiv.setAttribute('class', 'octagon')
        //                         break
        //                 case 5:
        //                         currentlyClickedShapeDiv.classList.remove('octagon')
        //                         currentlyClickedShapeDiv.setAttribute('class', 'heart')
        //                         break
        //                 default:
        //                         currentlyClickedShapeDiv.classList.remove()
        //                         currentlyClickedShapeDiv.setAttribute('class', 'triangle')
        //                         count = 0
        //         }

        // }

        // #2. Mentor answer

        let rowsDiv = document.querySelectorAll('.row')

        // O(n) * O(1) * O(1)
        for (let i = 0; i < rowsDiv.length; i++) {
                // O(n)
                let currentRow = rowsDiv[i]

                // 3rd code optimization : anonymous function
                // we didn't put bracket after handleShapeClick, so that it wasn't get executed directly right page loaded
                currentRow.onclick = handleShapeClick
        }
}


function handleShapeClick(event) {
        let currentlyClickedShapeDiv = event.target

        // check that event.target is not a row, stop processing
        // O(1)
        if (currentlyClickedShapeDiv.classList.contains('row')) {
                return
        }

        // increment number of clicks by 1
        numClicks = numClicks + 1

        // switch statements to set different shape classes
        // O(1) - because it only executed 1 case. But if your case have FOR loop (O{n})

        // if you select case 4 : O(n)
        switch (numClicks) {
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
                        setShape(currentlyClickedShapeDiv, 'octagon')
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

}

// 2nd Code optimization
function setShape(target, shape) {
        target.setAttribute('class', shape)
}

// Time complexity:
// row 61 - FOR loops in rowsDiv.length iterate multple times 1000x, algorithm: O(n)
// meanwhile the IF statement only executed once, in each iteration if executed ones, algorithm: O(1)
// O(n) * O(1) = O(1n)

// using SWITCH statement on my answer will be O(6)
// O(n) * O(6) = O(6n) -> O(n)


// BEWARE: FOR loops within a FOR lops
// O(n) * O(n) = O(n)^2