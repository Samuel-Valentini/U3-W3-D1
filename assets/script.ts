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

const myName: string = "Samuel";
const myAge: number = 38;
let amIStudyingTypescript: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
    return "Ciao " + name;
};

console.log(greet("Stefano"));

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
    return a + b;
};

console.log(sum(0.2, 0.1));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const ivator = (price: string): string => {
    return (Math.round(parseFloat(price) * 1.22 * 100) / 100).toFixed(2) + " €";
};

console.log(ivator("100.00 €"));
console.log(ivator("0.01 €"));
console.log(ivator("100.20 €"));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatenator = (str1: string, str2: string): number => {
    return (str1 + str2).length;
};

console.log(concatenator("uno", "due"));

// 7) Cos'è un Type Union e come si scrive?

// È una condizione in cui una variabile può contenere valori di due o più tipi diversi

let rate: number | string = "ottimo";

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let attendance: number | null | undefined;

console.log(attendance);

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type WeekDay =
    | "lunedì"
    | "martedì"
    | "mercoledì"
    | "giovedì"
    | "venerdì"
    | "sabato"
    | "domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers2: number[] = [1, 2, 3];
const numbers3: Array<number> = [1, 2, 3];
const numbers: [number, number, number] = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let arrayOfFive: [string, string, string, number, number];

// 12) Qual è la differenza tra type e interface?

// I type non sono estensibili, ma al massimo si può fare una type union.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Identify {
    firstname: string;
    lastname: string;
    age: string;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
    email: string;
    phone?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Student {
    studentName: string;
    rate: string | number;
}

let studentsArray: Student[];

studentsArray = [
    { studentName: "gino", rate: "ottimo" },
    { studentName: "marco", rate: 10 },
];

console.log(studentsArray);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
    humanUse: boolean;
    color: string;
}

interface Auto extends Veicolo {
    drivingSide: string;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

let toyotaRav4: Auto = {
    humanUse: true,
    color: "white, black, blue",
    drivingSide: "left or right",
};

console.log(toyotaRav4);

// 18) Cosa sono i Generics in TypeScript?

// sono dei parametri da dare ad un interface definita che indicano che tipo di valore può essere contenuto dalle proprietà definite dal generic.

// 19) È possibile avere più tipi generici in un'interfaccia?

// Sì

// 20) Crea un'interfaccia generica per una risposta API.

interface APIResponse<D, N, E = "string"> {
    data: D;
    status: N;
    ok: boolean;
    error?: E;
}
