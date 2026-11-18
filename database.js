
const { DatabaseSync } = require("node:sqlite");

// Crear o abrir la base de datos
const db = new DatabaseSync("registro_taller.db");

// Crear la tabla de inscripciones
db.exec(`
  CREATE TABLE IF NOT EXISTS inscripciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL,
    telefono TEXT NOT NULL,
    taller TEXT NOT NULL,
    horario TEXT NOT NULL,
    modalidad TEXT NOT NULL,
    nivel_experiencia TEXT NOT NULL,
    fecha_registro TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

// Exportar la conexión
module.exports = db;
