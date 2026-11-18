
/* PROYECTO FINAL: REGISTRO AL TALLER */
/* DOM + FETCH + API REST + SQLITE */

// Elementos HTML
const formulario = document.querySelector("#formulario-registro");
const lista = document.querySelector("#lista-inscripciones");
const mensaje = document.querySelector("#mensaje");
const campoNombre = document.querySelector("#nombre");
const botonRegistrar = formulario.querySelector('button[type="submit"]');

const API_URL = "/api/inscripciones";

// Identificador del participante que se está editando
let idEnEdicion = null;

// Botón para cancelar la edición
const botonCancelar = document.createElement("button");
botonCancelar.type = "button";
botonCancelar.textContent = "Cancelar edición";
botonCancelar.style.display = "none";
formulario.appendChild(botonCancelar);

// Mostrar mensajes
function mostrarMensaje(texto, esError = false) {
  mensaje.textContent = texto;
  mensaje.style.color = esError ? "#b91c1c" : "#06656b";
}

// Obtener los datos del formulario
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

// Cancelar edición
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

// Cargar inscripciones desde SQLite
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

      // Mostrar información del participante
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

// EDITAR: cargar los datos en el formulario
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

// ELIMINAR: borrar participante mediante DELETE
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

    if (idEnEdicion === id) {
      cancelarEdicion();
    }

    mostrarMensaje(resultado.mensaje);
    await cargarInscripciones();

  } catch (error) {
    console.error("Error al eliminar:", error);
    mostrarMensaje(error.message, true);
  }
}

// REGISTRAR O ACTUALIZAR: POST y PUT
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
    editando ? "Actualizando inscripción..." :
    "Guardando inscripción..."
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

    // Regresar al modo de registro
    cancelarEdicion();

    mostrarMensaje(resultado.mensaje);

    // Actualizar la lista
    await cargarInscripciones();

  } catch (error) {
    console.error("Error al guardar:", error);
    mostrarMensaje(error.message, true);

  } finally {
    botonRegistrar.disabled = false;
    botonCancelar.disabled = false;
  }
});

// Evento input
campoNombre.addEventListener("input", () => {
  console.log("Escribiendo nombre:", campoNombre.value);
});

// Cargar los registros al abrir la página
cargarInscripciones();
