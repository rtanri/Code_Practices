function handleButtonClick() {
    // console.log("Clicked bro")

    // Our reference for DIV createElement
    // <div class="item">
    //     <h3>Old World Luxury</h3>
    //     <img src="img/left.jpeg" />
    //     <p>...</p>
    //     <p><a href="#">The Yacht ></a></p>
    // </div>

    // 1. Create new 'div'
    let newItem = document.createElement("div")

    // 2. give your DIV a 'class': <div class="item">
    newItem.setAttribute('class', "item")

    //3. Create h3: <h3>Old World Luxury</h3>
    let h3 = document.createElement('h3')
    h3.innerText = "New Article Title"

    // 4. <div class="item"><h3>...</h3></div>
    newItem.appendChild(h3)

    // 4.1. Add Image
    let imageInput = document.createElement('img')
    imageInput.setAttribute('src', 'img/left.jpeg')
    newItem.appendChild(imageInput)

    // 5. <p><a href="#">The Yacht ></a></p>
    let pWithAnchor = document.createElement('p')
    // let anchor = document.createElement('a')
    pWithAnchor.innerHTML = '<a href="#">The Yacht></a>'


    newItem.appendChild(pWithAnchor);

    let featuresSection = document.getElementById("features-section")
    featuresSection.appendChild(newItem)
    // look for method chaining: https://bit.ly/3meHZO4
}