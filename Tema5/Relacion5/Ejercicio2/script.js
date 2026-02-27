let total = 0;
const anadirProducto = document.getElementById("btnAniadirProducto")
let nombre = document.getElementById("inputNombreProducto").value
let precio = parseFloat.document.getElementById("inputPrecioProducto").value

let listaCompra = document.getElementById("listaProductos")

anadirProducto.addEventListener("click",function () {
    nuevoProducto=document.createElement(li)
    nuevoProducto.textContent=nombre + " - " + precio
    listaCompra.appendChild(nuevoProducto)
    total+=precio
    document.getElementById("totalCompraH2").textContent="Total:" + total
})
