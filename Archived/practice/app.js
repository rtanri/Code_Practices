function greeting() {
  alert("hello");
}

let arr = [];

const boxes = document.getElementsByClassName("box");

function convert(words) {
  boxes.map(box => {
    return (box.innerText = words);
  });
}
