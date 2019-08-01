let unjbg;
const axios = require('axios');
axios.get("https://smart-ujcm.herokuapp.com/datos")
    .then(response => {
        let unjbg = response.data;
        const BecaFiltro = (becas) => {
            let NombreBeca = [];
            becas.forEach(nombre => {
                if (nombre.nombre == "Beca por ayudantía de cátedra") {
                    NombreBeca.push(nombre);
                    console.log(NombreBeca);
                } else {
                    console.log("nohay pe");
                }
            });

        }
        BecaFiltro(unjbg)

        // console.log(response.data);
    })
    .catch(error => {
        // handle error
        console.log(error);
    });