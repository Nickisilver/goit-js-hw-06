const mainDiv = document.getElementById("controls")
const inputCounterRef = document.querySelector('[type="number"]')
// console.log(inputCounterRef.value)
const btnsRef = document.querySelectorAll("button")
const btnCreate = btnsRef[0];
const btnDelete = btnsRef[1];
const arrBlocks =[];
let pushBlocks;

inputCounterRef.addEventListener("blur", function numberOfCreateContainers() {

  
  btnCreate.addEventListener("click",function createBlocks(evnt){

      for(let i = 0; i < inputCounterRef.value; i+=1){
  arrBlocks.push('<div id="boxes"></div>');
}

    pushBlocks = arrBlocks.join("")
    mainDiv.insertAdjacentHTML("beforeend", pushBlocks)
    const newDiv = document.querySelectorAll("#boxes")
    newDiv.forEach(el=>{
      el.style.background = getRandomHexColor()
      el.style.width = "30px"
      el.style.heigth = "30px";
    })
    })
  })







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

