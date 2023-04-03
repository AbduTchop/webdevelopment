const setup = () => {
    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    };

    let sprite = document.querySelector("#sprite");
    let playField = document.querySelector("#playField");
    let startButton = document.getElementById("startButton");
    let hits = document.querySelector("#hits");
    let inGame = false;
    let time;

    const spriteMove = () => {
        let maxY = playField.clientHeight - sprite.offsetHeight;
        console.log(maxY);
        let maxX = playField.clientWidth - sprite.offsetWidth;
        console.log(maxX);
        sprite.style.bottom= (Math.random() * -maxY + playField.offsetTop+50) + "px";
        sprite.style.right= (Math.random() * (-maxX + playField.offsetLeft)) + "px";
    }

    const spriteChange = () => {
        let randomNumber = Math.round(Math.random() * 4);
        sprite.src = `images/${randomNumber}.png`;
    }

    const spriteClick = () => {
        if (inGame===true) {
            if (sprite.src.slice(-5)==="0.png") {
                gameOver();
            } else {
                spriteChange();
                spriteMove();
                clearTimeout(time);
                time = setTimeout(noClick, 4000);
                global.score++;
                hits.innerText = global.score.toString();
            }
        }
    }

    const gameOver = () => {
        window.alert("GAME OVER");
        location.reload();
    }

    const noClick = () => {
        spriteChange();
        spriteMove();
        time = setTimeout(noClick, 4000);
    }


    const speel = () => {
        inGame = true;
        startButton.remove();
        noClick();
    }

    startButton.addEventListener("click", speel);
    sprite.addEventListener("click", spriteClick);
}


window.addEventListener("load", setup);


