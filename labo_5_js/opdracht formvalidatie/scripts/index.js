const setup = () => {
    let vnaam = document.getElementById("voornaam");
    let fnaam = document.getElementById("familienaam");
    let gdatum = document.getElementById("geboortedatum");
    let mail = document.getElementById("email");
    let akind = document.getElementById("aantal kinderen");
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");
    let error5 = document.getElementById("error5");
    let button = document.getElementById("valideer");

    const update = () => {
        error1.innerHTML = "";
        error2.innerHTML = "";
        error3.innerHTML = "";
        error4.innerHTML = "";
        error5.innerHTML = "";

        let aantalErrors = 0;

        if (vnaam.value.length > 30) {
            vnaam.style.border = "red solid 3px";
            error1.style.color = "red";
            error1.innerHTML += " max. 30 karakters";
            aantalErrors++;
        } else {
            error1.innerHTML = "";
            vnaam.style.border = "";
        }

        if (fnaam.value.length > 50) {
            fnaam.style.border = "red solid 3px";
            error2.style.color = "red";
            error2.innerHTML += " max. 50 karakters";
            aantalErrors++;
        } else if (fnaam.value.length === 0) {
            fnaam.style.border = "red solid 3px";
            error2.style.color = "red";
            error2.innerHTML += " verplicht veld";
            aantalErrors++;
        } else {
            error2.innerHTML = "";
            fnaam.style.border = "";
        }

        if (gdatum.value.length === 0) {
            gdatum.style.border = "red solid 3px";
            error3.style.color = "red";
            error3.innerHTML += " verplicht veld";
            aantalErrors++;
        } else if (gdatum.value.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])$/)) {
            error3.innerHTML = "";
            gdatum.style.border = "";
        } else {
            gdatum.style.border = "red solid 3px";
            error3.style.color = "red";
            error3.innerHTML += " formaat is niet jjjj-mm-dd";
            aantalErrors++;
        }

        if (mail.value.length === 0) {
            mail.style.border = "red solid 3px";
            error4.style.color = "red";
            error4.innerHTML += " verplicht veld";
            aantalErrors++;
        } else if (mail.value.match(/@/g).length > 1) {
            mail.style.border = "red solid 3px";
            error4.style.color = "red";
            error4.innerHTML += " geen geldig email adres";
            aantalErrors++;
        } else if (mail.value.charAt(mail.value.indexOf("@") - 1) === "" || mail.value.charAt(mail.value.indexOf("@") + 1) === "" ) {
            mail.style.border = "red solid 3px";
            error4.style.color = "red";
            error4.innerHTML += " geen geldig email adres";
            aantalErrors++;
        } else {
            error4.innerHTML = "";
            mail.style.border = "";
        }

        if (akind.value < 0) {
            akind.style.border = "red solid 3px";
            error5.style.color = "red";
            error5.innerHTML += " is geen positief getal";
            aantalErrors++;
        } else if (isNaN(akind.value)) {
            akind.style.border = "red solid 3px";
            error5.style.color = "red";
            error5.innerHTML += "  is geen getal";
            aantalErrors++;
        } else if (akind.value > 99) {
            akind.style.border = "red solid 3px";
            error5.style.color = "red";
            error5.innerHTML += "  is the vruchtbaar";
            aantalErrors++;
        } else {
            error5.innerHTML = "";
            akind.style.border = "";
        }

        if (aantalErrors === 0) {
            window.alert("Proficiat!")
        }
    }

    button.addEventListener("click", update);
}
window.addEventListener("load", setup);