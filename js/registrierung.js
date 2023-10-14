
let elm = document.querySelector("#registrationsubmit");
elm.disabled = true;
function myFunction() {
    if (document.querySelector("#checkbox").checked == false) {
        elm.disabled = true;
    }
    else {
        elm.disabled = false;
    }
}


let password = document.querySelector("#password");
let password2 = document.querySelector("#pwcheck");
function checkPwd() {
    if (password.value == password2.value) {
        password.innerHTML = '<i class="fas fa-check"></i>';
    }
    else {
        let falsepw = confirm("Passwörter stimmen nicht überein. Bitte wiederholen");
        falsepw.innerHTML = '<i class="fas fa-times-circle"></i>';
        if (falsepw == true) {
            password = null;
            password2 = null;
            password.autofocus;
        }
    }
}


function isValidCC(cc) {
    // Entferne Leerzeichen und Trennzeichen
    cc = cc.replace(/\s+/g, '').replace(/[-]/g, '');
  
    // Prüfe, ob die Länge der Kreditkartennummer ungerade ist
    if (cc.length % 2 !== 0) {
      return false;
    }
  
    // Iteriere über alle Stellen der Kreditkartennummer und multipliziere jede ungerade Stelle mit 2
    let sum = 0;
    for (let i = 0; i < cc.length; i++) {
      let digit = parseInt(cc[i]);
      if (i % 2 === 0) {
        digit *= 2;
        // Wenn das Ergebnis größer als 9 ist, zerlegen wir es in Einzelziffern und addieren sie
        if (digit > 9) {
          sum += digit - 9;
        } else {
          sum += digit;
        }
      } else {
        sum += digit;
      }
    }
  
    // Prüfe, ob die Summe durch 10 teilbar ist. Wenn ja, ist die Kreditkartennummer gültig.
    return sum % 10 === 0;
  }
  
  function validateCC() {
    // Holen Sie sich den Wert der Kreditkartennummer aus dem Eingabefeld
    let cc = document.getElementById("kartennummer").value;
  
    // Überprüfen Sie die Gültigkeit der Kreditkartennummer mithilfe des Luhn-Algorithmus
    let isValid = isValidCC(cc);
  
    // Geben Sie eine Meldung aus, ob die Kreditkartennummer gültig ist oder nicht
    if (isValid) {
      alert("Die Kreditkartennummer ist gültig!");
    } else {
      alert("Die Kreditkartennummer ist ungültig!");
    }
  }
  