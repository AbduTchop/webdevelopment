const setup = () => {
    let tekstUppercase = document.getElementById("tekst").textContent;
    let tekst = tekstUppercase.toLowerCase();
    let count = 0;

    let index = tekst.indexOf("an");
    while (index > -1) {
        ++count;
        index = tekst.indexOf("an", ++index);
    }

    console.log(count);
    count = 0;

    index = tekst.lastIndexOf("an");
    while (index > -1) {
        ++count;
        index = tekst.lastIndexOf("an", --index);
    }

    console.log(count);
}

window.addEventListener("load", setup)