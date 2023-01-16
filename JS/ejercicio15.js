function validarNombre(nombres = [], nombre) {

    let f = nombres.find(i => i === nombre);

    if (f === nombre)
    {return true;}
    else
    {return false;}

}
console.log(validarNombre(['Juan','Pedro','Luis'],'Luis'))