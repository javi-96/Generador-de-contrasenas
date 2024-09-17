// Variables declaradas
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Función del elemento p del html
function textoValidacion(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para verificar la fortaleza de la contraseña
function validarFortaleza(password) {
    const tieneNumero = /\d/.test(password); // Verifica si tiene un número
    const tieneMayuscula = /[A-Z]/.test(password); // Verifica si tiene una mayúscula
    const tieneMinuscula = /[a-z]/.test(password); // Verifica si tiene una minúscula
    const tieneEspecial = /[!@#$%^&*()]/.test(password); // Verifica si tiene un carácter especial
    
    if (tieneNumero && tieneMayuscula && tieneMinuscula && tieneEspecial) {
        textoValidacion("p", "Contraseña fuerte");
    } else {
        textoValidacion("p", "Contraseña débil");
    }
}

// Función botón generar el password 
function generar() { 
    // Variable número ingresado devuelve un tipo numérico
    let numeroIngresado = parseInt(cantidad.value);
    
    // Condición de la cantidad de caracteres permitidos
    if (numeroIngresado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
        return; // Para que no siga ejecutándose si no cumple la condición
    }

    // Variable password
    let password = "";

    // Bucle que devuelve la cadena de caracteres
    for (let i = 0; i < numeroIngresado; i++) {
        // Variable que devuelve la cadena de caracteres mediante el método Math.floor y Math.random
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio; // Variable concatenada a la variable del caracter
    }

    // Variable devuelve la variable password
    contrasena.value = password;

    // Llamada a la función para validar la fortaleza de la contraseña
    validarFortaleza(password);
}

// Función botón limpiar
function limpiar() {
    contrasena.value = "";
}

// Función copiar password
async function copiar() {
    try {
        await navigator.clipboard.writeText(contrasena.value);
        alert("Texto copiado al portapapeles");
        limpiar();
        textoValidacion("p", "");
    } catch (err) {
        alert("Hubo un error al copiar el texto: " + err);
    }
}
