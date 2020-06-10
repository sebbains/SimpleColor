const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.getElementById("background");
const colorButton = document.getElementById("flipButton");
colorButton.addEventListener("click",updateBackgroundHex, false);

function updateBackgroundHex(){
    //start hex color string
    let newColor = "#";
    //iterate for remaining 6 characters
    for(i=0;i<6;i++){
        newColor += getNewChar();
    }
    //set background color
    background.style.backgroundColor= newColor;
};
function getNewChar(){
    //get random Num between 0 - 16
    randomNum = Math.floor(Math.random()*16);
    //assign to hex value
    newChar = hex[randomNum]
    return newChar;
};