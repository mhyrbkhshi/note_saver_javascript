class Validate {
   // validate any input and add (correct or incorret)icon 
   validateInput(input) {
      // for finall validation 
      let row;
      // label of this input 
      let label = input.parentElement.querySelector("label")
      // if has icon remove it 
      if (label.querySelector("i")) {
         label.querySelector("i").remove()
      }
      // make icon 
      let icon = document.createElement("i")
      // if input isn't empty and numric 
      if (isNaN(input.value) && input.value) {
         // add correct icon to label 
         icon.style.color = "green"
         icon.setAttribute("class", "fas fa-check")
         label.appendChild(icon)
         // for finall validate 
         row = true
      } else {
         // add incorrect icon to label 
         icon.style.color = "#d54949"
         icon.setAttribute("class", "fas fa-exclamation")
         label.appendChild(icon)
         // for finall validate
         row = false
      }
      // after 1.5s remove icon 
      setTimeout(() => {
         icon.remove()
      }, 1500);
      // for form validate 
      return row 
   }
   // for find wich radio was checked
   validateRdio(form) {
      // checked radio  
      return form.querySelector("input[type='radio']:checked").value
   }
   // validate form (finall validation )
   validateForm(form, input_1, input_2) {
      // validate inputs 
      let inValue_1 = this.validateInput(input_1)
      let inValue_2 = this.validateInput(input_2)
      // if every inputs was correct
      if (inValue_1 && inValue_2 ) {
         // display alert 
         display.displayAlert("Your note added !", "success");
         // find checked radio 
         let radioValue = this.validateRdio(form)
         setTimeout(() => {
            // display component 
            display.displayComponent(input_1.value, input_2.value, radioValue);
            // reset the form 
            form.reset()
         }, 1500);
      } else {
         // display alert 
         display.displayAlert("Check the form !", "danger");
      }
   }
}