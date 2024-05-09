/******************************************************************** SNACK 4 ********************************************/
function twoArray(num1,num2,num3,text1,text2,text3) {
    let arrayNumber = [num1,num2,num3];
    console.log(arrayNumber)
    let arrayText = [text1,text2,text3]
    console.log(arrayText)
    let arrayMixed = [num1,text1,num2,text2,num3,text3]
    console.log(arrayMixed)
}

twoArray(1,2,3,"A","B","C")