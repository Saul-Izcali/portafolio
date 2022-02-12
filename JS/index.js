import RegresarArriba from "./RegresarArriba.js";
import Conexion from "./OnOffLine.js";
import Animaciones from "./Animaciones.js";

var form = document.getElementById("form-correo");

document.addEventListener("DOMContentLoaded", (e) => {
    Conexion();
});

window.addEventListener("scroll",(e)=>{
    Animaciones();
    RegresarArriba();
});

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

