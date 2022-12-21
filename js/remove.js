class Remove{
   // remvoe component from div#section and local storage 
   removeComponent (e){
      // this element 
      let component = e.target.parentElement
      // remove from list 
      component.remove();
      // if item saved in localstorage 
      if (component.querySelector("#isSave").innerHTML == "Saved") {
         // get saved array from LS 
         let saveBox = localStorage.getItem("saveBox")
         // this component's title 
         let h1 = component.querySelector("h1").innerHTML;
         // this component's description 
         let p = component.querySelector("p").innerHTML;
         // find and remove the selected component from array 
         saveBox = JSON.parse(saveBox);
         for (let index = 0; index < saveBox.length; index++) {
            if (saveBox[index]["title"] == h1 && saveBox[index]["desc"] == p) {
               // delet this item from array 
               saveBox.splice(index, 1)
            }
         }
         saveBox = JSON.stringify(saveBox);
         // again set the new saved array 
         localStorage.setItem("saveBox", saveBox);
      }
   }   
}