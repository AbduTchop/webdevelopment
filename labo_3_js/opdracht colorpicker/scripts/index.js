const setup = () => {
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let blue = document.getElementsByClassName("blue");
    let color = document.getElementsByClassName("colorSection");
    let redValue = document.getElementsByClassName("redSlider");
    let greenValue = document.getElementsByClassName("greenSlider");
    let blueValue = document.getElementsByClassName("blueSlider");

    redValue[0].innerHTML = "0";
    greenValue[0].innerHTML = "0";
    blueValue[0].innerHTML = "0";

    const update = () => {
        redValue[0].innerHTML = red[0].value;
        greenValue[0].innerHTML = green[0].value;
        blueValue[0].innerHTML = blue[0].value;
        color[0].style.backgroundColor = `rgb(${red[0].value} , ${green[0].value}, ${blue[0].value})`;
    }

    red[0].addEventListener("change",update)
    red[0].addEventListener("input",update);
    green[0].addEventListener("change",update);
    green[0].addEventListener("input",update);
    blue[0].addEventListener("change",update);
    blue[0].addEventListener("input",update);
}

window.addEventListener("load", setup);
