// ======================== 1 =======================
const imagenAlerta = document.getElementById("imgClick")

imagenAlerta.addEventListener("click", function() {
    alert ("¡Siente la Energía de Burn!")
})

// ========================= 2 =======================

let cambiarImagen = document.getElementById("imgHover")

cambiarImagen.addEventListener("mouseover", function () {
    cambiarImagen.setAttribute("src", "https://picsum.photos/200?random=99")
})

// ========================= 3 =======================

const teclaPresionada = document.getElementById("campoTexto")
teclaPresionada.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key)
})

// ========================= 4 =======================

const enviarFormulario = document.querySelector("button")

enviarFormulario.addEventListener("click", function() {
    let datosUsuario = document.getElementById("nombre")
    let datosUsuarioValor = datosUsuario.value
    const resultado = document.getElementById("resultado")
    resultado.textContent="Energía recargada, " + datosUsuarioValor
})

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
})

// ========================= 5 =======================

