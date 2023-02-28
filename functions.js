console.log("Inicio");

// BOTÓN DARK MODE
function resaltarBotonDark() {
    obtenerTecla.style.backgroundColor = "rgb(30, 163, 119)";
    obtenerTecla.style.cursor = "pointer";
}


function botonNormalDark() {
    obtenerTecla.style.backgroundColor = "rgb(89, 209, 169)";
}


function moverTecla() {
    if (obtenerTecla.style.marginLeft != "1.56em") {
        obtenerTecla.style.marginLeft = "1.56em";
        obtenerTecla.style.transition = "500ms";
        document.body.style.backgroundColor = "rgb(36, 36, 36)";
        document.body.style.transition = "500ms";
    
        for (let i = 0; i < obtenerNombreProfesion.length; i++)
            obtenerNombreProfesion[i].style.color = "white";

    } else {
        obtenerTecla.style.marginLeft = "0";
        document.body.style.backgroundColor = "#fbfbf8ba";

        for (let i = 0; i < obtenerNombreProfesion.length; i++)
            obtenerNombreProfesion[i].style.color = "black";
    }    
}


// BOTON SUBIR         

// Función para resaltar el botón.
function resaltarBotonSubir() {
        obtenerBoton.style.backgroundColor = "#926933";
        obtenerBoton.style.transform = "scale(1.1)"; 
}


// Función para volver al color y tamaño por normal
function botonNormalSubir() {
    obtenerBoton.style.backgroundColor = "#e79e3f";
    obtenerBoton.style.transform = "scale(1)";
}


// Función para subir cuando se hace clic.
function subir() {
    var posicion = document.documentElement.scrollTop;      //Se obtiene la posición del scroll.
    if (posicion > 10) {
        obtenerBoton.style.transform = "scale(0)";
        window.requestAnimationFrame(subir);                //Para conseguir una animación.
        window.scrollTo(0, posicion - (posicion / 10));     //Se consigue subir de una manera "suave".
        console.log("FIN subir");
    }
}


//Función para que aparezca el botón al bajar por la página.
function aparecerDesaparecer() {
    var posicion = document.documentElement.scrollTop;
    if (posicion > 880) {
        obtenerBoton.style.transform = "scale(1)";
        obtenerBoton.style.transition = "300ms";
    } else {
        obtenerBoton.style.transform = "scale(0)"; 
    }  
}


var obtenerTecla = document.getElementById("tecla");
var obtenerBoton = document.getElementById("subir");
var obtenerNombreProfesion = document.getElementsByClassName("texto");
var posicion = document.documentElement.scrollTop;

obtenerBoton.addEventListener("click", subir);
window.onscroll = aparecerDesaparecer;

obtenerTecla.addEventListener("mouseover", resaltarBotonDark);
obtenerTecla.addEventListener("mouseout", botonNormalDark);
obtenerTecla.addEventListener("click", moverTecla);
obtenerBoton.addEventListener("mouseover", resaltarBotonSubir);
obtenerBoton.addEventListener("mouseout", botonNormalSubir);