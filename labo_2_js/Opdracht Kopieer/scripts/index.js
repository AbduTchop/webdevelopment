const setup = () => {
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = txtInput.value;
    }

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

window.addEventListener("load", setup)