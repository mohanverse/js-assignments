let canvas = document.getElementById("canvas");
let button = document.getElementById("button");

const randomColor = () => {
    let hex = "0123456789ABCDEF";
    let hash = "#";

    for (let i=0; i<6; i++) {
        hash = hash + hex [Math.floor(Math.random()*16)];
    }
    return hash;
};

function changeColor () {
    canvas.style.backgroundColor = randomColor();
};

button.addEventListener("click", changeColor)