//******************************************************      SNACK 2

let arrayCorte = []
let arrayLunghe = []
let sommaCorta = 0
let sommaLunga = 0

// for (let i = 0; i < zucchine.length; i++) {
//     let zucchinaCorta = zucchine[i].lunghezza
//     let pesoCorta = zucchine[i].peso
//     if (zucchinaCorta < 7) {
//         arrayCorte.push(zucchinaCorta)
//         sommaCorta = sommaCorta + pesoCorta
//     }
// }



// for (let i = 0; i < zucchine.length; i++) {
//     let zucchinaLunga = zucchine[i].lunghezza
//     let pesoLunga = zucchine[i].peso
//     if (zucchinaLunga > 7) {
//         arrayLunghe.push(zucchinaLunga)
//         sommaLunga = sommaLunga + pesoLunga
//     }
// }
// zucchineLunghe(zucchine)


// //creo la funzione per fare il ciclo for di sopra per le zucchine lunghe 
// function zucchineLunghe(ArrayList) {
//     for (let i = 0; i < ArrayList.length; i++) {
//         let Lunga = ArrayList[i].lunghezza
//         let pesoLunga = ArrayList[i].peso
//         if (Lunga > 7) {
//             arrayLunghe.push(Lunga)
//             sommaLunga = sommaLunga + pesoLunga
//         }
//     }
// }

// //creo funzione per fare il ciclo for di sopra per le zucchine corte
// function zucchineCorte(ArrayList) {
//     for (let i = 0; i < ArrayList.length; i++) {
//         let Corta = ArrayList[i].lunghezza
//         let pesoCorta = ArrayList[i].peso
//         if (Corta < 7) {
//             arrayCorte.push(Corta)
//             sommaCorta = sommaCorta + pesoCorta
//         }
//     }
// }

zucchineCorteLunghe(zucchine, "lunghezza", "peso")
console.log(arrayCorte)
console.log("La somma del peso delle zucchine corte è: ",sommaCorta)
console.log(arrayLunghe)
console.log("La somma del peso delle zucchine lunghe è: ",sommaLunga)

//funzione che mi rida sia la somma delle corte che delle piccole
function zucchineCorteLunghe(ArrayList, datoLunghezza, datoPeso) {
    for (let i = 0; i < ArrayList.length; i++) {
        let Lunga = ArrayList[i][datoLunghezza]
        let pesoLunga = ArrayList[i][datoPeso]
        if (Lunga > 7) {
            arrayLunghe.push(Lunga)
            sommaLunga = sommaLunga + pesoLunga
        }
        let Corta = ArrayList[i][datoLunghezza]
        let pesoCorta = ArrayList[i][datoPeso]
        if (Corta < 7) {
            arrayCorte.push(Corta)
            sommaCorta = sommaCorta + pesoCorta
        }
    }
}