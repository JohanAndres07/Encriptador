///codigo js Aplicacion de encriptar y desencriptar
///by: Johan Alarcon
//linkedin: https://www.linkedin.com/in/johan-alarcon-083174123
//github: https://github.com/JohanAndres07

//Funcion encriptar
function encriptar() {
    const texto = document.querySelector(".container-encriptar textarea").value.toLowerCase();
    const esEscritorio = window.matchMedia("(min-width: 1024px)").matches;

    if (texto.length > 0) {
        let txtCifrado = texto.replace(/e/igm, "enter"); 
        txtCifrado = txtCifrado.replace(/o/igm, "ober");
        txtCifrado = txtCifrado.replace(/i/igm, "imes");
        txtCifrado = txtCifrado.replace(/a/igm, "ai");
        txtCifrado = txtCifrado.replace(/u/igm, "ufat");

        document.querySelector(".container-texto img").style.display = "none";
        document.querySelector(".container-texto h2").style.display = "none";
        document.querySelector(".container-texto p").style.display = "none";

        document.querySelector(".container-copiar").style.display = "block";
        document.querySelector(".container-copiar textarea").value = txtCifrado;

    } else {
        if (esEscritorio) {
            document.querySelector(".container-texto img").style.display = "block";
        }
        document.querySelector(".container-texto h2").style.display = "block";
        document.querySelector(".container-texto p").style.display = "block";
        document.querySelector(".container-copiar").style.display = "none";
    }
}

function desencriptar() {
    const texto = document.querySelector(".container-encriptar textarea").value.toLowerCase();
    const esEscritorio = window.matchMedia("(min-width: 1024px)").matches;

    if (texto.length > 0) {
        let txtCifrado = texto.replace(/enter/igm, "e"); 
        txtCifrado = txtCifrado.replace(/ober/igm, "o");
        txtCifrado = txtCifrado.replace(/imes/igm, "i");
        txtCifrado = txtCifrado.replace(/ai/igm, "a");
        txtCifrado = txtCifrado.replace(/ufat/igm, "u");

        document.querySelector(".container-texto img").style.display = "none";
        document.querySelector(".container-texto h2").style.display = "none";
        document.querySelector(".container-texto p").style.display = "none";

        document.querySelector(".container-copiar").style.display = "block";
        document.querySelector(".container-copiar textarea").value = txtCifrado;

    } else {
        if (esEscritorio) {
            document.querySelector(".container-texto img").style.display = "block";
        }
        document.querySelector(".container-texto h2").style.display = "block";
        document.querySelector(".container-texto p").style.display = "block";
        document.querySelector(".container-copiar").style.display = "none";
    }
}

function copiar() {
    const contenido = document.querySelector(".container-copiar textarea");
    navigator.clipboard.writeText(contenido.value);
}

// Eventos
document.querySelector(".btn-encriptar").addEventListener("click", encriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", desencriptar);
document.querySelector(".btn-copiar").addEventListener("click", copiar);


    