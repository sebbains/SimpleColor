const background = document.getElementById("background");
let newColor = "";
let previousColor = "";
const preSelectedColors=["red","blue","green","gray","yellow"];
const colorButton = document.getElementById("flipButton");
flipButton.addEventListener("click",updateBackground, false);

function updateBackground(){
    getNewColor();
    background.style.background= newColor;
    previousColor = newColor;
};

function getNewColor(){
    newColor = preSelectedColors[Math.floor(Math.random()*preSelectedColors.length)];
    if(newColor===previousColor){
        getNewColor();
    };
};