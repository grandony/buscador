const axios = require('axios');
axios.get("https://smart-ujcm.herokuapp.com/datos")
    .then(response => {
        let unjbg = response.data;
        let filtrosBeca = (datos) => {
            let becasFiltradas = [];
            datos.forEach(dato => {
                if (dato.id_procedimiento_ad_pre == 28 || dato.id_procedimiento_ad_pre == 15) {
                    becasFiltradas.push(dato)
                }

            });
            console.log("estas son las becas ", becasFiltradas);

        }
        filtrosBeca(unjbg);

    })
    .catch(error => {
        // handle error
        console.log(error);
    });