let conexion = document.getElementById("conexionInternet");

export default function Conexion(){

    window.addEventListener("online", (e)=>{ // el evento sucede cuando entra en linea
        console.log("En linea");
        conexion.innerHTML = "<p class='enLinea'>Conexión reestablecida</p>";
        setTimeout(()=>{
            conexion.innerHTML = "";
        }, 3000);
    });
    window.addEventListener("offline", (e)=>{ // el evento sucede cuando sale de linea
        console.log("Fuera de linea");
        conexion.innerHTML = "<p class='fueraLinea'>Conexión perdida</p>";
        setTimeout(()=>{
            conexion.innerHTML = "";
        }, 3000);
    });

}