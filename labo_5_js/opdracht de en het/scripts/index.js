const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    console.log(tekst.split("de").join("het").trim());
}

window.addEventListener("load", setup)