
let animales = document.getElementsByClassName("animal")
for (let animal of animales) {
    animal.style.backgroundColor = "lightyellow"
}

const boton = document.getElementById("resaltarAnimales")
boton.addEventListener("click", function() {
    for (let animal of animales) {
        animal.style.color = "green"
        animal.style.fontSize = "25px"
    }
})

