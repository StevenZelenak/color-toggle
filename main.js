//array of color
let colors = ["white", "red", "blue", "aqua", "orange", "yellow", "green"];

//picks a random color from the array
const randomColor = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//when the event is called this function changes the color of the background
const colorChange = () => {

    document.body.style.backgroundColor = randomColor(colors);
}


const events = () => {
    document.getElementById("color-toggle").addEventListener('click', colorChange);
}

const init = () => {
    events();
}

init();