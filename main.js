// Dobbiamo crare una password generator


// Chiediamo all'utente il suo nome
let nomeDellaPersona = prompt ("Inserici il tuo nome!");

console.log(nomeDellaPersona);

// Chiediamo all'utente il suo cognome
let cognome = prompt ("Inserici il tuo Cognome!");

console.log(cognome);

// Chiamo all'utente il suo colore preferito
let colore = prompt ("Inserici il tuo colore preferito!");

console.log(colore);

// Prendiamo un numero randomico costante
const numero = 21; 

console.log(numero);

// Prendiamo un numero randomico costante
let password = nomeDellaPersona + cognome + colore + numero;

// Output
console.log(password);

document.getElementById("text").innerHTML = ` ${password} `;

