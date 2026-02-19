const precios = document.querySelectorAll(".precio")
precios.forEach(precio => {
    precio.style.fontWeight = "bold"
    // Extraemos el número que hay dentro de precio
    const valor = Number(precio.textContent);

    //Usamos el valor guardado para la comparación
    if (valor>50) {
        precio.style.color = "red"
    }
})