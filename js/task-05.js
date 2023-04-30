

const inputRef = document.getElementById("name-input");
const titleGreet = document.getElementById("name-output")

console.log(inputRef)
console.log(titleGreet)

inputRef.addEventListener("input", onInputChange)

function onInputChange(event){
  // inputRef.value === "" ? titleGreet.textContent = "Anonymous" : titleGreet.textContent = inputRef.value

  titleGreet.textContent = inputRef.value === "" ? "Anonymous" : inputRef.value.trim()

}