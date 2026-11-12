
/* ACTIVIDAD 09: DOM Y EVENTOS */

// Seleccionar los elementos HTML
const formulario = document.querySelector("#formulario-registro");
const lista = document.querySelector("#lista-inscripciones");
const mensaje = document.querySelector("#mensaje");
const campoNombre = document.querySelector("#nombre");

// Función para cargar participantes
async function cargarInscripciones() {
  // TODO: Consultar registros usando fetch.
  // TODO: Mostrar los participantes en la lista.
  // Se completará en las siguientes actividades.
}

// Escuchar cuando el usuario envía el formulario
formulario.addEventListener("submit", async (evento) => {

  // Evitar que la página se recargue
  evento.preventDefault();

  // Verificar campos obligatorios
  if (!formulario.reportValidity()) {
    return;
  }

  // Obtener los valores del formulario
  const datos = new FormData(formulario);

  // Mostrar el nombre en la consola
  console.log("Nombre:", datos.get("nombre"));

  // Mostrar los demás datos
  console.log("Correo:", datos.get("correo"));
  console.log("Taller:", datos.get("taller"));
  console.log("Teléfono:", datos.get("telefono"));
  console.log("Horario:", datos.get("horario"));

  // Confirmar que los datos fueron capturados
  mensaje.textContent =
    "Datos capturados correctamente. Pendiente guardar la inscripción.";

  // TODO: Enviar los datos al servidor con fetch.
  // TODO: Mostrar respuesta del servidor.
  // TODO: Actualizar la lista de participantes.
});

// Probar el evento input cuando escribimos
campoNombre.addEventListener("input", () => {
  console.log("Escribiendo nombre:", campoNombre.value);
});

// Cargar participantes cuando inicia la página
cargarInscripciones();
