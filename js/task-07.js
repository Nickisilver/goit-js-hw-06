const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

inputRef.addEventListener("input", ()=>{
  textRef.style.fontSize = inputRef.value + "px"
});