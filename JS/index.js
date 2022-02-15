import RegresarArriba from "./RegresarArriba.js";
import Conexion from "./OnOffLine.js";
import Animaciones from "./Animaciones.js";

var form = document.getElementById("form-correo");
let menu = document.getElementById("icon")
let activo = false;

document.addEventListener("DOMContentLoaded", (e) => {
    Conexion();
});

window.addEventListener("scroll",(e)=>{
    Animaciones();
    RegresarArriba();
});

document.addEventListener('click', (e) => {
    if(e.target.matches("i#menuIcon.fas.fa-bars")){
        if(activo){
            document.getElementById("menu").className = "visto"
            // document.getElementById("iconoCerrar").className = ".icono-cerrar-visto"
            activo = false;
        }else{
            console.log("entro")
            document.getElementById("menu").className = "oculto"
            // document.getElementById("iconoCerrar").className = ".icono-cerrar-oculto"
            activo = true;
        }
    }
    if(e.target.matches('a.enlace-seccion')){
        document.getElementById("menu").className = "oculto"
    }

})

form.addEventListener('submit', Correo);

async function Correo(event) {
    let respuesta
    event.preventDefault();
    let data = new FormData(this);
      respuesta = await fetch(this.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
       }
    })
    
    console.log(respuesta)
    if(respuesta.ok){
        this.reset()
        Swal.fire(
            'Enviado',
            'Gracias por enviarme el correo, buen día',
            'success'
        )
    }else{
        this.reset()
        Swal.fire(
            'Error',
            'Ocurrio un error, vuelvalo a intentar',
            'error'
        )
    }

}

