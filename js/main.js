//get submitet form and add into an array wich then is displayd under "Kontakter"
let contacktForm = document.getElementById("contacktform");
let contacktList = document.getElementById("contacktlist");
//Thre mandatory funktions:
/*
● Scenario 1 (Skapa kontakt)
○ Användaren skriver in namn och telefonnummer i respektive fält
○ Användaren klickar på knappen för att skapa
○ Kontakten läggs till kontaktlistan
*/
contacktForm.addEventListener("submit", function createcontackt(f) {
  f.preventDefault();
  var nameValue = document.getElementById("name").value;
  var numberValue = document.getElementById("number").value;

  let newcontackt = document.createElement("ul");
  //newcontackt.classList.add("contacktbox");
  newcontackt.innerHTML = `
  <li>
  <form id="contacktform" onsubmit="" disabled>
        <input type="text" id="nameLi" value="${nameValue}"  disabled/>
        <input type="number" id="numberLi" value = "${numberValue}" disabled />
        <input type="submit" id="endrachild" value="Ändra" />
        <input type="submit" value="Radera" />
    </form>
  </li>
  `;
  contacktList.append(newcontackt);
});

/*
● Scenario 2 (Redigera kontakt)
○ Kontaktens båda textfält är låsta som default, dvs uppgifterna går inte att
redigera
○ Användaren klickar på ‘Ändra’- knappen för att redigera en tillagd kontakt
○ Kontaktuppgifterna går nu att redigera
○ Användaren redigerar kontaktuppgifterna
○ Användaren klickar igen på samma knapp för att spara uppgifterna.
○ Kontaktens textfält blir låsta, och går ej att redigera.
○ Man skall kunna repetera denna process flera gånger om.
*/

/*
new funktion wich then changes the inner html on the form (<form id="contacktform" onsubmit="">)

*/
let endraContackt = document.getElementById("endrachild");

endraContackt.addEventListener("submit", function createcontackt(f) {
  f.preventDefault();
  return alert("hello");
});
/*
● Scenario 3 (Radera kontakt)
○ Användaren klickar på ‘radera’-knappen, som tar bort kontakten från listan
*/
