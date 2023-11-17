// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// LESSSSGOOOOOO
// ETÀ
const age = parseInt(prompt("quanti anni hai?"));
console.log(age);
// KM DA PERCORRERE
const km = parseInt(prompt("quanti km devi percorrere?"));
console.log(km);
// DEFINISCO PREZZO DEL BIGLIETTO
let fullPrice = km * 0.21;
console.log(fullPrice);
// APPLICO SCONTO E CALCOLO PREZZO FINALE
if (age > 65) {
  let discountPrice = (fullPrice * (45 / 100)).toFixed(2);
  //   console.log(discountPrice);
  document.getElementById(
    "train_ticket"
  ).innerHTML = `il prezzo del tuo biglietto è di ${discountPrice}€`;
} else if (age < 18) {
  let discountPrice = (fullPrice * (20 / 100)).toFixed(2);
  //   console.log(discountPrice);
  document.getElementById(
    "train_ticket"
  ).innerHTML = `il prezzo del tuo biglietto è di ${discountPrice}€`;
} else {
  let discountPrice = fullPrice.toFixed(2);
  //   console.log(discountPrice);
  document.getElementById(
    "train_ticket"
  ).innerHTML = `il prezzo del tuo biglietto è di ${discountPrice}€`;
}
