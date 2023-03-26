const setup = () => {
    let items = document.querySelectorAll('li');
    let listItems = document.getElementsByClassName("listitem")
    for(let i = 0 ; i < items.length ; i++){
        items[i].setAttribute('class','listitem')
        listItems[i].style.color = 'red'
    }

    let img = document.createElement("img");
    img.setAttribute("src", "images/zakdoek.jpg");
    document.body.appendChild(img);
};
window.addEventListener("load", setup);