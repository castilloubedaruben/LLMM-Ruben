// 1. Primero seleccionamos los elementos que vamos a usar
const boton = document.getElementById("marcarFrutas");
const frutas = document.querySelectorAll(".lista li");

// 2. Luego configuramos qué pasa cuando hacemos clic
boton.addEventListener("click", function () {
    for (const fruta of frutas) {
        fruta.style.backgroundColor = "blue";
        fruta.style.fontSize = "18px";
    }
});