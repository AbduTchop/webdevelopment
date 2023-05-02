let swatchStorage = [];

const storeSliderValues = () => {
    localStorage.setItem("sliderValuesRed", document.getElementById("sldRed").value);
    localStorage.setItem("sliderValuesGreen", document.getElementById("sldGreen").value);
    localStorage.setItem("sliderValuesBlue", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () => {
    let red = localStorage.getItem("sliderValuesRed");
    document.getElementById("sldRed").value = red;
    document.getElementById("lblRed").innerHTML = red;

    let green = localStorage.getItem("sliderValuesGreen");
    document.getElementById("sldGreen").value = green;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = localStorage.getItem("sliderValuesBlue");
    document.getElementById("sldBlue").value = blue;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let kleurinfo = {
        red:document.getElementById("sldRed").value,
        green:document.getElementById("sldGreen").value,
        blue:document.getElementById("sldBlue").value,
    };
    swatchStorage.push(kleurinfo);
    localStorage.setItem("swatchStorage", JSON.stringify(swatchStorage));
};

const restoreSwatches = () => {

    let counter = 0;
    let info = JSON.parse(localStorage.getItem("swatchStorage"));
    for (let i = 0; i < info.length; i++) {
        if (info[i].red !== null) counter++;
        let red = info[i].red;
        let green = info[i].green;
        let blue = info[i].blue;
        addSwatchComponent(red, green, blue);
    }
};
