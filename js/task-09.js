
const buttonRef = document.querySelector(".change-color")
console.log(buttonRef)

buttonRef.addEventListener("click", onBtnChangeClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function onBtnChangeClick( event){
const bodyColor =   document.body.style.backgroundColor = getRandomHexColor()
const colorText = document.querySelector(".color")
colorText.textContent = getRandomHexColor()

}