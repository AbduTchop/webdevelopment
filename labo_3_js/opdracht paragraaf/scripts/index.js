function setup() {
    let bold=document.getElementsByClassName("belangrijk");
    for (let i = 0; i < bold.length; i++) {
        bold[i].classList.add("opvallend");
    }
}

addEventListener("load", setup)