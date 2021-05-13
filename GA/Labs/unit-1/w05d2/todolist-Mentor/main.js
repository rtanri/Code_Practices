window.onload = () => {

        console.log('DOM ready')

        // --- Part 1 ---

        // 1. Getting the input and button DOM elements
        let todoInput = document.querySelector('#todolist-input')
        let addTodoItemBtn = document.querySelector('#add-todo-btn')
        let listTodo = document.querySelector('#list-todo')
        // let listCompleted = document.querySelector('#list-completed')

        // 2. Attach event handler for add todo button
        addTodoItemBtn.onclick = (event) => {
                event.preventDefault()

                // a. get input value, and trim away whitespaces
                let todoInputVal = todoInput.value
                todoInputVal = todoInputVal.trim()

                // b. perform validation
                if (todoInputVal === "") {
                        alert('Todo input cannot be empty')
                        return
                }

                // c. create li item, and append to things to do ul
                let newLi = document.createElement('li')
                newLi.setAttribute('class', 'todo-item todo text-center')

                // d. create li content elements, and append to new li
                let newP = document.createElement('p')
                newP.innerText = todoInputVal

                let newBtn = document.createElement('button')
                newBtn.setAttribute('class', 'btn btn-primary')
                newBtn.setAttribute('type', 'button')
                newBtn.innerText = 'Mark as Completed'

                newLi.appendChild(newP)
                newLi.appendChild(newBtn)

                listTodo.appendChild(newLi)

                // e. clear input value when new li is added successfully
                todoInput.value = ""

                // f. attach event handler on new li, move to completed column
                newBtn.addEventListener('click', moveTodoToCompleted)
        }
}

function moveTodoToCompleted(event) {
        console.log('Move todo item to completed list')

        let listCompleted = document.querySelector('#list-completed')
        let newBtn = event.target
        let newLi = event.target.parentNode

        // put todo item into Completed list
        listCompleted.appendChild(newLi)
        newLi.classList.remove('todo')
        newLi.classList.add('completed')

        // modifying the button appearance
        newBtn.innerText = 'Delete'
        newBtn.classList.remove('btn-primary')
        newBtn.classList.add('btn-danger')

        // detach current event handler from button
        newBtn.removeEventListener('click', moveTodoToCompleted)

        // attach new event handler to delete to do item
        newBtn.onclick = (event) => {
                event.target.parentNode.remove()
        }
}