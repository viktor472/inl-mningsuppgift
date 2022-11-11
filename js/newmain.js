//gather the neaded elements
//catch the input elements of the input form
var nameVal = document.getElementById("name");
var PhoneVal = document.getElementById("phonenum");
let createContackt = document.getElementById("createcontackt");
//cach the contacktList 
let ul = document.getElementById("ul-list");
//store error messeges
let = errorMesseges = ""


createContackt.addEventListener("click", function (e) {
//create a form wich can take the values of name and number (done)
//Take the values in to a new form and store (done)
//tacke in the othwer funktions and inplement thenm in the program (done)
//fully funktional (nop)
  e.preventDefault();
  var NameVal1 = nameVal.value;
  var numVal1 = PhoneVal.value;

  //validate the inputs
  validate (NameVal1,numVal1);
  //creating the listItem
  let listItem = document.createElement("form");
  
  //creating the listItems
  listItem.innerHTML =`
  <input id ="namevalue" value='${NameVal1}'  disabled>
  <input id ="numvalue" value='${numVal1}' disabled>
  <button id="modify">ändra</button>
  <button id="radera">Radera</button>

  `;
  ul.append(listItem);

  //implemented funktion
  var modifyBtn = document.getElementById("modify")
  var removeBtn = document.getElementById("removeAll")
  var removeitem = document.getElementById("radera")

  modifyBtn.addEventListener("click", shangevalue);
  removeBtn.addEventListener("click", removelist);
 // removeitem.addEventListener("click", removelistitem);
});



//funktions

//change the values so it is posible to eddit (done)
function shangevalue (e){
  e.preventDefault();
  var x = document.getElementById("namevalue"); //isue nead to go from inside the spesifick form 
  var y = document.getElementById("numvalue"); //isue nead to go from inside the spesifick form 
  if (x .disabled) {
    x.removeAttribute("disabled", "");
    y.removeAttribute("disabled", "");
  } 
  else {
    x.setAttribute("disabled", "");
    y.setAttribute("disabled", "");
  }

}
//delete sppesifick item (not done)

 function removelistitem(removeitem){
  removeitem.parentNode.remove();    //isue nead to understand
 }


//remove all items in contackts form (Done)
function removelist (){
  let children =  ul.childNodes;
  children.remove();
}


  //validate if the inputs are fild or not (Done)
function validate (NameVal1, numberVal1){
  if (NameVal1 ==""){
    errorMesseges += 'namn saknas <br>';
  }
  if (numberVal1 ==""){
    errorMesseges += 'numer saknas <br>';
  }

  if (errorMesseges == ""){
    document.getElementById("errorcontainer").innerHTML = `
    <p class="green">Ny kontakt skapad</p>
    `;
  }
  else{
    document.getElementById("errorcontainer").innerHTML = `
    <div class="red">
    ${errorMesseges}
    </div>
    
    `;
  }
  return;
}