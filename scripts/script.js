const setup = () => {

    const welcome = document.getElementById("au");
    let welcomeKey;

    const welcomeUser = () => {
        welcome.src = "audio/welcome.mp3";
        welcome.play().then(r => r);
        localStorage.setItem("visited", "true");
    }

    const restoreWelcome = () => {
        welcomeKey = JSON.parse(localStorage.getItem("visited"));
    }

    const checkWelcome = () => {
        welcomeKey = localStorage.getItem("visited") !== null;
    }

    const main = () => {
        checkWelcome();
        if (welcomeKey===false) {
            welcomeUser()
        }
    }

    restoreWelcome();
    window.addEventListener("mousemove", main);
}

window.addEventListener("load", setup);