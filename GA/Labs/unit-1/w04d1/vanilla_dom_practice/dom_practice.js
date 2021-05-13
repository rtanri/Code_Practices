// Q1. get element by id
let container = document.getElementById('postFeed');
console.log(container);

// Get the h2 element and save it to a variable h2. Console.log that variable.
let h2 = document.querySelector('h2');
console.log(h2);

// Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end
h2.innerText = h2.innerText + '!!!'

// Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
let uniquePoint = document.querySelectorAll(".uniqueThing");
console.log(uniquePoint);
// multiple element will come out as an array of Node



// -Change the style / color of the text of your ONE of your li elements to your favorite html color
// document.querySelector('li').style.color = "#5b8a72"
// mentor fb
let myLiElement = document.querySelector("#site-header nav ul li");
myLiElement.style.color = '#5b8a72'

// -Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
document.querySelector('li').innerText = "Jamboree sandwich at the Jambo-ree"


// -Create a new img element using document.createElement()
let newImage = document.createElement("img")


// -for the source url of your new image using.setAttribute()
newImage.setAttribute('src', 'https://i.imgur.com/qI1lx1e.jpg')
newImage.style.width = "500px";

// -Append it to your page, somewhere, using.appendChild()
container.appendChild(newImage);

// -Check that your image has appeared: yes


// Change the style/color of the text of your ALL of your li elements to another favorite html color
// create a node array of ol-list
let childList = document.querySelectorAll('#bodyList li');
console.log(childList);


// need to use FOR loop to point out the children of Node array
for (let i = 0; i < childList.length; i++) {
    childList[i].style.color = "red"
    // console.log(childList[i]); //checking on the childList's child

}

// forEach doesnot work on FOR loop 
// childList.forEach(() => {
//     element.style.color = "blue"
// })



// Remove an element:
// Select any element using querySelector and save it to a variable
let h4 = document.querySelector('h4');

// and remove it from your page using .remove()
h4.remove();

// if you would like your element to stay, just comment this line of code out - so you have it as a reference