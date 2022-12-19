const videojuegos = [
    {
       pregunta: "¿En que año salio el primer Call of Duty?",
       descripcion: "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward",
       opciones: ["1950","1780","2004","2022"],
       correcta: 2
    },
    {
      pregunta: "¿Quien es el campeon mundial de Fortnite?",
      descripcion: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas.",
      opciones: ["Adam Smith","Bugha","Faker","Zoky"],
      correcta: 1
    },
    {
      pregunta: "¿Cuales son los juegos de campaña mas jugados en este año?",
      descripcion: "El modo campaña o campaña a secas, es el modo de juego principal cuyas misiones están ligadas entre sí por una historia, y donde el jugador debe acabar cada misión para continuar a la siguiente.",
      opciones: ["Call of duty,Halo,God of war","Fornite,Resident Evil,Valorant","Dota 2","LoL"],
      correcta: 0
    },
    {
      pregunta: "¿Cual es el juego movil más conocido?",
      descripcion: "Un videojuego para móviles es un videojuego que es desarrollado para jugarse en teléfonos móviles, PDA, teléfonos inteligentes y dispositivos móviles.",
      opciones: ["Dota 2","Angry Birds","Free Fire","Roblox"],
      correcta: 2
    },
]


// VARIABLES

  const titulo = document.querySelector("#subContenedor__titulo");
  const pregunta = document.querySelector("#subContenedor__pregunta");
  const descripcion = document.querySelector("#subContenedor__descripcion");
  const cajaOpciones = document.querySelector(".subContenedor__opciones");
  const respuesta = document.querySelector("#contenedor__elemento");
  const barraProgreso = document.querySelector("#barra");
  
  var indice = 0;


//INICIAR APLICACION
 window.onload = iniciarAplicacion(); 


 //Funciones
 
 function iniciarAplicacion(){
     console.log("Aplicacion iniciada");
     cargarPreguntaDescripcion();
     cargarOpciones();
 }


 function cargarPreguntaDescripcion(){
   //    let indice = 0;
      if(indice< videojuegos.length){
       pregunta.textContent = videojuegos[indice].pregunta;
       descripcion.textContent = videojuegos[indice].descripcion;
      }else{
         paginaRespuesta();
      }
    
 }

function cargarOpciones(){
   //   let indice = 0;
   if (indice < videojuegos.length){
       for (let i = 0; i < videojuegos[indice].opciones.length; i++) {           
           const boton = document.createElement("BUTTON"); 
           boton.textContent = videojuegos[indice].opciones[i];
           boton.setAttribute("onclick",`verificarRespuesta(${i},${videojuegos[indice].correcta}); siguientePregunta()`);
           boton.classList.add("subContenedor__opcion");
           cajaOpciones.appendChild(boton);  
     }
     return;
   }
    
}

let puntaje = 0;
function verificarRespuesta(indice,correcta){
   
      if(indice == correcta){
          puntaje = puntaje + 5 ;
      }else{
           puntaje = puntaje;
      }
     
}

function siguientePregunta(){
     indice++;
     barraProgreso.value = barraProgreso.value + 25;
     limpiarHTML();
     cargarPreguntaDescripcion();
     cargarOpciones();
}

//LIMPIAR EL HTML

function limpiarHTML(){
    while(cajaOpciones.firstChild){
         cajaOpciones.removeChild(cajaOpciones.firstChild);
    }
}

function paginaRespuesta(){
   respuesta.innerHTML = `<div id="contenedor__elemento"> 
                             <h3 id="respuesta">Tu puntaje obtenido es: ${puntaje}</h3>
                          </div>`
}
