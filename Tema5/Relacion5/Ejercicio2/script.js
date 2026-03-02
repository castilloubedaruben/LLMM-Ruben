let total = 0;
const anadirProducto = document.getElementById("btnAniadirProducto")
let listaCompra = document.getElementById("listaProductos")

anadirProducto.addEventListener("click",function () {
    const nombreProducto = document.getElementById("inputNombreProducto").value;
    const precioProducto = parseFloat(document.getElementById("inputPrecioProducto").value);

    let nuevoProducto=document.createElement("li")
    nuevoProducto.textContent=nombreProducto + " - " + precioProducto
    listaCompra.appendChild(nuevoProducto)
    total+=precioProducto
    document.getElementById("totalCompraH2").textContent="Total:" + total
})
