// class 
const validate = new Validate()
const display = new Display()
const remove = new Remove()

// variable 
// title input 
let title = document.querySelector("#TextInput");
// description input 
let desc = document.querySelector("#TextArea");
// submit btn  
let submit = document.querySelector(".btn")
let form = document.querySelector("form")


// event listener 
eventListener();
function eventListener() {
   // when title input blured 
   title.addEventListener("blur", e => {
      // validate this input (this element)
      validate.validateInput(e.target) 
   })
   // when description input blured 
   desc.addEventListener("blur", e => {
      // validate this input (this element)
      validate.validateInput(e.target)
   })
   // when submit btn clicked 
   submit.addEventListener("click", e => {
      e.preventDefault()
      // validate form (form(for validate radioBtns), inputs)
      validate.validateForm(form, title, desc)
   }) 
   // when page loaded 
   document.addEventListener("DOMContentLoaded", e => {
      // display saved component
      display.displayAfterLoad()
   })
}