window.onload = () => {

        console.log('DOM ready')

        // --- Part 1 ---

        // 1. Getting the input and button DOM elements
        let todoInput = document.querySelector('#todolist-input')
        let addTodoItemBtn = document.querySelector('#add-todo-btn')
        let listTodo = document.querySelector('#list-todo')
        let listCompleted = document.querySelector('#list-completed')


        // 2. Attach event handler for add todo button
        addTodoItemBtn.onclick = (event) => {
                event.preventDefault()

                // a. get input value, and delete all whitespace so it will prevent false-positive
                let todoInputVal = todoInput.value
                todoInputVal.trim()
                console.log(todoInputVal)

                // b.1. perform validation 
                if (todoInputVal === "") {
                        alert("Todo input cannot be empty")
                        return //whatever the code we write below, won't be valid/executed anymore
                }

                // b.2. word length check
                if (todoInputVal.length > 20) {
                        alert("Enter within the words limit")
                        todoInput.value = ""
                        return
                }


                // c. create <li> item and append into things to do <ul>
                let newLi = document.createElement('li')
                newLi.setAttribute("class", "todo-item todo text-center")

                // d. create <li> content element, and append to new <li>
                let newP = document.createElement('p')
                newP.innerText = todoInputVal

                // trying to make a function to make my code DRY, but this give error, so I hide it
                // function createButton(inputId, enterInnerText) {
                //         let newBtn = document.createElement('button')
                //         newBtn.setAttribute('id', inputId)
                //         newBtn.setAttribute('type', "button")
                //         newBtn.innerText = enterInnerText
                // }

                let doneBtn = document.createElement('button')
                doneBtn.setAttribute('class', "btn btn-primary")
                doneBtn.setAttribute('type', "button")
                doneBtn.innerText = 'Mark as Completed'

                let changeMindBtn = document.createElement('button')
                changeMindBtn.setAttribute('class', "btn btn-secondary")
                changeMindBtn.setAttribute('type', "button")
                changeMindBtn.innerText = 'Edit Task'
                changeMindBtn.setAttribute('data-bs-toggle', 'modal')
                changeMindBtn.setAttribute('data-bs-target', '#editingModal')
                changeMindBtn.onclick = (event) => {
                        // console.log("Editing button is working well")
                        let newTaskInput = document.querySelector('#new-todolist-input')
                        let submitBtn = document.querySelector('#modal-submit')
                        submitBtn.onclick = (event) => {
                                event.preventDefault()
                                newTaskInput.value.trim()
                                if (newTaskInput.value.length > 0 && newTaskInput.value.length < 20) {
                                        console.log(newTaskInput.value.length)
                                        newP.innerText = newTaskInput.value
                                        newTaskInput.value = ""
                                } else {
                                        alert("Key in below 20")
                                        newTaskInput.value = ""
                                        return
                                }
                        }
                }
                newLi.appendChild(newP)
                newLi.appendChild(doneBtn)
                newLi.appendChild(changeMindBtn)

                listTodo.appendChild(newLi)

                // e. clear input value when new li is added successfully
                todoInput.value = ""

                // f. attach event handler on new li, to modify text with line-through
                doneBtn.onclick = () => {
                        // newP.style.textDecoration = 'line-through'
                        newLi.setAttribute('class', 'todo-item completed text-center')
                        doneBtn.innerText = "Remove"
                        listCompleted.appendChild(newLi)
                        changeMindBtn.remove()

                        doneBtn.onclick = (event) => {
                                event.target.parentElement.remove();
                        }

                }
        }

}