const setup = () => {

    let welcomeKey;
    const welcome = () => {
        let welcome = new Audio('audio/welcome.mp3');
        welcome.autoplay = true;
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
            welcome()
        }
    }

    restoreWelcome();
    main();
}

window.addEventListener("load", setup);