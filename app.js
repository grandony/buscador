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



    // ****

    console.log("El tamaño de initData es: ", initData.length);


    const heroesFiltrados = (heroes, callback) => {
        // console.log("recibi estos datos:", data);
        // console.log("los datos son: ", initData);
        let heroesNivel25 = [];
        heroes.forEach(heroe => {
            if (heroe.level == 25) {
                heroesNivel25.push(heroe);
            }
        });
        callback(heroesNivel25);
        // return heroesNivel25;
    }

    heroesFiltrados(initData, (heroesNivel25) => {
        let nombres = [];
        heroesNivel25.forEach(nombre => {
            nombres.push(nombre.nameHero, nombre.level);
        });
        console.log(nombres);

    });



    // *****
    // let soloNombres = [];
    // resultado.forEach(nombre => {
    //     soloNombres.push(nombre.nameHero);
    // });
    // console.log("Los Heroes de lvl 25 son ", soloNombres[0], " y ", soloNombres[1]);
    // // console.log("los heroes de lvl 25 son:", resultado);
    // console.log("los heroes filtrdos de nivel 25 son: ", resultado);

    // let heroe25 = [];
    // let initBD = initData.send(
    //     if (!level = 25) {
    //         console.log("no se encontre heroe lvl 25");
    //     } else {

    //     }
    // )