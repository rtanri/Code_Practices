function handleButtonClick(e) {

    // <div class="item">
    //     <h3>Old World Luxury</h3>
    //     <img src="img/left.jpeg" />
    //     <p>...</p>
    //     <p><a href="#">The Yacht ></a></p>
    // </div>

    // <div></div>
    let newItem = document.createElement('div')

    // <div class="item"></div>
    newItem.setAttribute('class', 'item')

    // <h3></h3>
    let h3 = document.createElement('h3')

    // <h3>New Article Title</h3>
    h3.innerText = "New Article Title"

    // <div class="item">
    //  <h3>New Article Title<h3>
    // </div>
    newItem.appendChild(h3)

    // <img />
    let img = document.createElement('img')

    // <img src="img/left.jpeg" />
    img.setAttribute('src', "img/left.jpeg")

    // <div class="item">
    //  <h3>New Article Title<h3>
    //  <img src="img/left.jpeg" />
    // </div>
    newItem.appendChild(img)

    // <p></p>
    let p = document.createElement('p')

    // <p>Some text</p>
    p.innerText = "Some text"

    // <div class="item">
    //  <h3>New Article Title<h3>
    //  <img src="img/left.jpeg" />
    //  <p>Some text</p>
    // </div>
    newItem.appendChild(p)

    // <p></p>
    let pWithAnchor = document.createElement('p')
    
    // <p><a href="#">The Yacht ></a></p>
    pWithAnchor.innerHTML = '<a href="#">The Yacht ></a>'

    // <div class="item">
    //  <h3>New Article Title<h3>
    //  <img src="img/left.jpeg" />
    //  <p>Some text</p>
    //  <p><a href="#">The Yacht ></a></p>
    // </div>
    newItem.appendChild(pWithAnchor)

    // let featuresSection = document.getElementById("features-section")
    
    let featuresSection = document.querySelector('#container')
    
    featuresSection.appendChild(newItem)
}