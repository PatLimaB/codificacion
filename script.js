//Solicitamos al usuario que ingrese el mensaje mediante una ventana que emerge
let userText = window.prompt("Introduce el mensaje a cifrar");

//Llamamos a la función "cifrar" con el mensaje ingresado por el usuario
let mensajeCodificado = cifrar(userText);

//Creamos un elemento de párrafo para mostrar el resultado
let resultadoElement = document.createElement("p");
resultadoElement.textContent = `Mensaje cifrado: ${mensajeCodificado}`;

//Mostramos el resultado en el centro de la pantalla tal y como se muestra en el css
let body = document.body;
body.appendChild(resultadoElement);

//Definimos la función de cifrado del texto
function cifrar(texto) {
    texto = texto.toUpperCase();                    //cambiamos las letras a mayúsculas para que no haya problemas
    const codes = [];                               //creamos un array donde se introducirá el código
    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i);           //el código será el código ascii de cada carácter
        if (codigo >= 65 && codigo <= 90) {         //si es una mayúscula, se dará un salto de 1 lugar, tal y como dicta el requisito
            codigo = codigo + 1;
            if (codigo > 90) {                      //si llega a la Z, volverá al inicio del abecedario 
                codigo = codigo - 26;
            }
        } else if (codigo >= 48 && codigo <= 57) {  //si es un número entre 0 y 8, dará un salto
            codigo = codigo + 1;
            if (codigo > 57) {                      //si es 9, volverá al principio
                codigo = codigo - 10;
            }
        }
        codes.push(codigo);                         //se va introduciendo cada carácter codificado en el array
    }
    let textoCifrado = String.fromCharCode(...codes);
    return textoCifrado;
}

//Evento de la imagen
//Obtenemos la referencia de la imagen por su id
let imagen = document.getElementById("imagen");

//Agregamos un event listener para el clic en la imagen
imagen.addEventListener("click", nuevaImagen);
function nuevaImagen() {
    //Generamos una nueva URL con una imagen local 
    let nuevaURL = "/img/jaguar.jpg";
    imagen.style.width = "200px";
    imagen.style.height = "150px";
    //Cambiamos la fuente de la imagen
    imagen.src = nuevaURL;
};
