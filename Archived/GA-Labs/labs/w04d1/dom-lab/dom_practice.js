console.log("linked")

// Get the element with the id you assigned and save it to a variable . Console.log that variable.
let siteHeader = document.querySelector('#site-header')
console.log(siteHeader)

// Get the h2 element and save it to a variable h2. Console.log that variable.
let h2 = document.querySelector('h2')
console.log(h2)

// Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end
h2.innerText = h2.innerText + "!!!"

// Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
let featureListItems = document.querySelectorAll('.featured-item')
console.log(featureListItems)

// Change the style/color of the text of your ONE of your li elements to your favorite html color
let myLiElement = document.querySelector('#site-header nav ul li')
myLiElement.style.color = "red"

// Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
 myLiElement.innerText = 'Jamboree sandwich at the Jambo-ree'

//  Create a new img element using document.createElement()
//  🔵 Add an attribute for the source url of your new image using .setAttribute()
//  🔵 Append it to your page, somewhere, using .appendChild()
//  🔵 Check that your image has appeared

let myImg = document.createElement('img')
myImg.setAttribute('src', 'https://www.heart.org/-/media/images/health-topics/congenital-heart-defects/50_1683_44bc_asd-repairs.jpg?h=361&w=600&la=en&hash=EB9FD154363EA1B23BA5C3FC95E7B76F52C3B71B')

let siteBody = document.querySelector('body')
siteBody.appendChild(myImg)

// Change the style/color of the text of your ALL of your li elements to another favorite html color
let allLiElements = document.querySelectorAll('li')

for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].style.color = "blue"
}

let imgToRemove = document.querySelectorAll('img')
imgToRemove[0].remove()
