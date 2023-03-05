const setup = () => {
    let allPrices = document.getElementsByClassName("price")
    let allAmount = document.getElementsByClassName("amount");
    let allBtw = document.getElementsByClassName("btw");
    let allSubtotal = document.getElementsByClassName("subtotal");
    let total = document.getElementsByClassName("total");
    let button = document.getElementById("bereken");

    const update = () => {
        let price1 = parseFloat(allPrices[0].textContent);
        let amount1 = parseInt(allAmount[0].value);
        let btw1 = parseInt(allBtw[0].textContent);

        let price2 = parseFloat(allPrices[1].textContent);
        let amount2 = parseInt(allAmount[1].value);
        let btw2 = parseInt(allBtw[1].textContent);

        let price3 = parseFloat(allPrices[2].textContent);
        let amount3 = parseInt(allAmount[2].value);
        let btw3 = parseInt(allBtw[2].textContent);

        let ber1 = (price1 + (price1/100 * btw1)) * amount1;
        let ber2 = (price2 + (price2/100 * btw2)) * amount2;
        let ber3 = (price3 + (price3/100 * btw3)) * amount3;
        allSubtotal[0].innerHTML = ber1.toFixed(2) + " Eur";
        allSubtotal[1].innerHTML = ber2.toFixed(2) + " Eur";
        allSubtotal[2].innerHTML = ber3.toFixed(2) + " Eur";

        let totalUnrounded = ber1 + ber2 + ber3;
        total[0].innerHTML = totalUnrounded.toFixed(2) + " Eur";
    }

    button.addEventListener("click", update);
}
window.addEventListener("load", setup);