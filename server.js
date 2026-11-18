
/* PROYECTO FINAL: REGISTRO DE PARTICIPANTES */
/* Node.js + Express + SQLite */
/* API REST: GET, POST, PUT y DELETE */

const express = require("express");
const db = require("./database");
const path = require("path");

const app = express();
const PORT = 3000;

// Configuración del servidor
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Limpiar los datos recibidos
function limpiarTexto(valor) {
  return typeof valor === "string" ? valor.trim() : "";
}

// Obtener los siete campos del formulario
function obtenerDatos(cuerpo = {}) {
  return {
    nombre: limpiarTexto(cuerpo.nombre),
    correo: limpiarTexto(cuerpo.correo),
    telefono: limpiarTexto(cuerpo.telefono),
    taller: limpiarTexto(cuerpo.taller),
    horario: limpiarTexto(cuerpo.horario),
    modalidad: limpiarTexto(cuerpo.modalidad),
    nivel_experiencia: limpiarTexto(cuerpo.nivel_experiencia)
  };
}

// Validar los datos de una inscripción
function validarDatos(datos) {

  // Verificar campos obligatorios
  if (Object.values(datos).some(valor => !valor)) {
    return "Todos los campos son obligatorios.";
  }

  // Validar el correo electrónico
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!correoValido.test(datos.correo)) {
    return "El correo electrónico no es válido.";
  }

  // Validar teléfono
  if (datos.telefono.length < 8 ||
      datos.telefono.length > 15) {
    return "El teléfono debe tener entre 8 y 15 caracteres.";
  }

  // Validar nombre
  if (datos.nombre.length < 2 ||
      datos.nombre.length > 100) {
    return "El nombre debe tener entre 2 y 100 caracteres.";
  }

  return null;
}

// Validar el ID recibido en la URL
function validarId(valor) {
  const id = Number(valor);

  if (!Number.isSafeInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

// ========================================
// GET: CONSULTAR TODOS LOS PARTICIPANTES
// ========================================

app.get("/api/inscripciones", (req, res) => {
  try {
    const inscripciones = db.prepare(`
      SELECT * FROM inscripciones
      ORDER BY id ASC
    `).all();

    res.status(200).json(inscripciones);

  } catch (error) {
    console.error("Error al consultar:", error);

    res.status(500).json({
      error: "No se pudieron consultar las inscripciones."
    });
  }
});

// ========================================
// POST: REGISTRAR UN PARTICIPANTE
// ========================================

app.post("/api/inscripciones", (req, res) => {
  try {

    // Obtener los datos del formulario
    const datos = obtenerDatos(req.body || {});

    // Validar la información
    const error = validarDatos(datos);

    if (error) {
      return res.status(400).json({ error });
    }

    // Insertar los datos en SQLite
    const consulta = db.prepare(`
      INSERT INTO inscripciones (
        nombre,
        correo,
        telefono,
        taller,
        horario,
        modalidad,
        nivel_experiencia
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const resultado = consulta.run(
      datos.nombre,
      datos.correo,
      datos.telefono,
      datos.taller,
      datos.horario,
      datos.modalidad,
      datos.nivel_experiencia
    );

    // Obtener el participante registrado
    const nuevoRegistro = db.prepare(`
      SELECT * FROM inscripciones
      WHERE id = ?
    `).get(resultado.lastInsertRowid);

    res.status(201).json({
      mensaje: "Inscripción guardada correctamente.",
      inscripcion: nuevoRegistro
    });

  } catch (error) {
    console.error("Error al registrar:", error);

    res.status(500).json({
      error: "No se pudo guardar la inscripción."
    });
  }
});

// ========================================
// PUT: EDITAR UN PARTICIPANTE
// ========================================

app.put("/api/inscripciones/:id", (req, res) => {
  try {

    // Obtener y validar el ID
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "El ID no es válido."
      });
    }

    // Buscar el participante
    const existente = db.prepare(`
      SELECT * FROM inscripciones
      WHERE id = ?
    `).get(id);

    if (!existente) {
      return res.status(404).json({
        error: "El participante no existe."
      });
    }

    // Obtener los nuevos datos
    const datos = obtenerDatos(req.body || {});

    // Validar los nuevos datos
    const error = validarDatos(datos);

    if (error) {
      return res.status(400).json({ error });
    }

    // Actualizar la información en SQLite
    db.prepare(`
      UPDATE inscripciones
      SET
        nombre = ?,
        correo = ?,
        telefono = ?,
        taller = ?,
        horario = ?,
        modalidad = ?,
        nivel_experiencia = ?
      WHERE id = ?
    `).run(
      datos.nombre,
      datos.correo,
      datos.telefono,
      datos.taller,
      datos.horario,
      datos.modalidad,
      datos.nivel_experiencia,
      id
    );

    // Consultar el registro actualizado
    const registroActualizado = db.prepare(`
      SELECT * FROM inscripciones
      WHERE id = ?
    `).get(id);

    res.status(200).json({
      mensaje: "Inscripción actualizada correctamente.",
      inscripcion: registroActualizado
    });

  } catch (error) {
    console.error("Error al actualizar:", error);

    res.status(500).json({
      error: "No se pudo actualizar la inscripción."
    });
  }
});

// ========================================
// DELETE: ELIMINAR UN PARTICIPANTE
// ========================================

app.delete("/api/inscripciones/:id", (req, res) => {
  try {

    // Obtener y validar el ID
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "El ID no es válido."
      });
    }

    // Eliminar el participante de SQLite
    const resultado = db.prepare(`
      DELETE FROM inscripciones
      WHERE id = ?
    `).run(id);

    // Verificar si existía
    if (resultado.changes === 0) {
      return res.status(404).json({
        error: "El participante no existe."
      });
    }

    res.status(200).json({
      mensaje: "Inscripción eliminada correctamente.",
      id: id
    });

  } catch (error) {
    console.error("Error al eliminar:", error);

    res.status(500).json({
      error: "No se pudo eliminar la inscripción."
    });
  }
});

// ========================================
// INICIAR EL SERVIDOR
// ========================================

app.listen(PORT, () => {
  console.log(
    `Servidor disponible en http://localhost:${PORT}`
  );
});
