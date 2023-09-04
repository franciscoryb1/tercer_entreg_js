// Obtener elementos del formulario
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const edadInput = document.getElementById("edad");
const salarioInput = document.getElementById("salario");
const antiguedadInput = document.getElementById("antiguedad")
const emailInput = document.getElementById("email");

// Obtener contenedor de la ficha de usuario
const fichaUsuarioContainer = document.getElementById("fichaUsuarioContainer");
const nombreUsuario = document.getElementById("nombreUsuario");
const apellidoUsuario = document.getElementById("apellidoUsuario");
const edadUsuario = document.getElementById("edadUsuario");
const salarioUsuario = document.getElementById("salarioUsuario");
const antiguedadUsuario = document.getElementById("antiguedadUsuario");
const presentismoUsuario = document.getElementById("presentismoUsuario");
const retencionesUsuario = document.getElementById("retencionesUsuario");
const impuestosUsuario = document.getElementById("impuestosUsuario");
const emailUsuario = document.getElementById("emailUsuario");

// Datos del usuario
let usuario = {
    nombre: "",
    apellido: "",
    edad: 0,
    salario: 0,
    antiguedad: 0,
    email: ""
};

// Función para mostrar la ficha de usuario
function mostrarFichaUsuario() {
    nombreUsuario.textContent = "Nombre: " + usuario.nombre;
    apellidoUsuario.textContent = "Apellido: " + usuario.apellido;
    edadUsuario.textContent = "Edad: " + usuario.edad;
    salarioUsuario.textContent = "Salario basico: $" + usuario.salario.toFixed(2);
    emailUsuario.textContent = "Email: " + usuario.email;

    // Calcular retenciones e impuestos
    const presentismo = usuario.salario * 0.03;
    const antiguedad = usuario.salario * (parseInt(usuario.antiguedad) / 100);
    const retenciones = usuario.salario * 0.21;
    const jubilacion = usuario.salario * 0.05;
    const obrasocial = usuario.salario * 0.05;
    const aporte_sindicato = usuario.salario * 0.02;
    const salario_neto = usuario.salario + presentismo + antiguedad - jubilacion - obrasocial - aporte_sindicato;

    antiguedadUsuario.textContent = "Antiguedad: + $" + antiguedad.toFixed(2);
    presentismoUsuario.textContent = "Presentismo: + $" + presentismo.toFixed(2);
    retencionesUsuario.textContent = "Retenciones: - $" + retenciones.toFixed(2);
    aporteJubilatorioUsuario.textContent = "Aporte Jubilatorio: - $" + jubilacion.toFixed(2);
    obraSocialUsuario.textContent = "Obra social: - $" + obrasocial.toFixed(2);
    aporteSindicato.textContent = "Aporte sindical: - $" + aporte_sindicato.toFixed(2);
    salarioNeto.textContent = "Salario neto: $" + salario_neto.toFixed(2);

    fichaUsuarioContainer.style.display = "block";
}

// Función para guardar los datos del usuario en el LocalStorage
function guardarDatosUsuario() {
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

// Función para cargar los datos del usuario desde el LocalStorage
function cargarDatosUsuario() {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
        usuario = JSON.parse(usuarioGuardado);
        mostrarFichaUsuario();
    }
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
    event.preventDefault();

    // Obtener valores del formulario
    usuario.nombre = nombreInput.value;
    usuario.apellido = apellidoInput.value;
    usuario.edad = parseInt(edadInput.value);
    usuario.salario = parseFloat(salarioInput.value);
    usuario.antiguedad = parseInt(antiguedadInput.value)
    usuario.email = emailInput.value;

    mostrarFichaUsuario();

    guardarDatosUsuario();
}


formulario.addEventListener("submit", manejarEnvioFormulario);

// Cargar los datos del usuario al cargar la página
cargarDatosUsuario();