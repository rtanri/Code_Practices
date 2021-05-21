console.log("linked")

let contactForm = document.querySelector('#contact-form')

contactForm.onsubmit = (event) => {
    event.preventDefault()
    let nameVal = document.querySelector('#name').value
    let emailVal = document.querySelector('#email').value
    let tnc = document.querySelector('#tnc').checked

    if (nameVal === "" || emailVal === "") {
        alert("Please fill up the name and email fields")
        return
    }

    if (!tnc) {
        alert("Please accept T&C")
        return
    }

    let formMsg = document.querySelector('.submission-msg')
    
    formMsg.style.display = "block"
}
