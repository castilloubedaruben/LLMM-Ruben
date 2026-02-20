const primerBoton = document.querySelector(".boton")
    primerBoton.style.backgroundColor = "red"

const todosBotones = document.querySelectorAll(".boton")
cambiarEstilo.addEventListener("click", function () {
    for (const boton of todosBotones) {
        boton.style.backgroundColor = "blue"
        boton.style.border="5px solid red"
    }
});
