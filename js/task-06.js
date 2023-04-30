const inputRef = document.getElementById("validation-input");


inputRef.addEventListener("blur",()=>{
let dataLength =  Number(inputRef.dataset.length)
  if(inputRef.value.length === dataLength){
    inputRef.classList.add("valid")
  }else{
    inputRef.classList.add("invalid")
  }
});



// console.log(Number(inputRef.dataset.length))