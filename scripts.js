const background = document.getElementById("background");
const preSelectedColors=["red","blue","green","red"];
const colorButton = document.getElementById("flipButton");
flipButton.addEventListener("click",updateBackground());

function updateBackground(){
    let newColor = preSelectedColors[Math.floor(Math.random()*4)];
    console.log(newColor);
    background.style.background= newColor;
}