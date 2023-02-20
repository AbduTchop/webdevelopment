const familie = ["Andy", "Brandy", "Sandy", "Mandy", "Randy"];
console.log(familie.length);
console.log(familie[0],familie[2],familie[4]);

function VoegNaamToe() {
    let naam = prompt("Geef naam");
    familie.push(naam);
}
VoegNaamToe();
console.log(familie);
console.log(familie.toString());