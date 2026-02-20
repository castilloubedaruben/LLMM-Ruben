// 1. Primero seleccionamos los elementos que vamos a usar
const frutas = document.getElementsByTagName("li");
const boton = document.getElementById("marcarFrutas");

// 2. Luego configuramos qué pasa cuando hacemos clic
boton.addEventListener("click", function () {
    for (const fruta of frutas) {
        fruta.style.backgroundColor = "blue";
        fruta.style.fontSize = "18px";
        fruta.style.border = "2px solid blue";
        
        if (!fruta.textContent.includes("✅")) {
            fruta.textContent+=" ✅"
        }
    }
});