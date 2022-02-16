// let teamslink = teams.teams;



function getFetch(url) {
    fetch(url, {
        method: "GET", // Get - obtener datos, // Post -colocar datos, //DELETE - Borrar datos, // Put - modificar datos
        headers: {
            "X-Auth-Token": "41f87edae9264941818b2308e722b502"
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

    }).then(linkl => {
        let links = linkl.teams

        // let boton = document.getElementById("boton")
        // // boton.onclick = null
        // boton.addEventListener("click", () => {
        //     quitaralerta1()
        //     quitaralerta2();
        //     // quitaralerta3();
        //     filtrarJornada(partidosfe) 
        //     Crearfiltro(partidosfe);
        // })

        quitarSpinner()
        CrearLinks(links)







    }).catch(error => {
        console.log(error)
        alert("Ha ocurrido un error")
    })


}
getFetch("https://api.football-data.org/v2/competitions/2014/teams")



let ligaEspañola = document.getElementById("botonEspañola");
ligaEspañola.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2014/teams"
    getFetch(url)
})

let premierLeague = document.getElementById("botonPremier");
premierLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/teams"
    getFetch(url)
})

let ligaFrancesa = document.getElementById("botonFrancesa");
ligaFrancesa.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/teams"
    getFetch(url)
})

let ligaItaliana = document.getElementById("botonItaliana");
ligaItaliana.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/teams"
    getFetch(url)
})

let ligaAlemana = document.getElementById("botonAlemana");
ligaAlemana.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2002/teams"
    getFetch(url)
})

let champions = document.getElementById("botonChampion");
champions.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2001/teams"
    getFetch(url)
})


function CrearLinks(link) {
    let divs = document.getElementById("cuerpo_links")
    divs.innerText = "";
    for (let i = 0; i < link.length; i++) {

        const divHijos = document.createElement("div")
        divHijos.classList.add("lkmarcodiv");

        let EscudoL = document.createElement("img")
        EscudoL.setAttribute("src", link[i].crestUrl)
        EscudoL.classList.add("lkajustar");


        //como se pone lo de la imagen?


        let NombreEquipo = document.createElement("a", "link[i].name")
        NombreEquipo.innerHTML = link[i].name
        NombreEquipo.setAttribute("href", link[i].website);
        NombreEquipo.classList.add("lkequipo")


        let linksrecogidos = [EscudoL, NombreEquipo];

        for (let j = 0; j < linksrecogidos.length; j++) {
            const divpeque = document.createElement("div")
            divpeque.classList.add("lkclasediv");

            divpeque.append(linksrecogidos[j]);
            divHijos.appendChild(divpeque);


            divs.appendChild(divHijos);

        }

    }


}




// link con con imagen y texto

// function CrearLinks(link) {
//     let divs = document.getElementById("cuerpo_links")
//     divs.innerText = "";
//     for (let i = 0; i < link.length; i++) {

//         const divHijos = document.createElement("div")
//         divHijos.classList.add("lkmarcodiv"); // aquí hover en css.

//         let EscudoL = document.createElement("img")
//         EscudoL.setAttribute("src", link[i].crestUrl)
//         EscudoL.classList.add("lkajustar");


//         //como se pone lo de la imagen?

//         let linkimg = document.createElement("a")
//         linkimg.href = link[i].website
//         // linkimg.style.color = "white"
//         linkimg.classList.add("lkequipo")

//         let NombreEquipo = document.createTextNode(link[i].name)
//         divHijos.append(EscudoL)
//         divHijos.append(NombreEquipo)
//         linkimg.append(divHijos)
//         divs.append(linkimg)

//         // NombreEquipo.innerHTML = link[i].name
//         // NombreEquipo.setAttribute("href", link[i].website);
//         // NombreEquipo.classList.add("lkequipo")


//         // let linksrecogidos = [EscudoL, NombreEquipo];

//         // for (let j = 0; j < linksrecogidos.length; j++) {
//         //     const divpeque = document.createElement("div")
//         //     divpeque.classList.add("lkclasediv");

//         //     divpeque.append(linksrecogidos[j]);
//         //     divHijos.appendChild(divpeque);


//         //     divs.appendChild(divHijos);

//         // }

//     }


// }

// CrearLinks(teamslink)

function quitarSpinner() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}