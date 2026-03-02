const SUMAR = document.getElementById("btnSumar");
const RESTAR = document.getElementById("btnRestar");
const MULTIPLICAR = document.getElementById("btnMultiplicar");
const DIVIDIR = document.getElementById("btnDividir");
const RESULTADO = document.getElementById("resultado");

SUMAR.addEventListener("click", function () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let suma=numero1+numero2

    RESULTADO.textContent="Resultado: " + suma;
});

RESTAR.addEventListener("click", function () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resta=numero1-numero2

    RESULTADO.textContent="Resultado: " + resta;
});


MULTIPLICAR.addEventListener("click", function () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let multiplicar=numero1*numero2

    RESULTADO.textContent="Resultado: " + multiplicar;
});


DIVIDIR.addEventListener("click", function () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    if (numero2==0) {
        RESULTADO.textContent="No se puede dividir entre 0"
    } else {
        let division=numero1/numero2
        RESULTADO.textContent="Resultado: " + division;
    }
});

