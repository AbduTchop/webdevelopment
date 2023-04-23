const setup = () => {
    let vandaag = new Date();
    let verjaardag = new Date(2024, 1, 19);
    let verschilms = verjaardag.getTime() - vandaag.getTime();
    let verschildagen = Math.ceil(verschilms / (1000 * 3600 * 24));

    console.log(verschildagen);
}

window.addEventListener("load", setup)