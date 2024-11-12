//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Selección de elementos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const submitBtn = document.getElementById('submit-btn');

// Selección de elementos de error
const nombreError = document.getElementById('nombre-error');
const emailError = document.getElementById('email-error');
const mensajeError = document.getElementById('mensaje-error');

// Validación del campo "Nombre"
function validarNombre() {
    const nombre = nombreInput.value.trim();
    if (nombre === '') {
        nombreError.textContent = 'El nombre no puede estar vacío';
        return false;
    } else if (nombre.length > 50) {
        nombreError.textContent = 'El nombre no debe exceder los 50 caracteres';
        return false;
    } else {
        nombreError.textContent = '';
        return true;
    }
}

// Validación del campo "Email"
function validarEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'El correo electrónico no puede estar vacío';
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Formato de correo no válido. Ej: texto@dominio.com';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

// Validación del campo "Mensaje"
function validarMensaje() {
    const mensaje = mensajeInput.value.trim();
    if (mensaje === '') {
        mensajeError.textContent = 'El mensaje no puede estar vacío';
        return false;
    } else if (mensaje.length > 300) {
        mensajeError.textContent = 'El mensaje no debe exceder los 300 caracteres';
        return false;
    } else {
        mensajeError.textContent = '';
        return true;
    }
}

// Habilitar/deshabilitar botón "Enviar"
function habilitarBoton() {
    if (validarNombre() && validarEmail() && validarMensaje()) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// Validar campos en tiempo real
nombreInput.addEventListener('input', () => {
    validarNombre();
    habilitarBoton();
});
emailInput.addEventListener('input', () => {
    validarEmail();
    habilitarBoton();
});
mensajeInput.addEventListener('input', () => {
    validarMensaje();
    habilitarBoton();
});

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validarNombre() && validarEmail() && validarMensaje()) {
        alert('¡Formulario enviado exitosamente!');
        // Aquí puedes agregar la lógica para enviar los datos al servidor.
        this.reset();
        submitBtn.disabled = true;
    }
});
