let storage = [];
let key = false;
const setup = () => {
    let text = document.getElementById("textbox").value;
    let site;
    let query;
    let url;

    const generateUrl = () => {
        site = null;
        query = null;
        url = null;
        if (text.substring(0, 2)==="/g") {
            let rest = text.substring(3);
            site = "Google";
            query = rest;
            url = "https://www.google.com/search?q="+rest;
            window.open("https://www.google.com/search?q="+rest);
        } else if (text.substring(0, 2)==="/y") {
            let rest = text.substring(3);
            site = "Youtube";
            query = rest;
            url = "https://www.youtube.com/results?search_query="+rest;
            window.open("https://www.youtube.com/results?search_query="+rest);
        } else if (text.substring(0, 2)==="/t") {
            let rest = text.substring(3);
            site = "Twitter";
            query = rest;
            url = "https://twitter.com/hashtag/"+rest;
            window.open("https://twitter.com/hashtag/"+rest);
        } else if (text.substring(0, 2)==="/i") {
            let rest = text.substring(3);
            site = "Instagram";
            query = rest;
            url = "https://www.instagram.com/explore/tags/"+rest;
            window.open("https://www.instagram.com/explore/tags/"+rest);
        } else if (text.substring(0, 2).match(
            /[A-Za-z]/)) {
            alert("Unknown command prefix");
        } else {
            alert("Invalid command");
        }
    }

    const addCard = (title, subtitle, link) => {
        let cards = document.getElementById("cards");

        let cardupper = document.createElement("div") // col-4
        let card = document.createElement("div") // card
        let cardbody = document.createElement("div") //card-body
        let cardtitle = document.createElement("h5") // card-title mb-3
        let cardsubtitle  = document.createElement("h6") // card-subtitle mb-4
        let cardbutton  = document.createElement("a") // card-link
        let breakel = document.createElement("br")

        cardupper.setAttribute("class", "col-4")
        card.setAttribute("class", "card");
        cardbody.setAttribute("class", "card-body");
        cardtitle.setAttribute("class", "card-title mb-3");
        cardsubtitle.setAttribute("class", "card-title mb-4");
        cardbutton.setAttribute("href", link);
        cardbutton.setAttribute("target", "_blank");

        if (title==="Google") {
            card.setAttribute("id", "gcard");
        } else if (title==="Youtube") {
            card.setAttribute("id", "ycard");
        } else if (title==="Twitter") {
            card.setAttribute("id", "tcard");
        } else if (title==="Instagram") {
            card.setAttribute("id", "icard");
        }

        cardtitle.textContent = title;
        cardsubtitle.textContent = subtitle;
        cardbutton.textContent = "Go!";

        cardbody.append(cardtitle, cardsubtitle, cardbutton);
        card.append(cardbody);
        cardupper.append(card, breakel);

        cards.append(cardupper);
    }

    const updateText = () => {
        text = document.getElementById("textbox").value;
    }

    const storeHistory = () => {
        let entry = {
            title: site,
            subtitle: query,
            link: url,
        }

        storage.push(entry);
        localStorage.setItem("storage", JSON.stringify(storage));
    }

    const restoreHistory = () => {
        storage = JSON.parse(localStorage.getItem("storage"));
    }

    const restoreCards = () => {
        for (let i = 0; i < storage.length; i++) {
            addCard(storage[i].title, storage[i].subtitle, storage[i].link);
        }
    }

    const checkStorage = () => {
        key = localStorage.getItem("storage") !== null;
    }

    const main = () => {
        generateUrl();
        if (site!==null) {
            addCard(site, query, url);
            storeHistory();
        }
    }

    let textbox = document.getElementById("textbox")
    textbox.addEventListener("change", updateText);
    let search = document.getElementById("search");
    search.addEventListener("click", main);
    checkStorage();
    if (key===true) {
        restoreHistory();
        restoreCards();
    }
}

window.addEventListener("load", setup);