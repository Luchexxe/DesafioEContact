function sumatoria(numeros = []) {
    let total=0
    for(let i of numeros) {
    total+=i;
    } 
    return total;
 }
console.log(sumatoria([10,2,4,3]))