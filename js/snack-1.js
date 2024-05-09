let zucchine = [
    {   
        varietà: "gialla",
        peso: 3,
        lunghezza: 6
    },
    {   
        varietà: "gialla",
        peso: 5,
        lunghezza: 10
    },
    {   
        varietà: "gialla",
        peso: 3,
        lunghezza: 6
    },
    {   
        varietà: "gialla",
        peso: 5,
        lunghezza: 10
    },
    {   
        varietà: "gialla",
        peso: 3,
        lunghezza: 6
    },
    {   
        varietà: "gialla",
        peso: 5,
        lunghezza: 10
    },
    {   
        varietà: "gialla",
        peso: 3,
        lunghezza: 6
    },
    {   
        varietà: "gialla",
        peso: 5,
        lunghezza: 10
    },
    {   
        varietà: "gialla",
        peso: 3,
        lunghezza: 6
    },
    {   
        varietà: "gialla",
        peso: 5,
        lunghezza: 10
    } 
]
console.log(zucchine)

// ************************************************************* */ SNACK 1

// //qui addiziono a mano per ogni indice di zucchine.peso
// let pesoTotale = zucchine[0].peso + zucchine[1].peso + zucchine[2].peso + zucchine[3].peso + zucchine[4].peso + zucchine[5].peso + zucchine[6].peso + zucchine[7].peso + zucchine[8].peso + zucchine[9].peso
// console.log("Il peso Totale è", pesoTotale)

//creo variabile che poi incremento nel ciclo
let pesoTotaleCiclo = 0
//qui uso il ciclo dove l'indice i è uguale all'indice zucchine.peso
for (let i = 0; i < zucchine.length; i++) {
    //creo variabile zucchina singola e gli dico che e uguale a zucchine.peso di ogni indice
    let zucchinaSingola = zucchine[i].peso
    //richiamo la variabile pesototale e a ogni giro la addizziono con zucchina singola
    pesoTotaleCiclo = pesoTotaleCiclo + zucchinaSingola
    console.log(pesoTotaleCiclo)
}

console.log("Il peso totale delle zucchine del ciclo è:", pesoTotaleCiclo)
