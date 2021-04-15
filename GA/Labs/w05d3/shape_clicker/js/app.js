//remember to set up your window onload!
// .onload make sure that HTML document is fully loaded before it execute any code in app.js
window.onload = () => {
        console.log('DOM loaded');

        // write a code when you click a triangle, change their class to 'circle', 'square', etc
        let rowDiv = document.querySelectorAll('.row')
        let shapes = ['triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart']
        // console.log(rowDiv)

        for (let i = 0; i < rowDiv.length; i++) {
                // #1. my answer for Step 1

                let currentRow = rowDiv[i]
                let count = 0

                currentRow.onclick = function (event) {
                        let currentlyClickedShapeDiv = event.target

                        // very important preventError of clicking outside pyramid (<div> class:'row')
                        if (currentlyClickedShapeDiv.classList.contains('row')) {
                                return
                        }

                        count += 1
                        console.log(count)
                        switch (count) {
                                case 1:
                                        currentlyClickedShapeDiv.classList.remove('triangle')
                                        currentlyClickedShapeDiv.setAttribute('class', 'circle')
                                        break
                                case 2:
                                        currentlyClickedShapeDiv.classList.remove('circle')
                                        currentlyClickedShapeDiv.setAttribute('class', 'square')
                                        break
                                case 3:
                                        currentlyClickedShapeDiv.classList.remove('square')
                                        currentlyClickedShapeDiv.setAttribute('class', 'triangle-down')
                                        break
                                case 4:
                                        currentlyClickedShapeDiv.classList.remove('triangle-down')
                                        currentlyClickedShapeDiv.setAttribute('class', 'octagon')
                                        break
                                case 5:
                                        currentlyClickedShapeDiv.classList.remove('octagon')
                                        currentlyClickedShapeDiv.setAttribute('class', 'heart')
                                        break
                                default:
                                        currentlyClickedShapeDiv.classList.remove()
                                        currentlyClickedShapeDiv.setAttribute('class', 'triangle')
                                        count = 0
                        }

                }

                // // #2. Mentor answer
                // // continue: for (let ..... ){
                // let currentRow = rowDiv[i]
                // currentRow.onclick = function (event) {
                //         let currentlyClickedShapeDiv = event.target

                //         // check that event.target is not a row, stop processing
                //         if (currentlyClickedShapeDiv.classList.contains('row')) {
                //                 return
                //         }

                //         currentlyClickedShapeDiv.setAttribute('class', 'circle')

                // }

        }
}