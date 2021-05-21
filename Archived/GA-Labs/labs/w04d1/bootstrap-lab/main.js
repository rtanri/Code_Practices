// 1. Change h1 text colour to yellow
document.querySelector('h1').style.color = "yellow"

// 2. In the FIRST section, FIRST article, add an additional threat to list item with text AI will take over the world.
let firstSectionFirstArticle = document.querySelector('section article ul')
let additionalThreatLi = document.createElement('li')
additionalThreatLi.innerText = "AI will take over the world"
firstSectionFirstArticle.appendChild(additionalThreatLi)

// 3. Turns out, the insurance plan Unobtainium is too expensive and nobody is buying. Remove that table row.
let tableRows = document.querySelectorAll('table tr')
tableRows[tableRows.length - 1].remove()

// 4. In the form:
let form = document.querySelector('form')
form.onsubmit = event => {
    event.preventDefault()
    let emailVal = document.querySelector('#email').value
    let coverageVal = document.querySelector('#coverage').value
    let checkboxVal = document.querySelector('#formCheckBox').checked

    // Email, coverage are compulsory fields. Ensure that when a user submits the form, it alerts the user if either is not filled
    if (emailVal === "" || coverageVal === "") {
        alert("Email and coverage fields cannot be empty")
        return
    }

    // User must tick the checkbox, if user did not tick, alert after form submit
    if (!checkboxVal) {
        alert('Please check the checkbox')
        return
    }
    
    // If all good, alert the user that form submission is successful
    alert("Submission successful")
} 

