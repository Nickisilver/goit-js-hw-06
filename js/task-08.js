
const form = document.querySelector(".login-form");
const loginBtn = document.querySelector("button");
const emailInput = document.querySelector('[ type="email"]')
const passInput = document.querySelector('[ type="password"]')

form.addEventListener("submit",onFormSubmit )

function onFormSubmit (event){
 
  event.preventDefault();
 
    const objCustomer ={
      email : event.currentTarget.elements.email.value,
      password : event.currentTarget.elements.password.value,
    }
      
    if(emailInput.value === "" ){
        alert("You should to write email")
      }

    if(passInput.value === ""){
        alert("You should to write password")
      }
    
    if(emailInput.value !== "" && passInput.value !== "" ){
      form.reset()
      console.log(objCustomer)
  }

}