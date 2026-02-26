const anadir = document.getElementById("btnAniadir")
const borrar = document.getElementById("btnBorrar")
const editar = document.getElementById("btnEditar")

anadir.addEventListener("click",function () {
    const lista =document.getElementById("lista")
    const nuevoLi=document.createElement("li")
    lista.appendChild(nuevoLi.textContent("Elemento"))
    console.log("hola")
    let cantidad=document.childElementCount("ul")
    
    lista.lastElementChild(nuevoLi+(cantidad+1))


})