console.log("linked");

let contactForm = document.querySelector("#contact-form")

contactForm.onsubmit = (e) => {
    e.preventDefault()
    // console.log("submitted")
    let nameVal = document.querySelector('#name').value
    let emailVal = document.querySelector('#email').value
    let tnc = document.querySelector('#tnc').checked
    // console.log(nameVal);
    // console.log(emailVal);
    // console.log(tnc);

    if (nameVal = "" || emailVal === "") {
        alert("Please fill up the name and email fields")
        return
    }

    // if it's checked, it is TRUE
    if (!tnc) {
        alert("Please accept TnC")
        return
    }
    let formMsg = document.querySelector('.submission-msg')
    console.log(formMsg)

    formMsg.style.display = "block"
}