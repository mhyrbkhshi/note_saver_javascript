class Display {
   constructor() {
      // result container 
      this.result = document.querySelector("#result")
      // submit btn of form 
      this.submitBtn = document.querySelector("button[type='submit']")
   }
   // display alert in div#result
   displayAlert(txt, wich) {
      // make div 
      let div = document.createElement("div")
      div.setAttribute("role", "alert")
      div.setAttribute("class", `alert alert-${wich}`)
      // add text to alert div 
      div.appendChild(document.createTextNode(txt))
      // display alert in result container 
      this.result.appendChild(div)
      // disable submit btn 
      this.submitBtn.disabled = true
      // after 1.5s remove alert and able submit btn 
      setTimeout(() => {
         div.remove()
         this.submitBtn.disabled = false
      }, 1500);
   }
   // make and display component in div#section
   displayComponent(title, desc, radio) {
      // access section part 
      const sectin = document.querySelector("#section")
      // make full component
      let div = document.createElement("div");
      div.setAttribute("class", "jumbotron");
      // make remove btn 
      let removeBtn = document.createElement("button")
      removeBtn.setAttribute("class", "remover")
      removeBtn.innerHTML = "X"
      // event listener for remove button 
      removeBtn.addEventListener("click", remove.removeComponent)
      // append values to component 
      div.innerHTML = `
      <h1>${title}</h1>
      <p>${desc}</p>
      `
      div.appendChild(removeBtn)
      // add text for saved or don't save this item in local storage 
      let p = document.createElement("p")
      p.setAttribute("id", "isSave")
      if (radio == "save") {
         p.setAttribute("style", "color: green; font-size: 13px;")
         p.innerHTML = "Saved"
         div.appendChild(p)
         // set values to localstorage 
         this.displayToLoacalS(title, desc);
      } else if (radio == "d-save") {
         p.setAttribute("style", "color: red; font-size: 13px;")
         p.innerHTML = "Don't saved"
         div.appendChild(p)
         // when loaded documet
      } else {
         p.setAttribute("style", "color: green; font-size: 13px;")
         p.innerHTML = "Saved"
         div.appendChild(p)
      }
      // add the full component to section 
      sectin.appendChild(div)
   }
   // save component to local storage
   displayToLoacalS(title, desc) {
      // add items to local storage 
      adder_1()
      function adder_1() {
         // get saved arraye (from local storage)
         let saveArray = adder_2()
         // add items to array 
         let obj = { title: title, desc: desc };
         // add object to save array
         saveArray.push(obj);
         saveArray = JSON.stringify(saveArray)
         // set array to locals 
         localStorage.setItem("saveBox", saveArray);
      }
      function adder_2() {
         let saveArray;
         // if find save array from localstorage 
         if (localStorage.getItem("saveBox")) {
            saveArray = localStorage.getItem("saveBox")
            saveArray = JSON.parse(saveArray); 
         } else {
            saveArray = [];
         }
         return saveArray
      }
   }
   // after page loaded display component 
   displayAfterLoad() {
      // get saved array 
      let saveArray = localStorage.getItem("saveBox")
      if (saveArray) {
         let title;
         let desc;
         saveArray = JSON.parse(saveArray);
         // make conponent for each item in save array 
         for (let index = 0; index < saveArray.length; index++) {
            title = saveArray[index]["title"]
            desc = saveArray[index]["desc"]
            this.displayComponent(title, desc)
         }
      }
   }
}