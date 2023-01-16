function divisiblesPorCinco(numeros = []) {

    let i = numeros.values();
    let c = 0;
    
    for (let num of i) {
    
        if (num %5 ==0) {
    
            c = c + 1;
        } 
    
    }
    return `La cantidad de numeros, en el arreglo, que son divisbles por 5 son = ${c}`;
   
 }
console.log(divisiblesPorCinco([20,1,5,15,2,37,42,100,2]));

