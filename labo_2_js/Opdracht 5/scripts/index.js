function setup() {

    function wijzig() {
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = "Welkom!";
    }

    document.getElementById("knop").addEventListener("click", wijzig);
}

window.addEventListener("load", setup);