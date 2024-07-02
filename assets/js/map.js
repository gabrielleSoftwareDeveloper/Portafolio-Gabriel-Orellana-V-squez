document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {  
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder= "0" scrolling="no" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.464841821103!2d-3.736389924178245!3d40.30983997145695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4220a2a812cfaf%3A0x6b9a4a2d71b73d1a!2sGetafe%20Central!5e0!3m2!1ses!2ses!4v1718555020282!5m2!1ses!2ses" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
    }, 500);

});

/*Esta función retrasará la carga del mapa para que no interfiera en la carga habitual del DOM. */