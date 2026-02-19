

const noticias = document.querySelectorAll(".noticia");

noticias.forEach((noticia, i) => {
    if (i % 2 === 0) {
        noticia.style.backgroundColor="lightgray"
    } else {
        noticia.style.color="blue"
    }
});