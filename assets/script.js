console.log("Hello World!");
// 1) Quali sono i tipi primitivi principali in TypeScript?
// Sono :
// string
// number
// boolean
// undefined
// null
// any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Samuel";
var myAge = 38;
var amIStudyingTypescript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Stefano"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(0.2, 0.1));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var ivator = function (price) {
    return (Math.round(parseFloat(price) * 1.22 * 100) / 100).toFixed(2) + " €";
};
console.log(ivator("100.00 €"));
console.log(ivator("0.01 €"));
console.log(ivator("100.20 €"));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatenator = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(concatenator("uno", "due"));
// 7) Cos'è un Type Union e come si scrive?
// È una condizione in cui una variabile può contenere valori di due o più tipi diversi
var rate = "ottimo";
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var attendance;
console.log(attendance);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers2 = [1, 2, 3];
var numbers3 = [1, 2, 3];
var numbers = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var arrayOfFive;
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
