function validarArreglo(numeros = []) {        
if (numeros.length < 6)

    {return false;}
    else
    {
        let total=0;
        
        for(let i of numeros) {
                total+=i;
            }
            if (total > 100){      
                return true;
             }
            else
            {return false;}
    }

}
console.log(validarArreglo([1,4,3,6,7,20,100]))
