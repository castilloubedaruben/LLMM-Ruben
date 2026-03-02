const NOMBRE = document.getElementById("nombre")
const EMAIL = document.getElementById("email")
let producto = document.getElementById("producto")
const CANTIDAD = document.getElementById("cantidad")

NOMBRE.addEventListener("focus", function () {
    NOMBRE.style.border = "4px solid green"
})

NOMBRE.addEventListener("blur", function () {
    NOMBRE.style.border = ""
})

producto.addEventListener("change", function () {
    producto = document.getElementById("producto").value
    console.log(producto)
})

document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let cantidad = document.getElementById("cantidad").value;
    
    if (nombre == "" || email == "" || cantidad <= 0) {
        console.log("Error: Todos los campos son obligatorios y la cantidad debe ser mayor a 0");
        event.preventDefault(); // Evita el envío del formulario
    } else {
        console.log("Formulario enviado correctamente");
    }
});

