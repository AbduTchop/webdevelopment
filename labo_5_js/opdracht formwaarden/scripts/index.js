const setup = () => {
    let r = document.getElementById("roker");
    let m = document.getElementsByName("taal");
    let f = document.getElementById("buurland");
    let b = document.getElementById("bestelling");
    let button = document.getElementById("knop")
    let bestelling = "";

    const update = () => {
        if (r.checked) {
            console.log("is een roker")
        } else {
            console.log("is geen roker")
        }

        if (m[1].checked) {
            console.log("moedertaal is nl")
        } else if (m[2].checked) {
            console.log("moedertaal is fr")
        } else {
            console.log("moedertaal is de")
        }

        console.log("favoriete buurland is " + f.value)

        for(let i = 0 ; i < b.options.length; i++){
            if(b.options[i].selected){
                bestelling += " " + b.options[i].innerHTML;
            }
        }
        console.log("bestelling bestaat uit" + bestelling);

    }

    button.addEventListener("click", update)
}
window.addEventListener("load", setup)