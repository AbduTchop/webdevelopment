const setup = () => {
    const tekst = document.querySelectorAll("p");
    tekst[0].textContent = "Good Job!";
}

window.addEventListener("load", setup);