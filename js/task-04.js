

const btnDecrementRef = document.querySelector("button[data-action=decrement]");
const btnIncrementRef = document.querySelector("button[data-action = increment]");
const counterElRef = document.getElementById("value");
let counterValue = 0;

// console.log(btnDecrement);
// console.log(btnIncrement);
// console.log(counterEl.textContent);

function decrement (){
  counterValue -=1
  counterElRef.textContent = counterValue
  };

  function increment (){
    counterValue +=1
    counterElRef.textContent = counterValue
    };

btnDecrementRef.addEventListener("click", decrement)
btnIncrementRef.addEventListener("click", increment)