const setup = () => {
    let button = document.getElementById("button");

    const klik = () => {
        let div = document.querySelector('#myDIV');
        let p = document.createElement("p");
        p.innerText = "text";
        div.append(p);
    }

    button.addEventListener('click',klik)
}
window.addEventListener("load", setup);