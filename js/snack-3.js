/*************************************************************   SNACK 3 **************************************/
//Funzione che rigira qualsiasi parola
function textReverse(testoDaRigirare) {
    let parola = testoDaRigirare
    console.log(parola)
    let splitParolaReverse = parola.split("")
    console.log(splitParolaReverse)
    let reverseParola = splitParolaReverse.reverse()
    console.log(reverseParola)
    let parolaRigirata = reverseParola.join()
    console.log(parolaRigirata)
}

textReverse("giuseppe")