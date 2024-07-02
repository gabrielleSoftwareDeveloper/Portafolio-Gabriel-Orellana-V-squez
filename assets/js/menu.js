/* Mostrar y cerrar menú responsive. */
document.addEventListener("DOMContentLoaded", () => {

    let button = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");

    button.addEventListener("click", () => {

        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_bars.style.display = "none";
            icon_xmark.style.opacity = 1;
            icon_xmark.style.display = "inline"; //Se vuelve a un valor por defecto.


        } else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_bars.style.display = "";
            icon_xmark.style.opacity = 0;
            icon_xmark.style.display = "none";
        }

    });
});

/* Ocultar el menú tras abrirlo inicialmente y redimensionar.  */
window.addEventListener("resize", () => {
    let size = parseInt(document.body.clientWidth); //parseInt se utiliza para convertirlo a número y poder utilizarlo
    if(size <= 1060){
        aside.classList.remove("layout__aside--visible");
        icon_bars.style.opacity = 1;
        icon_xmark.style.opacity = 0;
    }
})
/*DOMContentLoaded: cuando la página cargue completamente este script se cargará-*/