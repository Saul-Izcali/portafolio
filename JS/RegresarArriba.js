const container = document.getElementById('getTop');


export default function RegresarArriba(){
    if(window.scrollY > 280){   // Si la  barra de scroll esta a mas de 280px se muestra el circulo
        container.className = "regresaArriba";
    }else{
        container.className = "regresaArribaDesaparecer";
    }

    document.addEventListener("click", (e)=>{
        if(e.target.matches("#getTop")){
            window.scrollTo(0,0);   //  Scrollea hasta la posicion (x,y) -> (0,0) de la pantalla
        }
    });
}




// const createRipple = (e) => {
//     let ripple = document.createElement('span')
//     let x = e.clientX
//     let y = e.clientY

//     ripple.style.left = x + 'px'
//     ripple.style.top = y + 'px'

//     container.appendChild(ripple)

//     setTimeout(() => {
//         ripple.remove()
//     }, 2000)

//     console.log(x, y)
// }

// container.addEventListener('click', createRipple)

