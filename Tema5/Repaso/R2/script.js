let productoActivo = null;

// ===== CONSTANTES =====
const zonaProductos = document.getElementById("zonaProductos");
const resumenNombre = document.getElementById("resumenNombre");
const resumenSeccion = document.getElementById("resumenSeccion");
const resumenUnidades = document.getElementById("resumenUnidades");

const btnAnadirUnidad = document.getElementById("btnAnadirUnidad");
const btnPasarPedido = document.getElementById("btnPasarPedido");
const filtroSeccion = document.getElementById("filtroSeccion");

const listaPedido = document.getElementById("listaPedido");

const formNuevoProducto = document.getElementById("formNuevoProducto");
const mensajeForm = document.getElementById("mensajeForm");

// ===== FUNCIONES =====

function quitarActivoATodos() {
  /*
  1. Seleccionar todos los elementos ".producto"
  2. Recorrerlos
  3. Quitar la clase "activo" a todos
  */

    let listaProductos = document.querySelectorAll(".producto")
    listaProductos.forEach(producto => {
        producto.classList.remove("activo")
    });
}

function actualizarResumen(producto) {
  /*
  SI producto existe:
    1. Leer el nombre desde ".nombre"
    2. Leer la sección desde producto.dataset.seccion
    3. Leer las unidades desde producto.dataset.unidades
    4. Pintar esos datos en el resumen
  SI no existe:
    5. Poner "—" en los tres campos
  */
    if (producto!=null) {
        let nombre = producto.querySelector(".nombre").textContent
        let seccion = producto.dataset.seccion
        let cantidad = producto.dataset.unidades

        resumenNombre.textContent=nombre
        resumenSeccion.textContent=seccion
        resumenUnidades.textContent=cantidad
    } else {
        resumenNombre.textContent="-"
        resumenSeccion.textContent="-"
        resumenUnidades.textContent="-"
    }
}

function seleccionarProducto(producto) {
  /*
  1. Si producto no existe, no hacer nada
  2. Quitar la clase activa al resto
  3. Añadir la clase "activo" al producto pulsado
  4. Guardarlo en la variable global productoActivo
  5. Actualizar el resumen
  */

  if (producto) {
    quitarActivoATodos()
    productoActivo=producto
    productoActivo.classList.add("activo")
    actualizarResumen(producto)
  } else {
    quitarActivoATodos()
  }
}

function engancharClickProducto(producto) {
  /*
  1. Añadir un evento click al producto
  2. Dentro del evento, llamar a seleccionarProducto(producto)
  */

    producto.addEventListener("click", function () {
        seleccionarProducto(producto)
    })
}

function prepararProductosExistentes() {
  /*
  1. Seleccionar todos los productos ".producto"
  2. Recorrerlos
  3. Llamar a engancharClickProducto en cada uno
  */

    let listaProductos = document.querySelectorAll(".producto")
    listaProductos.forEach(producto => {
        engancharClickProducto(producto)
    });
}

function anadirUnidadAlActivo() {
  /*
  1. Si no hay producto activo, no hacer nada
  2. Leer las unidades desde productoActivo.dataset.unidades
  3. Convertir el valor a número
  4. Sumar 1
  5. Guardar el nuevo valor en dataset
  6. Actualizar el texto visible dentro de ".unidades"
  7. Actualizar el resumen
  */

    if (productoActivo) {
        let unidades=parseInt(productoActivo.dataset.unidades)
        productoActivo.dataset.unidades=unidades+1
        productoActivo.querySelector(".unidades").textContent=productoActivo.dataset.unidades
        actualizarResumen(productoActivo)
    } 
}

function filtrarProductos(valorFiltro) {
  /*
  1. Seleccionar todos los productos ".producto"
  2. Recorrerlos
  3. Leer la sección de cada producto con dataset.seccion
  4. Si valorFiltro es "Todas", mostrar todos
  5. Si no, mostrar solo los que coincidan
  6. Ocultar los demás
  */
    let listaProductos = document.querySelectorAll(".producto")
    listaProductos.forEach(producto => {
        let seccionProducto=producto.dataset.seccion

        if (valorFiltro == "Todas") {
            // Si el filtro es "Todas", mostramos siempre
            producto.style.display = "block"; 
        } else if (valorFiltro == seccionProducto) {
            // Si coincide la sección, mostramos
            producto.style.display = "block"; 
        } else {
            // Si no coincide, ocultamos
            producto.style.display = "none"; 
        }
    });
}

function crearLineaPedido(producto) {
  /*
  1. Crear un elemento li
  2. Leer nombre, sección y unidades del producto
  3. Construir un texto tipo:
     "Arroz redondo - Despensa - 2 unidades"
  4. Asignar el texto al li
  5. Devolver el li
  */

    let lineaPedido = document.createElement("li")
    let nombre=producto.querySelector(".nombre").textContent
    let seccion=producto.dataset.seccion
    let unidades=producto.dataset.unidades

    lineaPedido.textContent = nombre + " - " + seccion + " - " + unidades + "unidades"
    return lineaPedido
}

function pasarProductoAPedido() {
  /*
  1. Si no hay producto activo, no hacer nada
  2. Crear una línea llamando a crearLineaPedido(productoActivo)
  3. Añadir esa línea al final de #listaPedido
  */

    if (productoActivo) {
        let linea=crearLineaPedido(productoActivo)
        listaPedido.appendChild(linea)
    }
}

function crearProducto(nombre, seccion, unidades) {
    // 1. Crear un div
    let producto = document.createElement("div");

    // 2. Añadir clase y 3. tabindex
    producto.classList.add("producto");
    producto.tabIndex = 0;

    // 4. Guardar datos en dataset
    producto.dataset.seccion = seccion;
    producto.dataset.unidades = unidades;

    // 5. Crear contenido interno
    producto.innerHTML = `
        <h3 class="nombre">${nombre}</h3>
        <p class="seccion">Sección: <span>${seccion}</span></p>
        <p class="cantidad">Pedidas: <strong class="unidades">${unidades}</strong></p>
    `;

    // 6. Enganchar click
    engancharClickProducto(producto);

    // 7. Devolver el producto
    return producto;
}

function validarProducto(nombre, unidades) {
    let ok = true;
    if (nombre.trim() == "") ok = false;
    if (isNaN(unidades) || unidades < 0) ok = false;
    return ok;
}

function anadirProductoDesdeFormulario() {
    // 1. Leer valores
    let nombre = document.getElementById("nuevoNombre").value.trim();
    let seccion = document.getElementById("nuevaSeccion").value;
    let unidades = Number(document.getElementById("nuevasUnidades").value);

    // 2. Validar
    if (validarProducto(nombre, unidades)) {
        // 3. Crear producto y añadirlo
        let producto = crearProducto(nombre, seccion, unidades);
        zonaProductos.appendChild(producto);

        // 4. Resetear formulario
        formNuevoProducto.reset();

        // 5. Mensaje correcto
        mensajeForm.textContent = "Producto añadido correctamente";
        mensajeForm.style.color = "green";
    } else {
        // 6. Mensaje de error
        mensajeForm.textContent = "Error: nombre vacío o unidades inválidas";
        mensajeForm.style.color = "red";
    }
}


// ===== EVENTOS =====

btnAnadirUnidad.addEventListener("click", function () {
  /*
  llamar a la función para añadir una unidad
  */
 anadirUnidadAlActivo()
});

btnPasarPedido.addEventListener("click", function () {
  /*
  llamar a la función para pasar el producto al pedido
  */
 pasarProductoAPedido()
});

filtroSeccion.addEventListener("change", function () {
  /*
  llamar a la función de filtrar usando this.value
  */
 filtrarProductos(this.value)
});

formNuevoProducto.addEventListener("submit", function (event) {
  /*
  1. Evitar el envío del formulario
  2. Llamar a la función para añadir producto
  */
 anadirProductoDesdeFormulario()
});

// ===== INICIO =====
/*
1. Preparar los productos existentes
2. Seleccionar el primer producto si existe
3. Si no existe, limpiar el resumen
*/

prepararProductosExistentes();
const primerProducto = document.querySelector(".producto");
if (primerProducto) {
    seleccionarProducto(primerProducto);
} else {
    actualizarResumen(null);
}