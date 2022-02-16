// let partidos = data2.matches
// console.log(partidos)

// for (let i = 0; i < partidos.length; i++) {
//     console.log("Local" + " ",partidos[i].homeTeam)
//     console.log("Visitante" + " ",partidos[i].awayTeam) // porque la , y el mas?
//     console.log("Resultado" + " ",partidos[i].score.fullTime) 
//     console.log("Fecha" + " " + partidos[i].utcDate)
//     console.log("Nº de Jornada" + " " + partidos[i].matchday)
// }

quitaralerta1();
quitaralerta2();
// quitaralerta3();


function getFetch(url) {
    // mostrarSpinner();
    // const url = "https://api.football-data.org/v2/competitions/2014/matches"
    fetch(url, {
        method: "GET", // Get - obtener datos, // Post -colocar datos, //DELETE - Borrar datos, // Put - modificar datos
        headers: {
            "X-Auth-Token": "41f87edae9264941818b2308e722b502"
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

    }).then(data3 => {
        let partidosfe = data3.matches

        let boton = document.getElementById("boton")
        // boton.onclick = null
        boton.addEventListener("click", () => {
            quitaralerta1();
            quitaralerta2();
            filtrarJornada(partidosfe);
            Crearfiltro(partidosfe);
        })

        // let jornada = document.getElementById("jornada")
        // jornada.addEventListener("click", () => {
        //    filtrarJornada(partidosfe) 

        // })

        

        let reset = document.getElementById("botonreset")
        reset.addEventListener("click", () => {
            unselect();
            CrearTabla(partidosfe);
            quitaralerta1();
            quitaralerta2();
            // quitaralerta3();
            
        })

    

        quitarSpinner();
        quitaralerta1();
        quitaralerta2();
    CrearTabla(partidosfe)

       



    }).catch(error => {
        console.log(error)
        alert("Ha ocurrido un error")
    })


}
getFetch("https://api.football-data.org/v2/competitions/2014/matches")


let ligaEspañola = document.getElementById("botonEspañola");
ligaEspañola.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    getFetch(url)
    // Crearfiltro(partidosfe)
})

let premierLeague = document.getElementById("botonPremier");
premierLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/matches"
    getFetch(url)
})

let ligaFrancesa = document.getElementById("botonFrancesa");
ligaFrancesa.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/matches"
    getFetch(url)
})

let ligaItaliana = document.getElementById("botonItaliana");
ligaItaliana.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/matches"
    getFetch(url)
})

let ligaAlemana = document.getElementById("botonAlemana");
ligaAlemana.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2002/matches"
    getFetch(url)
})

let champions = document.getElementById("botonChampion");
champions.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2001/matches"
    getFetch(url)
})



// let partidos = data2.matches

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

// CrearTabla(partidos)



function unselect() {
    document.getElementById("inputbusc").value = "";
    let boton = document.querySelectorAll("input[type=radio]")
    for (i in boton) {
        boton[i].checked = false
    }
}

// let reset = document.getElementById("botonreset")
// reset.addEventListener("click", () => {
//     unselect();
//     CrearTabla(partidos);
// })

// Filtros

// let boton = document.getElementById("boton")
// boton.addEventListener("click", () => {
//     Crearfiltro(partidos);
// })


function Crearfiltro(partido) {
    let inputnombre = document.getElementById("inputbusc").value
    let check = document.querySelector("input[type=radio]:checked")

    if (inputnombre == "") {
        return poneralerta1()
    }

    if (!isNaN(inputnombre)) {
        return poneralerta3() // no existe (está comentada, pero si lo quito me sale la alerta 2 si pongo un número)
    }

    let nombreEqinput = partido.filter(x => {
        if (x.homeTeam.name.toLowerCase().includes(inputnombre.toLowerCase()) || (x.awayTeam.name.toLowerCase().includes(inputnombre.toLowerCase()))) {
            return true

        } else {
            return false
        }
    })

    if (nombreEqinput.length === 0) {
        return poneralerta2() // alerta2 el equipo que buscas no se encuentra en esta liga ( solo funciona en la española)
    }


    if (check === null) {
        return CrearTabla(nombreEqinput)
    }

    // CrearTabla(nombreEqinput)
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
    
    // unselect()
}

// Crearfiltro(partidos)

// function mostrarSpinner() {
//    let spinner =  document.getElementById("spinner")
//    spinner.style.display = "block"
//    spinner.style.visibility = "visible"
// }


function filtrarJornada(x) {
    let inputnombre2 = document.getElementById("inputbusc").value
    let partidosSeleccionados = x.filter((partidosfe) => {
        if (partidosfe.matchday === parseInt(inputnombre2)) {
            return true
        } else {
            return false
        };
    });
    CrearTabla(partidosSeleccionados);
}

function quitarSpinner() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}

function poneralerta1() {
    let alert1 = document.getElementById("aler1")
    alert1.style.display = "block"
}

function quitaralerta1() {
    let alert1 = document.getElementById("aler1")
    alert1.style.display = "none"
}

function poneralerta2() {
    let alert2 = document.getElementById("aler2")
    alert2.style.display = "block"
}

function quitaralerta2() {
    let alert2 = document.getElementById("aler2")
    alert2.style.display = "none"
}

// function poneralerta3() {
//     let aler3 = document.getElementById("aler3")
//     alert3.style.display = "block"
// }

// function quitaralerta3() {
//     let alert3 = document.getElementById("aler3")
//     alert3.style.display = "none"
// }