var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var buttonWidth = document.getElementById("no").offsetWidth;
var buttonHeight = document.getElementById("no").offsetHeight;
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const text = document.getElementById("displayText");

yesButton.addEventListener("click", ()=>{
    text.innerHTML = "Let's goooooooo!!!!";
});

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function mouseOver(){
    noButton.style.top = getRandomNumber(0, winHeight-buttonHeight)+ "px";
    noButton.style.left = getRandomNumber(0, winWidth-buttonWidth) + "px";
}