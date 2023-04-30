const inputRef = document.getElementById("validation-input");
inputRef.value.trim()

inputRef.addEventListener("blur",()=>{
let dataLength =  Number(inputRef.dataset.length)

if (inputRef.value.length < dataLength || inputRef.value.length > dataLength){
  inputRef.classList.add("invalid")
}
if(inputRef.value.length === dataLength){
  inputRef.classList.add("valid")
  inputRef.classList.remove("invalid")
}
});



// console.log(Number(inputRef.dataset.length))