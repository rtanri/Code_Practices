// Q1. Yellow h1
let allH1 = document.querySelectorAll("h1")

for (let i = 0; i < allH1.length; i++) {
    allH1[i].style.color = "yellow"
}

// Q2. Add new li
let locationLi = document.querySelector("section article ul")
console.log(locationLi);

let newLi = document.createElement('li')
newLi.innerText = "AI will take over the world"

locationLi.appendChild(newLi)


// Q3. Remove Ubonatium
let tableRow = document.querySelectorAll("tr")
console.log(tableRow)

// let locateUbo = tableRow[4];
let locateUbo = tableRow[tableRow.lenght - 1]; //mentor solution
console.log(locateUbo);

locateUbo.remove();


// Q4. Email & ticks compulsory
let inputForm = document.querySelector("form")

inputForm.onsubmit = (e) => {
    e.preventDefault()

    let emailVal = document.getElementById("email").value
    let checkBoxVal = document.getElementById("formCheckBox").checked
    if (emailVal === "") {
        alert("Please fill in email")
        return
    }
    if (!checkBoxVal) {
        alert("Please tick the check-box")
        return
    }
    alert("Submission is successful")

}


// Mentor feedback on finding Ubonium

// let allTr = document.querySelectorAll('tr');
// undefined
// allTr.forEach(tr => console.log(tr.firstElementChild))
// <th>​Insurance​</th>​
// <td>​Aluminum​</td>​
// <td>​Copper​</td>​
// <td>​Tylium​</td>​
// <td>​Unobtainium​</td>​
// undefined

// allTr.forEach(tr => console.log(typeof tr.firstElementChild))
// 5VM4687:1 object
// undefined

// allTr.forEach(tr => console.log(typeof tr.firstElementChild.innerText))
// 5VM4750:1 string
// undefined

// allTr.forEach(tr => console.log(tr.firstElementChild.innerText))
// Insurance
// Aluminum
// Copper
// Tylium
// Unobtainiumå


// undefined
// allTr[4]
// <tr>​<td>​Unobtainium​</td>​<td>​…​</td>​<td>​$2000.00​</td>​<td>​$0.00​</td>​</tr>​
// allTr[4].remove()