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
  var name = nameVal.value;
  var num = PhoneVal.value;

  //validate the inputs
  //validate ();
  //creating the listItem
  let listItem = document.createElement("li")
  let namevalue = document.createElement("input")
  let numvalue = document.createElement("input")
  let modifybtn = document.createElement("button")
  let deletebtn = document.createElement("button")
  
  namevalue.setAttribute("disabled", "");
  numvalue.setAttribute("disabled", "");
  
  namevalue.value = name
  numvalue.value = num

  modifybtn.innerHTML= "Ändra";
  deletebtn.innerHTML= "Radera";

  ul.append(listItem);
  listItem.append(namevalue, numvalue, modifybtn, deletebtn);

  modifybtn.addEventListener("click", function(){
    let parentelement = this.parentNode; 
    if (namevalue.disabled) {
      namevalue.removeAttribute("disabled", "");
      numvalue.removeAttribute("disabled", "");
      modifybtn.innerHTML= "Spara";
    } 
    else {
      namevalue.setAttribute("disabled", "");
      numvalue.setAttribute("disabled", "");
      modifybtn.innerHTML= "Ändra";
    }
  
  } );

  deletebtn.addEventListener("click", function(){
    let parentelement = this.parentNode; 
    parentelement.remove()
  });

  

  //modifyBtn.addEventListener("click", shangevalue(namevalue, numvalue) );
  //removeBtn.addEventListener("click", removelist);
  //removeitem.addEventListener("click", removelistitem);
});

//funktions

createContackt.addEventListener("click", function () {
  nameVal.value = "";
  PhoneVal.value = "";
});


var deletelist = document.getElementById("removeAll")
deletelist.addEventListener("click", function(){
  while (ul.hasChildNodes()){
    ul.removeChild(ul.firstChild)
  }
});



  //validate if the inputs are fild or not (Done)
  //disables thew user from making the kontackt(not done)
  //doesent write new 
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