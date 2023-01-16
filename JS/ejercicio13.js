function calcularCuadrados(arreglo = []) {
   const num = Object.values(arreglo);
   let _array =[];
   for(let i of num) {
        i=i**2;
        _array.push(i);
        } 

   return _array;
}
const _arreglo = [1,3,2,4];
console.log(calcularCuadrados(_arreglo))