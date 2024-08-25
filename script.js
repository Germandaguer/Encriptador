const textArea = document.querySelector(".text_area");
const mensajeEncriptado = document.querySelector(".texto_mensaje");

function botonEncriptar() {
    let textoEncriptado = encriptar(textArea.value) //creo la variable , llamo la funcion encriptar , y el textArea donde se ingreso el usuario.
    mensajeEncriptado.value = textoEncriptado;
    textArea.value = "";
    mensajeEncriptado.style.backgroundImage = "none";
    return

}


function encriptar(encriptarletras) {
    const llavesDeEncriptar = [["e","enter"] , ["i", "imes"] , ["a","ai"] , ["o","ober"] , ["u", "ufat"]];

    for(i=0; i < llavesDeEncriptar.length; i++){ // recorro todo el array llavesDeEncriptar

        if (encriptarletras.includes(llavesDeEncriptar [i][0])){ // si, con el metodo include (solo strings) verfico si la subcadena contiene el valor especifica "a", "e".etc en una cadena mas larga.

            encriptarletras = encriptarletras.replaceAll(llavesDeEncriptar [i][0] , llavesDeEncriptar [i][1]); // con replaceall remplazo los valores del array, primero los valores de las llaves iniciales [o] por los valores [1]

        }
        

    } 
    return encriptarletras
}




