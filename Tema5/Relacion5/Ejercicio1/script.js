const anadir = document.getElementById("btnAniadir")
const borrar = document.getElementById("btnBorrar")
const editar = document.getElementById("btnEditar")
const lista = document.getElementById("lista")

anadir.addEventListener("click",function () {
    let nuevoElemento = document.createElement("li")
    nuevoElemento.textContent= "Elemento " + (lista.childElementCount+1)
    lista.appendChild(nuevoElemento)
})

borrar.addEventListener("click", function () {
    lista.lastElementChild.remove()
})

editar.addEventListener("click",function () {
    lista.lastElementChild.textContent="Elemento editado"
})