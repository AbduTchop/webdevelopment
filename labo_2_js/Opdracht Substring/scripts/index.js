const setup = () => {
    const bereken = () =>{
        let woord = document.getElementById("woord");
        let nummer1 = document.getElementById("nummer1");
        let nummer2 = document.getElementById("nummer2");
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = woord.value.substring(nummer1.value,nummer2.value);
    }
    document.addEventListener("click", bereken);
}
window.addEventListener("load", setup);