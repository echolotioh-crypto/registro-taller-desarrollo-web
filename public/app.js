
/*
 PROYECTO FINAL: REGISTRO AL TALLER
 DOM + FETCH + API REST + SQLITE
 CRUD COMPLETO + REPORTES Y ESTADÍSTICAS
*/

// ========================================
// ELEMENTOS HTML
// ========================================

const formulario = document.querySelector("#formulario-registro");
const lista = document.querySelector("#lista-inscripciones");
const mensaje = document.querySelector("#mensaje");
const campoNombre = document.querySelector("#nombre");

const botonRegistrar = formulario.querySelector(
  'button[type="submit"]'
);

// Elementos de los reportes
const totalParticipantes = document.querySelector(
  "#total-participantes"
);

const graficoTaller = document.querySelector(
  "#grafico-taller"
);

const graficoModalidad = document.querySelector(
  "#grafico-modalidad"
);

const graficoNivel = document.querySelector(
  "#grafico-nivel"
);

const botonActualizarReportes = document.querySelector(
  "#actualizar-reportes"
);

const mensajeReportes = document.querySelector(
  "#mensaje-reportes"
);

// Rutas de la API REST
const API_URL = "/api/inscripciones";
const API_REPORTES = "/api/reportes";

// Identificador del participante en edición
let idEnEdicion = null;

// ========================================
// BOTÓN CANCELAR EDICIÓN
// ========================================

const botonCancelar = document.createElement("button");

botonCancelar.type = "button";
botonCancelar.textContent = "Cancelar edición";
botonCancelar.style.display = "none";

formulario.appendChild(botonCancelar);

// ========================================
// MOSTRAR MENSAJES
// ========================================

function mostrarMensaje(texto, esError = false) {
  mensaje.textContent = texto;
  mensaje.style.color = esError ? "#b91c1c" : "#06656b";
}

function mostrarMensajeReportes(texto, esError = false) {
  mensajeReportes.textContent = texto;
  mensajeReportes.style.color = esError
    ? "#b91c1c"
    : "#06656b";
}

// ========================================
// OBTENER DATOS DEL FORMULARIO
// ========================================

function obtenerDatos() {

  const datos = new FormData(formulario);

  return {
    nombre: datos.get("nombre").trim(),
    correo: datos.get("correo").trim(),
    telefono: datos.get("telefono").trim(),
    taller: datos.get("taller"),
    horario: datos.get("horario"),
    modalidad: datos.get("modalidad"),
    nivel_experiencia: datos.get("nivel_experiencia")
  };
}

// ========================================
// CANCELAR EDICIÓN
// ========================================

function cancelarEdicion() {

  idEnEdicion = null;

  formulario.reset();

  botonRegistrar.textContent = "Registrar inscripción";

  botonCancelar.style.display = "none";
}

botonCancelar.addEventListener("click", () => {
  cancelarEdicion();
  mostrarMensaje("Edición cancelada.");
});

// ========================================
// GET: CARGAR PARTICIPANTES
// ========================================

async function cargarInscripciones() {

  try {

    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error("No se pudo cargar la lista.");
    }

    const inscripciones = await respuesta.json();

    lista.replaceChildren();

    if (inscripciones.length === 0) {

      const vacio = document.createElement("li");

      vacio.className = "vacio";
      vacio.textContent = "Aún no hay inscripciones.";

      lista.appendChild(vacio);

      return;
    }

    inscripciones.forEach((inscripcion) => {

      const elemento = document.createElement("li");

      // Información del participante
      const informacion = document.createElement("p");

      informacion.textContent =
        `${inscripcion.nombre} | ` +
        `${inscripcion.correo} | ` +
        `${inscripcion.telefono} | ` +
        `${inscripcion.taller} | ` +
        `${inscripcion.horario} | ` +
        `${inscripcion.modalidad} | ` +
        `${inscripcion.nivel_experiencia}`;

      // Botón Editar
      const botonEditar = document.createElement("button");

      botonEditar.type = "button";
      botonEditar.textContent = "Editar";

      botonEditar.addEventListener("click", () => {
        editarInscripcion(inscripcion);
      });

      // Botón Eliminar
      const botonEliminar = document.createElement("button");

      botonEliminar.type = "button";
      botonEliminar.textContent = "Eliminar";

      botonEliminar.addEventListener("click", () => {
        eliminarInscripcion(inscripcion.id);
      });

      // Agregar elementos a la lista
      elemento.appendChild(informacion);
      elemento.appendChild(botonEditar);
      elemento.appendChild(botonEliminar);

      lista.appendChild(elemento);

    });

  } catch (error) {

    console.error("Error al consultar:", error);

    mostrarMensaje(error.message, true);
  }
}

// ========================================
// PUT: EDITAR PARTICIPANTE
// ========================================

function editarInscripcion(inscripcion) {

  idEnEdicion = inscripcion.id;

  const campos = [
    "nombre",
    "correo",
    "telefono",
    "taller",
    "horario",
    "modalidad",
    "nivel_experiencia"
  ];

  campos.forEach((campo) => {

    formulario.elements.namedItem(campo).value =
      inscripcion[campo];

  });

  botonRegistrar.textContent = "Guardar cambios";

  botonCancelar.style.display = "block";

  mostrarMensaje(
    `Editando inscripción de ${inscripcion.nombre}`
  );

  formulario.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ========================================
// DELETE: ELIMINAR PARTICIPANTE
// ========================================

async function eliminarInscripcion(id) {

  const confirmar = confirm(
    "¿Estás seguro de eliminar esta inscripción?"
  );

  if (!confirmar) {
    return;
  }

  try {

    const respuesta = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(
        resultado.error || "No se pudo eliminar."
      );
    }

    // Salir del modo edición cuando corresponda
    if (idEnEdicion === id) {
      cancelarEdicion();
    }

    mostrarMensaje(resultado.mensaje);

    // Actualizar participantes y reportes
    await cargarInscripciones();
    await cargarReportes();

  } catch (error) {

    console.error("Error al eliminar:", error);

    mostrarMensaje(error.message, true);
  }
}

// ========================================
// POST Y PUT: GUARDAR INSCRIPCIÓN
// ========================================

formulario.addEventListener("submit", async (evento) => {

  evento.preventDefault();

  if (!formulario.reportValidity()) {
    return;
  }

  const datos = obtenerDatos();

  const editando = idEnEdicion !== null;

  const metodo = editando ? "PUT" : "POST";

  const url = editando
    ? `${API_URL}/${idEnEdicion}`
    : API_URL;

  botonRegistrar.disabled = true;
  botonCancelar.disabled = true;

  mostrarMensaje(
    editando
      ? "Actualizando inscripción..."
      : "Guardando inscripción..."
  );

  try {

    const respuesta = await fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(
        resultado.error || "Ocurrió un error."
      );
    }

    // Regresar al modo registro
    cancelarEdicion();

    mostrarMensaje(resultado.mensaje);

    // Actualizar lista y estadísticas
    await cargarInscripciones();
    await cargarReportes();

  } catch (error) {

    console.error("Error al guardar:", error);

    mostrarMensaje(error.message, true);

  } finally {

    botonRegistrar.disabled = false;
    botonCancelar.disabled = false;
  }
});

// ========================================
// REPORTES: CREAR GRÁFICOS DE BARRAS
// ========================================

function crearGrafico(contenedor, datos, campo, total) {

  // Limpiar el contenido anterior
  contenedor.replaceChildren();

  // Mostrar mensaje cuando no existan datos
  if (!Array.isArray(datos) || datos.length === 0) {

    const vacio = document.createElement("p");

    vacio.className = "vacio";
    vacio.textContent = "No hay datos para mostrar.";

    contenedor.appendChild(vacio);

    return;
  }

  datos.forEach((dato) => {

    const cantidad = Number(dato.cantidad) || 0;

    const porcentaje = total > 0
      ? Math.min(100, Math.max(0, cantidad / total * 100))
      : 0;

    // Contenedor de cada categoría
    const fila = document.createElement("div");

    fila.className = "fila-grafico";

    // Encabezado de la barra
    const encabezado = document.createElement("div");

    encabezado.className = "encabezado-barra";

    // Nombre de la categoría
    const nombre = document.createElement("span");

    nombre.className = "etiqueta-grafico";
    nombre.textContent = dato[campo];

    // Cantidad y porcentaje
    const valor = document.createElement("span");

    valor.className = "valor-grafico";

    valor.textContent =
      `${cantidad} (${porcentaje.toFixed(1)}%)`;

    encabezado.appendChild(nombre);
    encabezado.appendChild(valor);

    // Fondo del gráfico
    const fondo = document.createElement("div");

    fondo.className = "barra-fondo";

    fondo.setAttribute("role", "progressbar");
    fondo.setAttribute("aria-label", String(dato[campo]));
    fondo.setAttribute("aria-valuemin", "0");
    fondo.setAttribute("aria-valuemax", "100");
    fondo.setAttribute(
      "aria-valuenow",
      porcentaje.toFixed(1)
    );

    // Barra visual
    const barra = document.createElement("div");

    barra.className = "barra-relleno";
    barra.style.width = `${porcentaje}%`;

    fondo.appendChild(barra);

    // Agregar elementos al gráfico
    fila.appendChild(encabezado);
    fila.appendChild(fondo);

    contenedor.appendChild(fila);

  });
}

// ========================================
// GET: CONSULTAR REPORTES
// ========================================

async function cargarReportes() {

  botonActualizarReportes.disabled = true;

  mostrarMensajeReportes("Actualizando estadísticas...");

  try {

    // Consultar el endpoint de reportes
    const respuesta = await fetch(API_REPORTES, {
      cache: "no-store"
    });

    if (!respuesta.ok) {
      throw new Error(
        "No se pudieron consultar los reportes."
      );
    }

    const reportes = await respuesta.json();

    const total = Number(
      reportes.totalParticipantes
    ) || 0;

    // Mostrar el total de inscripciones
    totalParticipantes.textContent = total;

    // Gráfico 1: participantes por taller
    crearGrafico(
      graficoTaller,
      reportes.participantesPorTaller,
      "taller",
      total
    );

    // Gráfico 2: participantes por modalidad
    crearGrafico(
      graficoModalidad,
      reportes.participantesPorModalidad,
      "modalidad",
      total
    );

    // Gráfico 3: participantes por experiencia
    crearGrafico(
      graficoNivel,
      reportes.participantesPorNivel,
      "nivel_experiencia",
      total
    );

    mostrarMensajeReportes(
      "Estadísticas actualizadas correctamente."
    );

  } catch (error) {

    console.error("Error al cargar reportes:", error);

    mostrarMensajeReportes(error.message, true);

  } finally {

    botonActualizarReportes.disabled = false;
  }
}

// ========================================
// BOTÓN ACTUALIZAR REPORTES
// ========================================

botonActualizarReportes.addEventListener("click", () => {
  cargarReportes();
});

// ========================================
// EVENTO INPUT
// ========================================

campoNombre.addEventListener("input", () => {
  console.log("Escribiendo nombre:", campoNombre.value);
});

// ========================================
// CARGAR INFORMACIÓN AL INICIAR
// ========================================

cargarInscripciones();
cargarReportes();
