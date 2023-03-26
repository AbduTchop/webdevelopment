const setup = () => {
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let blue = document.getElementsByClassName("blue");
    let color = document.getElementsByClassName("colorSection");
    let redValue = document.getElementsByClassName("redSlider");
    let greenValue = document.getElementsByClassName("greenSlider");
    let blueValue = document.getElementsByClassName("blueSlider");
    let button = document.querySelector("#button");
    let rij = document.querySelector(".rij")

    redValue[0].innerHTML = "0";
    greenValue[0].innerHTML = "0";
    blueValue[0].innerHTML = "0";

    const update = () => {
        redValue[0].innerHTML = red[0].value;
        greenValue[0].innerHTML = green[0].value;
        blueValue[0].innerHTML = blue[0].value;
        color[0].style.backgroundColor = `rgb(${red[0].value} , ${green[0].value}, ${blue[0].value})`;
    }

    const save = () => {
        let section = document.createElement("section");
        section.className = "colorSection";
        section.style.backgroundColor = `rgb(${red[0].value} , ${green[0].value}, ${blue[0].value})`;
        rij.appendChild(section);

        let x = document.createElement('input');
        x.setAttribute('type', "button");
        x.setAttribute('value',"x");
        section.appendChild(x);
        x.addEventListener('click',()=>xClick(x));
    }

    const xClick = (x) => {
        rij.removeChild(x.parentNode);
    }

    button.addEventListener("click", save);


    red[0].addEventListener("change",update)
    red[0].addEventListener("input",update);
    green[0].addEventListener("change",update);
    green[0].addEventListener("input",update);
    blue[0].addEventListener("change",update);
    blue[0].addEventListener("input",update);
}

window.addEventListener("load", setup);
