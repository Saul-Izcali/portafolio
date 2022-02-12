export default function Animaciones(){
    
    let tamañoPantalla = window.innerHeight/1.2;
    let imgPerfil = document.getElementById('imgPerfil');
    let posicionImgPerfil = imgPerfil.getBoundingClientRect().top;

    if(posicionImgPerfil < tamañoPantalla){
        // imgPerfil.classname = ".img-sobre-mi"
        imgPerfil.style.opacity = '100%'
        imgPerfil.style.animation = 'mover 1s ease-out'
    }

}
