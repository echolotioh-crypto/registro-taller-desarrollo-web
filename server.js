
/* ACTIVIDAD 12: API CON EXPRESS */

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Almacenamiento temporal de inscripciones
const inscripciones = [];
let siguienteId = 1;

// Configuración del servidor
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// GET: Consultar todas las inscripciones
app.get("/api/inscripciones", (req, res) => {
  res.status(200).json(inscripciones);
});

// POST: Registrar un nuevo participante
app.post("/api/inscripciones", (req, res) => {

  // Obtener datos del formulario
  const cuerpo = req.body || {};

  const texto = (valor) =>
    typeof valor === "string" ? valor.trim() : "";

  const nombre = texto(cuerpo.nombre);
  const correo = texto(cuerpo.correo);
  const telefono = texto(cuerpo.telefono);
  const taller = texto(cuerpo.taller);
  const horario = texto(cuerpo.horario);

  // Validar campos obligatorios
  if (!nombre || !correo || !telefono ||
      !taller || !horario) {

    return res.status(400).json({
      error: "Todos los campos son obligatorios."
    });
  }

  // Validar formato del correo
  const correoValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!correoValido.test(correo)) {
    return res.status(400).json({
      error: "El correo electrónico no es válido."
    });
  }

  // Crear el registro
  const nuevoRegistro = {
    id: siguienteId++,
    nombre,
    correo,
    telefono,
    taller,
    horario
  };

  // Guardar temporalmente
  inscripciones.push(nuevoRegistro);

  // Respuesta exitosa
  res.status(201).json({
    mensaje: "Inscripción guardada correctamente.",
    inscripcion: nuevoRegistro
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(
    `Servidor disponible en http://localhost:${PORT}`
  );
});
