const setup = () => {

    let stop = Boolean(false);
    let lijst = []

    while(stop===false) {
        let gemeente = prompt("Gemeente:");

        if (gemeente==="stop") {
            stop = true;
        } else if (gemeente!=="stop") {
            lijst.push(gemeente);
        }
    }

    lijst.sort();
    let select = document.getElementById("gem");

    for (let i = 0; i < lijst.length; i++) {
        let opt = lijst[i];
        let el = document.createElement("option");
        el.innerHTML = opt;
        select.append(el);
    }
}

window.addEventListener("load", setup)