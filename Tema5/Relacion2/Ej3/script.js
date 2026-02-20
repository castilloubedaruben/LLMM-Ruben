

const noticias = document.querySelectorAll(".noticia");

for (let i = 0; i < noticias.length; i++) {
    if (i%2==0) {
        noticias[i].style.backgroundColor="lightblue"
    } else {
        noticias[i].style.color="red"
    }
    
}