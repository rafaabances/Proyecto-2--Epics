## Proyecto-2--Epics

### FútbolRafi.Com

Accede a la web: [FútbolRafi.com](https://futbolrafi.netlify.app/home)

<img src="Imagenes/FútbolRafi.jpg" alt="logo">

Se trata de un proyecto en el cual se va a desarrollar una web deportiva para fúboleros, en donde se podrá encontrar todos los partidos jugados de diferentes ligas, Santander, la Premier, la BundesLiga entre otras. También se podrá consultar la clasificación y estadísticas tales como: Nº de goles, Partidos jugados o la media de goles/partido.
En la página de partidos se podrá realizar filtros de partidos ganados, perdidos, empatados o partidos por jugar.

Toda la información está conectada de manera asíncrona a una API por lo que la información está actualizada en todo momento haciendo de esta web dinámica y no estática.

En cuanto atenologías hemos empleado: 

- HTML: Es un lenguaje de marcado que lo hemos usado para estructurar las páginas y poner los ids, clases y scripts de conexion a CSS y JS. 
***
- CSS: Lo hemos usado para darle estilo a las páginas y hemos usado diferentes propiedas y alguna animación como el spinner/loading.
***
- Bootstrap: Lo hemos usado para darle un diseño más estandarizado a todas las páginas usando diferentes clases en sus correspondientes etiquetas, por ejemplo un carrusel de vídeo e imágenes.
***
- JavaScript: Ha sido la tecnología más utilizada con ella le hemos dado dinamismo a la página, hemos realizado distintas funciones, bucles For, ForEach cuyo resultado ha sido la manipulación de objetos (DOM) de la API, hemos obtenidos los objetos los hemos recoorrido y filtrado y hemos creado nuevas tablas con sus correspondientes buscadores botones y filtros.
---

![Tecnologies](https://user-images.githubusercontent.com/96442220/153618938-50bd2647-cb80-4386-b1c1-49b35960a3f0.jpg)

---

Y para conectarnos a la API hemos usado la función Fetch a la aplicación de Postman:

---

![Postman](https://user-images.githubusercontent.com/96442220/153619900-b7e046bc-6146-4175-ba61-23f6d37c7fed.png)

***

La estructura de la web se compone de:

1. HOME: Es la página principal, en ella tenemos una NavBar que te lleva al resto de páginas, tiene también un carrusel que  va pasando un vídeo y fotos en segundos, también consta de de 4 cards con anuncios, imágenes de decoración. y un footer con las redes sociales y un input para poder suscribirte.
***
2. Partidos de las ligas y UEFA: En esta página tenemos una tabla con todos los partidos jugados de esta temporada y de los que quedan por jugar, al estar conectado con el fetch se actualizan en cuanto se carga la página, te permite filtrar esta tabla a un equipo en concreto y a partidos ganados,perdidos, empatados y los pendientes.
Además consta de una serie de botones que te permiten ver y filtrar la liga Premier, Bundesliga, francesa, italiana y la Uefa Champions League.
***
3. Clasificación de equipos: En esta página observamos la clasificación de los equipos con diversas variables, la puntuación, las victorias, derrotas goles a favor, en contra y diferencia de goles. Además conta de botones que te permiten ver la clasificación de la Premier, Bundesliga y el resto de ligas, todo actualizado y en tiempo real
***
4. Estadísticas: En dicha página podemos observar una serie de estadísticas, en primer lugar podemos ver una tabla ordenada con los equipos que mayor media de goles/partido tienen, a continuación vemos otra tabla ordenada con los equipos que menos goles en contra tienen,amabas tablas se actualizan en cada carga y como en las tablas de partidos y clasificación también se puede consultar otras ligas.


Funcionalidades:

-Spinner/Loading: Se ha incluido un símbolo de carga cuando se cargan las tablas para que el usuario no piense que se ha quedado bloqueado.

-Alerts y Modals:

Consta de 1aler de Java Script y 3 Modal/alerts:

  1. El alert, salta en el caso de que si hay algún error en la carga de datos despliega un cuadro que dice: "Ha ocurrido un error".
  ***
  3. El 1º de los Modals ocurre cuando no has introducido nada en el buscador y le das a buscar, te salta un modal que te dice: "Debes introducir el nombre de tu equipo."
  ***
  5. El 2º de los Modals ocurre cuando has introducido mal el nombre del equipo o has introducido un equipo que no pertenece a esa liga, en tal caso se despliega otro modal con el mensaje: "El Equipo que buscas no se encuentra en esta Liga."
  ***
  7. El 3º Modal/alert salta cuando introduces un número en lugar de un nombre y en tal caso se despliega el alert con el mensaje: "Debes introducir un Nombre y no un Número"


Contacto: Hotmail: *rafaelabancesserrate@hotmail.com*
Telf: *+34 608 292 160*

