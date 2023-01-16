function obtenerPaisesConTelefono(econtact = {}) {

      const Paises = Object(econtact.datos.sedes)
      const {EEUU, Colombia, Chile, Ecuador, Peru} = Paises;
      c = 0;
      if (EEUU.telefono != null)
      {
        c = c + 1;
      }
      if (Colombia.telefono != null)
      {
        c = c + 1;
      }
      if (Chile.telefono != null)
      {
        c = c + 1;
      }            
      if (Ecuador.telefono != null)
      {
        c = c + 1;
      }
      if (Peru.telefono != null)
      {
        c = c + 1;
      }

      return  `La cantidad de Paises con telefono asignado: ${c}`;

}
const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};
console.log(obtenerPaisesConTelefono(objetoFijo));