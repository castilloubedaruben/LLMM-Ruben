const apiUrl = "https://restcountries.com/v3.1/";
const urlNombre = "https://restcountries.com/v3.1/name/";
const urlCapital = "https://restcountries.com/v3.1/capital/";
const urlCodigo = "https://restcountries.com/v3.1/alpha/";
const urlRegion = "https://restcountries.com/v3.1/region/";
const urlAleatorio = "https://restcountries.com/v3.1/all?fields=name,flags,capital,population"

const formNombre = document.getElementById("form-nombre");
const inputNombre = document.getElementById("input-nombre");
const resultadoNombre = document.getElementById("resultado-nombre");

const botonesRegion = document.querySelectorAll(".btn-region");
const resultadoRegion = document.getElementById("resultado-region");

const formCapital = document.getElementById("form-capital");
const inputCapital = document.getElementById("input-capital");
const resultadoCapital = document.getElementById("resultado-capital");

const formCodigo = document.getElementById("form-codigo");
const inputCodigo = document.getElementById("input-codigo");
const resultadoCodigo = document.getElementById("resultado-codigo");

const btnTodos = document.getElementById("btn-todos");
const resultadoTodos = document.getElementById("resultado-todos");

async function obtenerPaisPorNombre(nombre) {
    try {
        const respuesta = await fetch(`${urlNombre}${nombre}`);
        if (!respuesta.ok) {
            throw new Error("No se encontró el pais");
        }
        const datos = await respuesta.json();
        mostrarPaisPorNombre(datos[0]);
    } catch (error) {
        console.error("Error al obtener el pais:", error);
        document.getElementById("resultado-nombre").innerHTML = `<p>Error: no se encontró el país</p>`;
    }
}

function mostrarPaisPorNombre(datos) {
    
    let idiomas = ""; let monedas ="";
    for (const idioma in datos.languages) {
        idiomas += datos.languages[idioma] + " - ";
    }

    for (const moneda in datos.currencies) {
        monedas += datos.currencies[moneda].name + " - ";
    }

    resultadoNombre.innerHTML = `
    <p><strong>Bandera:</strong> ${datos.flag}</p>
        <p><strong>Nombre comun: ${datos.name.common}</p>
        <p><strong>Nombre oficial:</strong> ${datos.name.official} </p>
        <p><strong>Capital:</strong> ${datos.capital} </p>
        <p><strong>Region:</strong>${datos.region}</p>
        <p><strong>Subregion:</strong>${datos.subregion}</p>
        <p><strong>Poblacion:</strong>${datos.population}</p>
        <p><strong>Idiomas:</strong>${idiomas}</p>
        <p><strong>Monedas:</strong>${monedas}</p>
    `
}

document.getElementById("form-nombre").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("input-nombre").value.trim().toLowerCase();
    if (input) {
        obtenerPaisPorNombre(input);
    }
});

// ================ REGION =============

async function obtenerPaisPorRegion(region) {
    try {
        const respuesta = await fetch(`${urlRegion}${region}`);
        if (!respuesta.ok) {
            throw new Error("No se encontró el pais");
        }
        const datos = await respuesta.json();
        mostrarPaisPorRegion(datos[0]);
    } catch (error) {
        console.error("Error al obtener el pais:", error);
        document.getElementById("resultado-region").innerHTML = `<p>Error: no se encontró el país</p>`;
    }
}

function mostrarPaisPorRegion(datos) {
    resultadoRegion.innerHTM="";
    for (const pais of datos) {
        resultadoRegion.innerHTML = `
        <article class="tarjeta">
            <p><strong>Bandera:</strong> ${pais.flag}</p>
            <p><strong>Nombre comun: ${pais.name.common}</p>
            <p><strong>Capital:</strong> ${pais.capital} </p>
            <p><strong>Poblacion:</strong>${pais.population}</p>
        </article>
        `
    }
}

for (const boton of botonesRegion) {
    boton.addEventListener("click", function () {
        const region = boton.dataset.region;
        obtenerPaisesPorRegion(region);
    });
}

// ================ CAPITAL =============

async function obtenerPaisPorCapital(capital) {
    try {
        const respuesta = await fetch(`${urlCapital}${capital}`);

        if (!respuesta.ok) {
            throw new Error("No se encontró la capital");
        }

        const datos = await respuesta.json();
        mostrarPaisPorCapital(datos[0]);

    } catch (error) {
        console.error("Error al obtener la capital:", error);
        resultadoCapital.innerHTML = `<p>Error: no se encontró la capital</p>`;
    }
}

function mostrarPaisPorCapital(datos) {

    resultadoCapital.innerHTML = `
        <h3>${datos.name.common}</h3>
        <p><strong>Bandera:</strong> ${datos.flag}</p>
        <p><strong>Capital:</strong> ${datos.capital ? datos.capital[0] : "No disponible"}</p>
        <p><strong>Región:</strong> ${datos.region}</p>
        <p><a href="${datos.maps.googleMaps}" target="_blank">Ver en Google Maps</a></p>
    `
}

formCapital.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = inputCapital.value.trim().toLowerCase();
    if (input) {
        obtenerPaisPorCapital(input);
    } 
});

// ================ CODIGO =============

async function obtenerPaisPorCodigo(codigo) {
    try {
        const respuesta = await fetch(`${urlCodigo}${codigo}`);

        if (!respuesta.ok) {
            throw new Error("No se encontró la capital");
        }

        const datos = await respuesta.json();
        mostrarPaisPorCodigo(datos[0]);

    } catch (error) {
        console.error("Error al obtener el codigo:", error);
        resultadoCodigo.innerHTML = `<p>Error: no se encontró el codigo</p>`;
    }
}

function mostrarPaisPorCodigo(datos) {

    resultadoCodigo.innerHTML = `
        <h3>${datos.name.common}</h3>
        <img src="${datos.flags.svg}" alt="Bandera de ${datos.name.common}" width="150">
        <p><strong>Código cca2:</strong> ${datos.cca2}</p>
        <p><strong>Código cca3:</strong> ${datos.cca3}</p>
        <p><strong>Continente:</strong> ${datos.continents}</p>
        <p><strong>Zonas horarias:</strong> ${datos.timezones}</p>
    `
}

formCodigo.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = inputCodigo.value.trim().toLowerCase();
    if (input) {
        obtenerPaisPorCodigo(input);
    } 
});