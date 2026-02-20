const canciones = document.querySelectorAll("ul li")
    canciones.forEach(cancion => {
        cancion.style.color="blue"
        cancion.textContent+="🎶"
    })