const setup = () => {
    const update = () => {
        let input = document.getElementById("invulveld");
        let output = document.getElementById("result");
        console.log(input.value.split("").join(" "));
    }

    let button = document.getElementById("knop");
    button.addEventListener("click", update);
}

window.addEventListener("load", setup)