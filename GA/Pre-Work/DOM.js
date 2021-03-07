/* 
DOM - Document Object Model. 
Object: <head>, <body>, <p> is an object, we can use method and properties to change, delete, add to them
Model: how objects are laid out, often in hierarchical tree (DOM Tree).  
Purpose of DOM : get content, set content, add effects, create event listeners.
*/

// 1. Get Content
document.querySelector('p'); //----- to grab the first <p> in the document
document.querySelector('.magic p'); //----- to grab the first <p> inside an element with the class "magic"

document.querySelectorAll();

document.querySelector('.complete');

document.querySelector('h1');
document.querySelector('#company-name');

// 2. Return and Set Content
    //2.1. Manipulating the DOM
    Element.innerHTML // --- change the HTML content of the object
    document.querySelector('h2').style.color = 'blue'; // - change the Color of Object
    element.className // -- change the class of Object
    document.querySelector("h2").parentNode // --- return the parent element of H2
    document.querySelector("h2").childNode // --- return the child element of H2

    document.querySelector('h1').innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";
    document.querySelector('h2').className="urgent";


    // 2.2.Useful Trio
    const h1ID = document.querySelector('h1').getAttribute('id');
    document.querySelector("#title").setAttribute("class", "urgent"); //--- give element with ID title a class of "blue"
    document.querySelectorAll('p').removeAttribute('class');

    // 2.3. Create a DOM element 
    const paragraph = document.createElement('p');
    paragraph.innerText = "Your password did not match";
    paragraph.setAttribute("class", "registration-error");
    // this will create: <p class="registration-error">Your passwords did not match.</p>

    // 2.4. Attached the Just-Created-Element to Parents
    const newPost = document.createElement('p');
    const postsDiv = document.querySelector("#posts");
    postsDiv.appendChild(newPost); // --- add newPost to postsDiv


/* ===========Practices with DOM =================*/  

// Reading information from DOM elements
// 1) Console.log the text of the element with the id of "title"
h1ID = document.querySelector("#title");


// 2) Console.log the class of the first span on the page
firstSpan = document.querySelector("span").innerText;

// Updating properties of DOM elements
// 1) Turn the text blue in the first element with the "blue" class
turnBlue = document.querySelector(".blue").style.color = 'blue';

// 2) Change the text of the "#title" element to a greeting of your choice
h1ID.innerHTML = "Happy Friday Guys";

// Creating new DOM elements
// 1) Create an h4 element with the text of "Powered by Javascript"
const h4Post = document.createElement("h4");
h4Post.innerText = "Powered by JS";
// 1b) Add that element to the end of the page
document.body.appendChild(h4Post);
// 2) Create a ul with class "todos" and add it to the end of the page
const todos = document.createElement("ul");
todoList.setAttribute("class", "todos");
document.body.appendChild(todos);

// 2b) Looping through this array, add the strings as <li> elements
const toDoList = ["create elements", "update them", "add them to DOM"];
for (i=0; i<toDoList.length; i++){
  const todoPointer = document.createElement("li");
  todoPointer.innerHTML = toDoList[0];
  todos.appendChild(todoPointer);
}


// Removing elements from the DOM
// 1) Remove the #title h1 from the page
document.querySelector('h1').removeAttribute('#title');
// 2) Using a while loop, remove each child of the ul until it is empty
for (i=0; i<toDoList.length; i++){
  todos.removeChild(todos.childNodes[i]);
}

/* =========== Practices ended =================*/



// 3. Event Listener
    // 3.1. Commonly Used listener starts with "on"
    onload // --- when the page load
    onclick // --- when a user clicks something
        elementToGrab().onclick = function() {/* code */}    

    onmouseover // --- when a user hovers mouse over something
    onfocus // --- user puts the cursor on a form field

    document.querySelector("#login").onclick = responseToLoginAttempt


    // 3.2. Method: addEventListener()
    // tell element to wait for something to happen in browser, then execute a specific function
    function sayHello(){
        console.log("Hello");
    }
    document.querySelector("button").addEventListener("click", sayHello); 
    //takes 2 parameters - name of browser event + callback function to be executed
    
    document.querySelector('#disappearing-button').onclick = function(e) {
        console.log(e.target);
        e.target.remove();
    }