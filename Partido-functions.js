// let partidos = data2.matches
// console.log(partidos)

// for (let i = 0; i < partidos.length; i++) {
//     console.log("Local" + " ",partidos[i].homeTeam)
//     console.log("Visitante" + " ",partidos[i].awayTeam) // porque la , y el mas?
//     console.log("Resultado" + " ",partidos[i].score.fullTime) 
//     console.log("Fecha" + " " + partidos[i].utcDate)
//     console.log("Nº de Jornada" + " " + partidos[i].matchday)
// }

let partidos = data2.matches

function CrearTabla(parametro1) {
    let tabla = document.getElementById("cuerpo_tabla")
    tabla.innerText = ""; // innerhtml (este es más fuerte, borra texto divs ...)
    for (let i = 0; i < parametro1.length; i++) {

        const tr = document.createElement("tr")

        let EqLocal = document.createElement("p")
        EqLocal.innerHTML = parametro1[i].homeTeam.name
        EqLocal.classList.add("colorloc")

        let EscudoH = document.createElement("img")
        EscudoH.setAttribute("src", "https://crests.football-data.org/" + parametro1[i].homeTeam.id + ".svg")
        EscudoH.classList.add("ajustar")


        let EqVisitante = document.createElement("p")
        EqVisitante.innerHTML = parametro1[i].awayTeam.name
        EqVisitante.classList.add("colorvisi")


        let EscudoA = document.createElement("img")
        EscudoA.setAttribute("src", "https://crests.football-data.org/" + parametro1[i].awayTeam.id + ".svg")
        EscudoA.classList.add("ajustar")



        // let Resultado = document.createElement("p")
        // Resultado.innerHTML = parametro1[i].score.fullTime.homeTeam + "-" + parametro1[i].score.fullTime.awayTeam
        // Resultado.classList.add("colorres")

        let Resultado = parametro1[i].score.fullTime.homeTeam + " - " + parametro1[i].score.fullTime.awayTeam;
        // Resultado.classList.add("colorres")
        if (Resultado === "null - null") {
            Resultado = "Proximamente";
        } else {
            Resultado.textContent = parametro1[i].score.fullTime.homeTeam + " - " + parametro1[i].score.fullTime.awayTeam;

        }

        let Fecha = new Date(parametro1[i].utcDate)
        // Fecha.classList.add("text-primary")


        let NJornada = document.createElement("p")
        NJornada.innerHTML = parametro1[i].matchday
        NJornada.classList.add("colorjor")


        let datosRecogidos = [EqLocal, EscudoH, EqVisitante, EscudoA, Resultado, Fecha.toLocaleString(), NJornada]

        for (let j = 0; j < datosRecogidos.length; j++) {
            const td = document.createElement("td")
            td.append(datosRecogidos[j])
            tr.appendChild(td)

        }
        cuerpo_tabla.appendChild(tr)
    }


}

CrearTabla(partidos)



function unselect() {
    document.getElementById("inputbusc").value = "";
    let boton = document.querySelectorAll("input[type=radio]")
    for (i in boton) {
        boton[i].checked = false
    }
}

let reset = document.getElementById("botonreset")
reset.addEventListener("click", () => {
    unselect();
    CrearTabla(partidos);
})

//Filtros

let boton = document.getElementById("boton")
boton.addEventListener("click", () => {
    Crearfiltro(partidos);
})


function Crearfiltro(partido) {
    let inputnombre = document.getElementById("inputbusc").value
    let check = document.querySelector("input[type=radio]:checked")
    if (inputnombre == "") {
        CrearTabla(partidos)
    }
    let nombreEqinput = partido.filter(x => {
        if (x.homeTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) || (x.awayTeam.name.toLowerCase().includes(inputnombre.toLowerCase()))) {
            return true

        } else {
            return false
        }
    })

    if (nombreEqinput.length === 0) {
        return CrearTabla(partidos)
    }

    if (check === null) {
        return CrearTabla(nombreEqinput)
    }

    CrearTabla(nombreEqinput)
    let filtrocheck = nombreEqinput.filter(x => {
        if (check.value === "Ganados") {
            if ((x.homeTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "HOME_TEAM") ||
                (x.awayTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "AWAY_TEAM")) {
                return true
            }
        }
        if (check.value === "Perdidos")
            if ((x.homeTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "AWAY_TEAM") ||
                (x.awayTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "HOME_TEAM")) {
                return true
            }

        if (check.value === "Empatados")
            if ((x.homeTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "DRAW") ||
                (x.awayTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) && x.score.winner === "DRAW")) {
                return true
            }

        if (check.value === "Partidos sin Jugar")
            if ((x.status === "SCHEDULED")) {
                return true
            }

    })

    CrearTabla(filtrocheck)
    unselect()
}

Crearfiltro(partidos)