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

let clasi = data.standings[0].table

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

CrearTabla2(clasi)


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