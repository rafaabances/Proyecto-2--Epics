// let clasi = data.standings[0].table
// console.log(clasi)

// sustituye a tener que poner console log (data.standings[0].table[0].team.name) 
// al estar en bucle for ese table [0], va ir cambiando a table [1], table [2]....

// for (let i = 0; i < clasi.length; i++) {
//     console.log("Nombre" + " " +clasi[i].team.name)
//     console.log("Escudo" + " " +clasi[i].team.crestUrl)
//     console.log("Posición" + " " + clasi[i].position)
//     console.log("Partidos jugados" + " " + clasi[i].playedGames)
//     console.log("Victorias" + " " + clasi[i].won)
//     console.log( "Empate" + " " + clasi[i].draw)
//     console.log("Derrotas" + " " + clasi[i].lost)
//     console.log("Goles a favor" + " " + clasi[i].goalsFor)
//     console.log("Goles en contra" + " " + clasi[i].goalsAgainst)
//     console.log("Dif de Goles" + " " + clasi[i].goalDifference)
//     console.log("Puntuación" + " " + clasi[i].points)
// }



function getFetch(url) {
    // mostrarSpinner();
    // const url = "https://api.football-data.org/v2/competitions/2014/standings"
    fetch(url, {
        method: "GET", // Get - obtener datos, // Post -colocar datos, //DELETE - Borrar datos, // Put - modificar datos
        headers: {
            "X-Auth-Token": "41f87edae9264941818b2308e722b502"
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

    }).then(data4 => {
        console.log(data4)
        let clasife = data4.standings[0].table


    
        
        quitarSpinner()
        CrearTabla2(clasife)


    }).catch(error =>{
        console.log(error)
        alert("Ha ocurrido un error")
    })


}
getFetch("https://api.football-data.org/v2/competitions/2014/standings")


let ligaEspañola = document.getElementById("botonEspañola");
ligaEspañola.addEventListener("click", ()=>{
    const url = "https://api.football-data.org/v2/competitions/2014/standings"
    getFetch(url)
})

let premierLeague = document.getElementById("botonPremier");
premierLeague.addEventListener("click", ()=>{
    const url = "https://api.football-data.org/v2/competitions/2021/standings"
    getFetch(url)
})

let ligaFrancesa = document.getElementById("botonFrancesa");
ligaFrancesa.addEventListener("click", ()=>{
    const url = "https://api.football-data.org/v2/competitions/2015/standings"
    getFetch(url)
})

let ligaItaliana = document.getElementById("botonItaliana");
ligaItaliana.addEventListener("click", ()=>{
    const url = "https://api.football-data.org/v2/competitions/2019/standings"
    getFetch(url)
})

let ligaAlemana = document.getElementById("botonAlemana");
ligaAlemana.addEventListener("click", ()=>{
    console.log("funciona")
    const url = "https://api.football-data.org/v2/competitions/2002/standings"
    getFetch(url)
})




// let clasi = data.standings[0].table

function CrearTabla2(parametro2) {
    let tabla = document.getElementById("cuerpo_tabla2")
    tabla.innerText = "";
    for (let i = 0; i < parametro2.length; i++) {

        const tr = document.createElement("tr")

        let Nombre = document.createElement("p")
        Nombre.innerHTML = parametro2[i].team.name

        let Escudo = document.createElement("img")
        Escudo.setAttribute("src", parametro2[i].team.crestUrl)
        Escudo.classList.add("ajustar")

        let Posicion = document.createElement("p")
        Posicion.innerHTML = parametro2[i].position

        let PartidosJugados = document.createElement("p")
        PartidosJugados.innerHTML = parametro2[i].playedGames

        let Victorias = document.createElement("p")
        Victorias.innerHTML = parametro2[i].won

        let Empate = document.createElement("p")
        Empate.innerHTML = parametro2[i].draw

        let Derrotas = document.createElement("p")
        Derrotas.innerHTML = parametro2[i].lost

        let GolesaFavor = document.createElement("p")
        GolesaFavor.innerHTML = parametro2[i].goalsFor

        let GolesContra = document.createElement("p")
        GolesContra.innerHTML = parametro2[i].goalsAgainst

        let DiferenciaGoles = document.createElement("p")
        DiferenciaGoles.innerHTML = parametro2[i].goalDifference

        let Puntuacion = document.createElement("p")
        Puntuacion.innerHTML = parametro2[i].points
        Puntuacion.classList.add("text-danger")

        let datosRecogidos2 = [Posicion, Nombre, Escudo, PartidosJugados, Victorias, Empate, Derrotas,
            GolesaFavor, GolesContra, DiferenciaGoles, Puntuacion
        ]

        for (let j = 0; j < datosRecogidos2.length; j++) {
            const td = document.createElement("td")
            td.append(datosRecogidos2[j])
            tr.appendChild(td)

        }
        cuerpo_tabla2.appendChild(tr)
    }


}

// CrearTabla2(clasi)


// function unselect() {
//     document.getElementById("inputbusc").value = "";
//     let boton = document.querySelectorAll("input[type=radio]")
//     for (i in boton) {
//         boton[i].checked = false
//     }
// }

// let reset = document.getElementById("botonreset")
// reset.addEventListener("click", () => {
//     unselect();
//     CrearTabla(clasi);
// })


// let boton = document.getElementById("boton")
// boton.addEventListener("click", () => {
//     Crearfiltro(clasi);
// })


// function Crearfiltro(clasi) {
//     let check = document.querySelector("input[type=radio]:checked")

//     CrearTabla(clasi)
//     let filtrocheck2 = clasi.filter(x => {
//         if (check.value === "Goles a favor") {
//             if ((x.goalsFor > )) {
//                 return true
//             }
//         }


//     })

//     CrearTabla(filtrocheck2)
//     unselect()
// }


//  Crearfiltro(clasi)



// function mostrarSpinner() {
//    let spinner =  document.getElementById("spinner")
//    spinner.style.display = "block"
//    spinner.style.visibility = "visible"
// }

function quitarSpinner() {
    let spinner =  document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}