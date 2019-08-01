let empleados = [{
    id: 1,
    nombre: 'fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleados = (id, callback) => {
    let empleadosDB = empleados.find(empleado => empleado.id == id)
    if (!empleadosDB) {
        console.log('no existe el id', id);
    } else {
        callback(null, empleadosDB)
    }
}

let getSalarios = (empleado, callback) => {
    let salariosDB = salarios.find(salario => salario.id === empleado.id)
    if (!salariosDB) {
        callback(`no se encontro un salario para el usuario ${ empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariosDB.salario,
            id: empleado.id
        });
    }

}
getEmpleados(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    };
    getSalarios(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`el salario de ${resp.nombre}, es de  ${resp.salario}$`);
    })
})