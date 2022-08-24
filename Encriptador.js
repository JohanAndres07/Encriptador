    ///codigo js Aplicacion de encriptar y desencriptar
    ///by: Johan Alarcon 
    //linkedin: https://www.linkedin.com/in/johan-alarcon-083174123
    //github: https://github.com/JohanAndres07
   //Funcion encriptar
    function encriptar(){
        ///Extrae y convierte el texto en una lista 
        var textoEncriptado=document.getElementById("container-texto-encriptar").value.split('');

        //Con el for recorremos la lista y     encriptamos el texto
        for(var i=0;i<textoEncriptado.length;i++){
            if(textoEncriptado[i]=="a"){
                textoEncriptado[i]="ai";
            }
            if(textoEncriptado[i]=="e"){
                textoEncriptado[i]="enter";
            }
            if(textoEncriptado[i]=="i"){
                textoEncriptado[i]="imes";
            }
            if(textoEncriptado[i]=="o"){
                textoEncriptado[i]="ober";
            }
            if(textoEncriptado[i]=="u"){
                textoEncriptado[i]="ufat";
            }
        }
        //No hay cambios si no hay texto que leer
        if(document.getElementById("container-texto-encriptar").value!=""){
        //Ocultamos los elementos del panel derecho
        document.getElementById("container-cri-img-info").style.visibility = "hidden";
        document.getElementById("container-cri-parrafo-info").style.visibility = "hidden";
        document.getElementById("container-cri-parrafo-info-help").style.visibility = "hidden";
        //hacemos visible el boton copiar
        document.getElementById("container-cri-btn-copiar").style.visibility = "visible";
        //Escribimos el codigo encriptado
        document.getElementById("textarea").value=textoEncriptado.join("");
        
        }
    }
    function desEncriptar(){
         ///Extrae el texto del textArea
        var textoEncriptado=document.getElementById("container-texto-encriptar").value;
         //Creamos un while para recorrer y desencriptar el texto encriptado
        var contador=0;
        while(contador<=textoEncriptado.length){
        textoEncriptado = textoEncriptado.replace("ai", "a");
        textoEncriptado = textoEncriptado.replace("enter", "e");
        textoEncriptado = textoEncriptado.replace("imes", "i");
        textoEncriptado = textoEncriptado.replace("ober", "o");
        textoEncriptado = textoEncriptado.replace("ufat", "u");
        contador++;
        }
        //No hay cambios, si no hay texto que leer
        if(document.getElementById("container-texto-encriptar").value!=""){
            //Ocultamos los elementos del panel derecho
            document.getElementById("container-cri-img-info").style.visibility = "hidden";
            document.getElementById("container-cri-parrafo-info").style.visibility = "hidden";
            document.getElementById("container-cri-parrafo-info-help").style.visibility = "hidden";
            //hacemos visible el boton copiar
            document.getElementById("container-cri-btn-copiar").style.visibility = "visible";
        //Escribimos el mensaje desencriptado
        document.getElementById("textarea").value=textoEncriptado;
        
        }
    }
    //funcion que copia en el portapapeles
    function copy() {
    var textoEncriptado=document.getElementById("textarea").focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    
    }



/*
letras que se encriptan
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/