let partidos = data2.matches;
let mediaG;


function estadisticas(partido) {

    let estadisticasPartido = [];

    for (let i = 0; i < partido.length; i++) {
        let estadoPartido = partido[i].status
        if (estadoPartido !== "FINISHED") { // If(estadoPartido == "FINISHED")
            continue // break 
        }

        let eqLocal = partido[i].homeTeam.name
        let EqVisitante = partido[i].awayTeam.name

        let idLocal = partido[i].homeTeam.id
        let idVisitante = partido[i].awayTeam.id

        let golesLocal = partido[i].score.fullTime.homeTeam
        let golesVisitante = partido[i].score.fullTime.awayTeam

        let equipoLocalEncontrado;
        estadisticasPartido.forEach(x => {
            if (x.id === idLocal) {
                equipoLocalEncontrado = x
            }
        })

        if (equipoLocalEncontrado == undefined) {
            estadisticasPartido.push({
                id: idLocal,
                name: eqLocal,
                goals: golesLocal,
                matches: 1
            })
        } else {
            equipoLocalEncontrado.matches++
            equipoLocalEncontrado.goals += golesLocal
        }

        let equipoVisitanteEncontrado;
        estadisticasPartido.forEach(j => {
            if (j.id === idVisitante) {
                equipoVisitanteEncontrado = j
            }
        })

        if (equipoVisitanteEncontrado == undefined) {
            estadisticasPartido.push({
                id: idVisitante,
                name: EqVisitante,
                goals: golesVisitante, 
                matches: 1
            })
        } else {
            equipoVisitanteEncontrado.matches++
            equipoVisitanteEncontrado.goals += golesVisitante 
        }
    }

    for (let i = 0; i < estadisticasPartido.length; i++) { 
        mediaG = estadisticasPartido[i].goals / estadisticasPartido[i].matches
        estadisticasPartido[i].avg = mediaG
    }


    estadisticasPartido.sort(function (a, b) {  
        return b.avg - a.avg;
    });


    let top5estadisticas = estadisticasPartido.slice(0, 5);
    //   console.log(top5estadisticas)

    crearTabla(top5estadisticas)
}

estadisticas(partidos);

function crearTabla(topMejores) {
    let tabla = document.getElementById("cuerpo_tabla2")
    tabla.innerText = "";

    for (let i = 0; i < topMejores.length; i++) {

        const tr = document.createElement("tr")

        let equipo = topMejores[i].id
        let Escudo = document.createElement("img")
            Escudo.setAttribute("src", "https://crests.football-data.org/" + equipo + ".svg") 
            Escudo.classList.add("ajustar2")

        let datosRecogidos2 = [Escudo, topMejores[i].name, topMejores[i].goals, topMejores[i].matches, topMejores[i].avg.toFixed(2)]

        for (let j = 0; j < datosRecogidos2.length; j++) {
            const td = document.createElement("td")
            td.append(datosRecogidos2[j])
            tr.appendChild(td)

        }
        tabla.appendChild(tr)


    }


}








// otra tabla





function estadisticas2(partido) {

    let estadisticasPartido2 = [];


    for (let i = 0; i < partido.length; i++) {
        let estadoPartido = partido[i].status
        if (estadoPartido !== "FINISHED") { // If(estadoPartido == "FINISHED")
            continue // break 
        }

        let EqVisitante = partido[i].awayTeam.name

        let idVisitante = partido[i].awayTeam.id

        let golesLocal = partido[i].score.fullTime.homeTeam

        let equipoVisitanteEncontrado;
        estadisticasPartido2.forEach(j => {
            if (j.id === idVisitante) {
                equipoVisitanteEncontrado = j
            }
        })

        if (equipoVisitanteEncontrado == undefined) {
            estadisticasPartido2.push({
                id: idVisitante,
                name: EqVisitante,
                goals: golesLocal,
                matches: 1
            })
        } else {
            equipoVisitanteEncontrado.matches++
            equipoVisitanteEncontrado.goals += golesLocal 
        }
    }


    estadisticasPartido2.sort(function (a, b) {  // a-b de menor a mayor con goals.
        return a.goals - b.goals;
    });


    let top5estadisticas2 = estadisticasPartido2.slice(0, 5);
    //   console.log(top5estadisticas)

    crearTabla2(top5estadisticas2)
}

estadisticas2(partidos);

function crearTabla2(topMejores2) {
    let tabla2 = document.getElementById("cuerpo_tabla3")
    // tabla2.innerText = "";

    for (let i = 0; i < topMejores2.length; i++) {

        const tr = document.createElement("tr")

        let equipo = topMejores2[i].id
        let Escudo = document.createElement("img")
            Escudo.setAttribute("src", "https://crests.football-data.org/" + equipo + ".svg") 
            Escudo.classList.add("ajustar")

        let datosRecogidos3 = [Escudo, topMejores2[i].name, topMejores2[i].goals, topMejores2[i].matches]

        for (let j = 0; j < datosRecogidos3.length; j++) {
            const td = document.createElement("td")
            td.append(datosRecogidos3[j])
            tr.appendChild(td)

        }
        tabla2.appendChild(tr)


    }




}