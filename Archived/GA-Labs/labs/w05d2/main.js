jQuery(document).ready(function($) {
    // let outsideDiv = $('.outside')
    // outsideDiv.on('click', function() {
    //     console.log("OUTSIDE div has been clicked")
    // })

    // let insideDiv = $('.inside')
    // insideDiv.on('click', function(event) {
    //     event.stopPropagation()
    //     console.log("INSIDE div has been clicked")
    // }) 

    // let body = $('body')
    // body.on('click', function() {
    //     console.log('EVENT HAS REACHED THE BODY')
    // })

    let closeBtn = $('.close')
    closeBtn.on('click', function(event) {
        console.log(event.target)
        console.log(event.currentTarget)
        // event.stopPropagation()
        console.log('CLOSED BTN has been clicked')
    })

    let modalContent = $('.modal-content')
    modalContent.on('click', function() {
        console.log("Do something when modal content section is clicked")
    })
})
