const background = document.getElementById("background");
let newColor = "";
let previousColor = "";
const preSelectedColors=["red","blue","green","red"];
const colorButton = document.getElementById("flipButton");
flipButton.addEventListener("click",updateBackground, false);

function updateBackground(){
    getNewColor();
    background.style.background= newColor;
    console.log(newColor);
    console.log(previousColor);
    previousColor = newColor;
};

function getNewColor(){
    newColor = preSelectedColors[Math.floor(Math.random()*4)];
    if(newColor===previousColor){
        getNewColor();
    };
};