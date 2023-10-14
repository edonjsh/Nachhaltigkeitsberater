//Zeitraum von
let datevon = document.querySelector("#zeitraum");
let date = new Date();

datevon.value = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;

//zeitraum bis 
let bisdate = document.querySelector("#zeitraumbis");
let date2 = new Date();

bisdate.value = `${date2.getFullYear().toString()}-${(date2.getMonth() + 1).toString().padStart(2, 0)}-${date2.getDate().toString().padStart(2, 0)}`;

//Uhrzeit von 
let uhrzeitvon = document.querySelector("#uhrzeitvon");
let zeit = new Date();
uhrzeitvon.value = zeit.getHours().toString().padStart(2, 0) + ':' + (zeit.getMinutes()).toString().padStart(2, 0);

//Uhrzeit bis 
let uhrzeitbis = document.querySelector("#uhrzeitbis");
let zeit2 = new Date();
uhrzeitbis.value = (zeit2.getHours() + 3).toString().padStart(2, 0) + ':' + (zeit2.getMinutes()).toString().padStart(2, 0);

function heute() {
    //Uhrzeit umtauschen
    if (datevon.value > bisdate.value) {
        window.confirm("Fehler bei dem Datum. Wollen Sie die Zeiten tauschen?");
        if (window.confirm == true) {

            datevon.innerHTML.replace(datevon.value, bisdate.value);
            bisdate.innerHTML.replace(bisdate.value, datevon.value);
        }
    }
}

//verweissensitives Bild
let sitzplatz = document.querySelector("#sitzplatz");
let s55 = document.querySelector("Sitzplatz 55").alt;
let s56 = document.querySelector("Sitzplatz 56").alt;
let s57 = document.querySelector("Sitzplatz 57").alt;
let s58 = document.querySelector("Sitzplatz 58").alt;
let s59 = document.querySelector("Sitzplatz 59").alt;
let s60 = document.querySelector("Sitzplatz 60").alt;


if (s55.checked == true) {
    sitzplatz.write("Sitzplatz 55");
}
else if (s56.checked) {
    sitzplatz.write("Sitzplatz 56");
}
else if (s57.checked) {
    sitzplatz.write("Sitzplatz 57");
}
else if (s58.checked) {
    sitzplatz.write("Sitzplatz 58");
}
else if (s59.checked) {
    sitzplatz.write("Sitzplatz 59");
}
else if (s60.checked) {
    sitzplatz.write("Sitzplatz 60");
}

//Rechnung und Kartenzahlung 
$("#zahlartRechnung").hide();
$("#zahlartKarte").hide();

function rechnung(){
let button = document.querySelector("#rechnung");
let fieldset = document.querySelector("#zahlartRechnung");
if (button.checked == true) {
    fieldset.style.display = "block";
    document.querySelector("#bezahlung").disabled = false;
} else {
    fieldset.hidden;
}
}

function kartenzahlung() {
    let button3 = document.querySelector("#karte");
    let fieldset3 = document.querySelector("#zahlartKarte");
    if (button3.checked == true) {
        fieldset3.style.display = "block";
        document.querySelector("#bezahlung").disabled = false;
    } else {
        fieldset3.style.display = "none";
    }
}


let jKarte = document.querySelector("#gueltigkeitjahr");
let mKarte = document.querySelector("#monatundjahr");
let now = Date();
let monthAktuell = now.getMonth() + 1;
let yearAktuell = now.getFullYear();
if (yearAktuell < jKarte.value) {
    window.alert("Nicht gültig");
    jKarte.value = null;
    mKarte.value = null;
    mKarte.autofocus;
}


let employees = [
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName": "Jones"}
    {"firstName":"Robert", "lastName": "Müller"}
    {"firstName":"Johannes", "lastName": "Burg"}
    ];

// Tabelle erstellen 
reservierungen = JSON.parse(response);
let i;
let out = "<table>";

for (i = 0; i < reservierungen.length; i++) {
    out += "<thead></thead>" +
        "<tr><td>" +
        reservierungen[i].Fahrzeugtyp +
        "</td><td>" +
        reservierungen[i].Bereitstellungsort +
        "</td><td>" +
        reservierungen[i].Veranstaltung +
        "</td></tr>";
        reservierungen[i].Preiskategorie +
        "</td></tr>";
        reservierungen[i].Zeitraum_von +
        "</td></tr>";
        reservierungen[i].Zeitraum_bis +
        "</td></tr>";
        reservierungen[i].Uhrzeit_von +
        "</td></tr>";
        reservierungen[i].Uhrzeit_bis +
        "</td></tr>";
        reservierungen[i].Sitzplatz +
        "</td></tr>";
        reservierungen[i].Bezahloption +
        "</td></tr>";
}

out += "</table>"
document. querySelector("#reservierungen").innerHTML = out;