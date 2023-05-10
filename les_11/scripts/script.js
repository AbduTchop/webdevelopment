let storage = [];
let key = false;
const update = () => {
    let tablelist = document.getElementById("tablelist");
    let inputvalue = document.getElementById("inputveld").value;

    let getTime = () => {
        let today = new Date();
        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    const updateInput = () => {
        inputvalue = document.getElementById("inputveld").value;
    }

    const createTable = (input, time) => {
        //maakt tabellen
        let table = document.createElement("div");
        let header = document.createElement("div");
        table.setAttribute("class", "table");
        header.setAttribute("id", "header");
        header.setAttribute("class", "row");

        table.append(header);
        let i = 0;
        while (i !== 10) {
            i++;
            this["row"+i] = document.createElement("div");
            this["row"+i].setAttribute("class", "row");
            this["row"+i].textContent = "text";
            table.append(this["row"+i]);
            this["row"+i].textContent = `${input} x ${i} = ` + input * i;
        }

        header.textContent = "header";
        tablelist.append(table);

        //vult tabellen
        header.textContent = `Tafel van ${input} aangemaakt op: ${time}`

        //inputveld leeg
        document.getElementById("inputveld").value = " ";
    }

    const clearStorage = () => {
        while (tablelist.firstChild) {
            tablelist.removeChild(tablelist.firstChild);
        }
        localStorage.removeItem("storage");
        storage = [];
    }

    const storeTables = () => {
        let entry = {
            input: inputvalue,
            timestamp: getTime(),
        }

        storage.push(entry);
        localStorage.setItem("storage", JSON.stringify(storage));
    }

    const restoreStorage = () => {
        storage = JSON.parse(localStorage.getItem("storage"));
    }

    const restoreTables = () => {
        for (let i = 0; i < storage.length; i++) {
            createTable(storage[i].input, storage[i].timestamp);
        }
    }

    const checkStorage = () => {
        key = localStorage.getItem("storage") !== null;
    }

    let key2;
    const checkInput = () => {

        key2 = !!inputvalue.match(/\d/);
        if (key2===false) {
            window.alert("Je moet een getal ingeven!")
        }
    }

    const main = () => {
        checkInput()
        if (key2===true) {
            createTable(inputvalue, getTime());
            storeTables();
        }
    }

    let button = document.getElementById("button");
    button.addEventListener("click", main);
    let clear = document.getElementById("clear");
    clear.addEventListener("click", clearStorage);
    let inputveld = document.getElementById("inputveld");
    inputveld.addEventListener("change", updateInput);
    checkStorage();
    if (key===true) {
        restoreStorage();
        restoreTables();
    }
}

window.addEventListener("load", update);