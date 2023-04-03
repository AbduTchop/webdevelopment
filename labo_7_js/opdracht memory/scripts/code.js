let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    AANTAL_CLICKS: 0,
    KAART_1: null,
    KAART_2: null,
    KAARTINDEX_1: null,
    KAARTINDEX_2: null,
}

const setup = () => {
    let speelveld = document.createElement("div");
    speelveld.classList.add("speelveld")
    document.body.appendChild(speelveld);

    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        let rij = document.createElement("div");
        speelveld.appendChild(rij);
        for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
            let kaart = document.createElement("img");
            kaart.classList.add("kaart");
            kaart.src = "images/achterkant.png";
            rij.appendChild(kaart);
        }
    }


    const assignKaart = () => {
        let arr = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
        arr.sort( () => .5 - Math.random() );
        let kaart = document.querySelectorAll(".kaart");

        for (let i = 0; i < kaart.length; i++) {
            kaart[i].setAttribute("id", arr[i]);
        }
    }

    const checkJuist = () => {
        if (global.AANTAL_CLICKS===2) {
            if (global.KAART_1===global.KAART_2) {
                kaart[global.KAARTINDEX_1].remove();
                kaart[global.KAARTINDEX_2].remove();
            } else {
                kaart[global.KAARTINDEX_1].src = "images/achterkant.png";
                kaart[global.KAARTINDEX_2].src = "images/achterkant.png";
            }
            global.AANTAL_CLICKS = 0;
        }
    }

    const toonKaart1 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[0].getAttribute("id").charAt(0);
            kaart[0].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 0;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[0].getAttribute("id").charAt(0);
            kaart[0].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 0;
        }
    }

    const toonKaart2 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[1].getAttribute("id").charAt(0);
            kaart[1].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 1;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[1].getAttribute("id").charAt(0);
            kaart[1].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 1;
        }
    }

    const toonKaart3 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[2].getAttribute("id").charAt(0);
            kaart[2].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 2;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[2].getAttribute("id").charAt(0);
            kaart[2].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 2;
        }
    }

    const toonKaart4 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[3].getAttribute("id").charAt(0);
            kaart[3].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 3;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[3].getAttribute("id").charAt(0);
            kaart[3].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 3;
        }
    }
    const toonKaart5 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[4].getAttribute("id").charAt(0);
            kaart[4].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 4;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[4].getAttribute("id").charAt(0);
            kaart[4].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 4;
        }
    }

    const toonKaart6 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[5].getAttribute("id").charAt(0);
            kaart[5].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 5;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[5].getAttribute("id").charAt(0);
            kaart[5].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 5;
        }
    }

    const toonKaart7 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[6].getAttribute("id").charAt(0);
            kaart[6].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 6;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[6].getAttribute("id").charAt(0);
            kaart[6].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 6;
        }
    }

    const toonKaart8 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[7].getAttribute("id").charAt(0);
            kaart[7].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 7;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[7].getAttribute("id").charAt(0);
            kaart[7].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 7;
        }
    }

    const toonKaart9 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[8].getAttribute("id").charAt(0);
            kaart[8].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 8;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[8].getAttribute("id").charAt(0);
            kaart[8].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 8;
        }
    }

    const toonKaart10 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[9].getAttribute("id").charAt(0);
            kaart[9].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 9;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[9].getAttribute("id").charAt(0);
            kaart[9].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 9;
        }
    }

    const toonKaart11 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[10].getAttribute("id").charAt(0);
            kaart[10].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 10;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[10].getAttribute("id").charAt(0);
            kaart[10].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 10;
        }
    }

    const toonKaart12 = () => {
        if (global.AANTAL_CLICKS===1) {
            let number = kaart[11].getAttribute("id").charAt(0);
            kaart[11].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_2 = number;
            global.KAARTINDEX_2 = 11;
            setTimeout(checkJuist, 1000);
        } else {
            let number = kaart[11].getAttribute("id").charAt(0);
            kaart[11].setAttribute("src", `images/kaart${number}.png`);
            global.AANTAL_CLICKS++;
            global.KAART_1 = number;
            global.KAARTINDEX_1 = 11;
        }
    }

    assignKaart();

    let kaart = document.querySelectorAll(".kaart");

    kaart[0].addEventListener("click", toonKaart1);
    kaart[1].addEventListener("click", toonKaart2);
    kaart[2].addEventListener("click", toonKaart3);
    kaart[3].addEventListener("click", toonKaart4);
    kaart[4].addEventListener("click", toonKaart5);
    kaart[5].addEventListener("click", toonKaart6);
    kaart[6].addEventListener("click", toonKaart7);
    kaart[7].addEventListener("click", toonKaart8);
    kaart[8].addEventListener("click", toonKaart9);
    kaart[9].addEventListener("click", toonKaart10);
    kaart[10].addEventListener("click", toonKaart11);
    kaart[11].addEventListener("click", toonKaart12);
}

window.addEventListener("load", setup);