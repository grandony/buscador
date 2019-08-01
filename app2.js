let initData = [{
    id: 1,
    nameHero: "skywrath",
    level: 10
}, {
    id: 2,
    nameHero: "invoker",
    level: 15
}, {
    id: 3,
    nameHero: "axe",
    level: 25
}, {
    id: 4,
    nameHero: "pango",
    level: 25
}, ];


let getEmpleado = (nameHero, callback) => {
    let initBD = [];
    initBD.forEach(level => {
        level.push(initBD.level = 25);
    });

}

getEmpleado(25, (err, initBD) => {
    if (err) {
        return console.log(err);
    }
    console.log(initBD);
});

// let initBD = initData.find(initBD => initBD.level == 25)
// if (!initBD) {
//     callback(`No existe un heroe ${nameHero}`)
// } else {
//     callback(null, initBD);
// }