const textArea = document.querySelector(".text_area");
const mensajeEncriptado = document.querySelector(".texto_mensaje");

function botonEncriptar() {
    let textoEncriptado = encriptar(textArea.value) //creo la variable , llamo la funcion encriptar , y el textArea donde se ingreso el usuario.
    mensajeEncriptado.value = textoEncriptado;
    textArea.value = "";
    mensajeEncriptado.style.backgroundImage = "none";
    return

}

function botonDesencriptar() {
    let textoDesencriptado = desencriptar(textArea.value);
    mensajeEncriptado.value = textoDesencriptado;
    textArea.value = ""; // limpio el campo testarea
    mensajeEncriptado.style.backgroundImage = "none";// borro la imagen
    return
    
}


function botonCopiar() {
    
    let copiarTexto = document.querySelector(".texto_mensaje").value;// Obtengo el valor del texto del elemento con la clase 'texto_mensaje'
    navigator.clipboard.writeText(copiarTexto);    // Copia el texto al portapapeles mediante la api
    mensajeEncriptado.value = "";
    return
}


function encriptar(encriptarletras) {
    const llavesDeEncriptar = [["e","enter"] , ["i", "imes"] , ["a","ai"] , ["o","ober"] , ["u", "ufat"]];

    for(let i = 0; i < llavesDeEncriptar.length; i++){ // recorro todo el array llavesDeEncriptar

        if (encriptarletras.includes(llavesDeEncriptar [i][0])){ // si, con el metodo include (solo strings) verfico si la subcadena contiene el valor especifica "a", "e".etc en una cadena mas larga.

            encriptarletras = encriptarletras.replaceAll(llavesDeEncriptar [i][0] , llavesDeEncriptar [i][1]); // con replaceall remplazo los valores del array, primero los valores de las llaves iniciales [o] por los valores [1]

        }
        

    } 
    return encriptarletras
}

function desencriptar (desencriptarLetras) {
    const llavesDeEncriptar = [["e","enter"] , ["i", "imes"] , ["a","ai"] , ["o","ober"] , ["u", "ufat"]];

    for (let i = 0; i < llavesDeEncriptar.length; i++) {

        if (desencriptarLetras.includes(llavesDeEncriptar[i][1])) {

            desencriptarLetras = desencriptarLetras.replaceAll(llavesDeEncriptar [i][1], llavesDeEncriptar [i][0]);
        
        }
        
    }
    return desencriptarLetras
}




