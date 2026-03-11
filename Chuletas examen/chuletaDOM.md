1️⃣ Seleccionar elementos
Por ID
const elemento = document.getElementById("miId")
Por clase
const elementos = document.getElementsByClassName("miClase")
Por etiqueta
const parrafos = document.getElementsByTagName("p")
Con selectores CSS (MUY usado)
const elemento = document.querySelector("#miId")
const elementos = document.querySelectorAll(".miClase")

✔ querySelector → devuelve 1 elemento
✔ querySelectorAll → devuelve NodeList

2️⃣ Modificar contenido
Cambiar texto
elemento.textContent = "Nuevo texto"
Insertar HTML
elemento.innerHTML = "<strong>Texto</strong>"

⚠️ Diferencia:

Método	Permite HTML
textContent	❌
innerHTML	✔
3️⃣ Modificar atributos
elemento.setAttribute("src", "imagen.jpg")

Obtener atributo:

elemento.getAttribute("src")

Eliminar atributo:

elemento.removeAttribute("alt")
4️⃣ Cambiar estilos
elemento.style.color = "red"
elemento.style.backgroundColor = "blue"
elemento.style.border = "2px solid black"

⚠️ CSS → JS

CSS	JS
background-color	backgroundColor
font-size	fontSize
5️⃣ Añadir / quitar clases (mejor práctica)
elemento.classList.add("activo")
elemento.classList.remove("activo")
elemento.classList.toggle("activo")
6️⃣ Crear elementos
Crear elemento
const nuevo = document.createElement("p")
Añadir contenido
nuevo.textContent = "Hola"
Insertar en el DOM
contenedor.appendChild(nuevo)
7️⃣ Insertar en posición específica
contenedor.insertBefore(nuevo, referencia)
8️⃣ Eliminar elementos
Eliminar directamente
elemento.remove()
Eliminar desde el padre
padre.removeChild(hijo)
9️⃣ Eventos
Sintaxis básica
elemento.addEventListener("evento", function(){

})
Eventos más usados
Evento	Uso
click	clic
mouseover	pasar ratón
mouseout	salir ratón
keydown	pulsar tecla
keyup	soltar tecla
change	cambiar valor
focus	entrar en input
blur	salir del input
submit	enviar formulario
🔟 Evento con información (event)
input.addEventListener("keydown", function(event){
    console.log(event.key)
})
11️⃣ Focus y Blur
input.addEventListener("focus", function(){
    input.style.border = "2px solid green"
})

input.addEventListener("blur", function(){
    input.style.border = "2px solid red"
})
12️⃣ Convertir texto a número

Los inputs siempre devuelven string.

let num = parseInt(input.value)
let precio = parseFloat(input.value)
13️⃣ Propiedades útiles
Número de hijos
lista.childElementCount
Último hijo
lista.lastElementChild
14️⃣ Reemplazar elemento
padre.replaceChild(nuevo, viejo)
⚠️ Errores típicos de examen
❌ Falta comillas
document.createElement(li)

✔ Correcto

document.createElement("li")
❌ Suma mal hecha
"Resultado: " + num1 + num2

✔ Correcto

"Resultado: " + (num1 + num2)
❌ Leer .value fuera del evento

Mal:

const valor = input.value

Bien:

boton.addEventListener("click", function(){
    const valor = input.value
})

🧩 Patrón de ejercicio típico
const boton = document.getElementById("btn")

boton.addEventListener("click", function(){

    const texto = document.getElementById("input").value

    const nuevo = document.createElement("li")

    nuevo.textContent = texto

    document.getElementById("lista").appendChild(nuevo)

})

🧠 Regla de oro para DOM

Casi todos los ejercicios siguen estos pasos:

1️⃣ Seleccionar elemento
2️⃣ Escuchar evento
3️⃣ Obtener datos
4️⃣ Crear elemento
5️⃣ Modificar contenido
6️⃣ Insertarlo en el DOM