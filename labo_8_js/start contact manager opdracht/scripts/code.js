let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn

    valideer();

    if (reported===0) {
        let option = document.createElement("option");

        let txtVoornaam = document.getElementById("txtVoornaam");
        let voornaam = txtVoornaam.value.trim();
        let txtFamilienaam = document.getElementById("txtFamilienaam");
        let familienaam = txtFamilienaam.value.trim();
        let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
        let geboorteDatum = txtGeboorteDatum.value.trim();
        let txtEmail = document.getElementById("txtEmail");
        let email = txtEmail.value.trim();
        let txtAantalKinderen = document.getElementById("txtAantalKinderen");
        let aantalKinderenText = txtAantalKinderen.value.trim();

        option.text = voornaam + " " + familienaam;
        option.value = personen.length.toString();
        let select = document.getElementById("lstPersonen");
        select.appendChild(option);

        let persoon = {
            id: personen.length,
            voornaam: voornaam,
            familienaam: familienaam,
            geboortedatum: geboorteDatum,
            email: email,
            aantalkinderen: aantalKinderenText,
        };

        personen.push(persoon);

        console.log(JSON.stringify(persoon));

    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lijst = document.getElementById("lstPersonen");
    lijst.options[lijst.selectedIndex] = -1;


    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const bewerkLstPersonen = () => {
    let lijst = document.getElementById("lstPersonen");
    let id = lijst.options[lijst.selectedIndex].value;
    console.log(id);
    document.getElementById("txtVoornaam").value = personen[id].voornaam;
    document.getElementById("txtFamilienaam").value = personen[id].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[id].geboortedatum;
    document.getElementById("txtEmail").value = personen[id].email;
    document.getElementById("txtAantalKinderen").value = personen[id].aantalkinderen;

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", bewerkLstPersonen);



    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);