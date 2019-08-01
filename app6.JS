let trabajadores = [{
    id: 1,
    nombre: 'dony',
    apellido: 'paxi',
    profesion: 'desarrollador'
}, {
    id: 2,
    nombre: 'wily',
    apellido: 'paxi',
    profesion: 'abogado'
}, {
    id: 3,
    nombre: 'jeny',
    apellido: 'paxi',
    profesion: 'administracion'
}, {
    id: 4,
    nombre: 'loco',
    apellido: 'paxi',
    profesion: 'chule'
}, {
    id: 5,
    nombre: 'angelito',
    apellido: 'paxi',
    profesion: 'chule'
}]


let sueldos = [{
    id: 1,
    salario: 1200
}, {
    id: 2,
    salario: 1200
}, {
    id: 3,
    salario: 1200
}, {
    id: 4,
    salario: 850
}, {
    id: 5,
    salario: 900
}]


const nombresFiltrados = (nombres, salarios, salarioObjetivo) => {
    let salarioFiltrado = salarios.filter(salario => salario.salario == salarioObjetivo)

    if (salarioFiltrado.length == 0) {
        console.log(`no se encontro sueldo de ${salarioObjetivo}`);
    }
    nombres.forEach(nombre => {
        salarioFiltrado.forEach(salario => {
            if (nombre.id == salario.id) {
                console.log(nombre.nombre);
            }
        });
    });
};
nombresFiltrados(trabajadores, sueldos, 850);