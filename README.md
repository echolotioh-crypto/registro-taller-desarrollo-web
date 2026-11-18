# Proyecto: Registro de participantes para un taller — versión base

Esta es la carpeta inicial para completar durante el repaso interactivo de Desarrollo Web. Busca cada comentario `TODO` y sigue las instrucciones del paso 19, “Proyecto final”, en `Repaso_Interactivo_Desarrollo_Web.html`.

## Requisitos
- Node.js 18 o superior (se recomienda LTS) y Visual Studio Code.
- Conexión a internet la primera vez para instalar Express.

## Ejecutar en VS Code
1. Abre esta carpeta con **File → Open Folder**.
2. Abre **Terminal → New Terminal**.
3. Ejecuta `npm install`.
4. Ejecuta `npm start`.
5. Abre `http://localhost:3000`.

### Si PowerShell bloquea npm.ps1
Si aparece un mensaje que dice que la ejecución de scripts está deshabilitada, usa estos comandos en la misma terminal:

```powershell
npm.cmd install
npm.cmd start
```

También puedes cambiar el perfil de la terminal de VS Code a **Command Prompt** y usar los comandos `npm install` y `npm start`.

El servidor y la ruta GET ya están preparados. Completa los TODO de HTML, CSS, JavaScript y la ruta POST. Los registros se guardan temporalmente en memoria y se borran al detener Node.

## API solicitada
- `GET /api/inscripciones`: devuelve el arreglo de registros en JSON.
- `POST /api/inscripciones`: recibe nombre, correo, teléfono, taller y horario; valida y crea una inscripción. Usa estado `201` al crear y `400` si los datos no son válidos.

## Entrega en GitHub
Sube el código fuente, `README.md` y `bitacora.md`. Completa al menos tres commits descriptivos y comparte el enlace del repositorio. No subas `node_modules/` ni archivos `.env`; ya están excluidos en `.gitignore`.


## Sistema de Registro al Taller de Desarrollo Web

### Descripción del proyecto

Aplicación web desarrollada para registrar y administrar
participantes de talleres universitarios.

El sistema permite realizar operaciones CRUD y almacenar
la información permanentemente mediante SQLite.

### Tecnologías utilizadas

- HTML5: estructura de la página.
- CSS3: diseño y adaptación a dispositivos móviles.
- JavaScript: interacción con el usuario.
- Node.js: ejecución del servidor.
- Express: desarrollo de la API REST.
- SQLite: almacenamiento de datos.
- Git y GitHub: control de versiones.

### Funcionalidades

1. Registrar nuevos participantes.
2. Consultar participantes inscritos.
3. Modificar información existente.
4. Eliminar inscripciones.
5. Validar campos obligatorios y correo electrónico.
6. Guardar datos permanentemente.
7. Actualizar la lista sin recargar la página.

### Información registrada

Cada inscripción contiene:

- ID del participante.
- Nombre completo.
- Correo electrónico.
- Número de teléfono.
- Taller seleccionado.
- Horario del taller.
- Modalidad.
- Nivel de experiencia.
- Fecha de registro.

### Instalación del proyecto

1. Descargar o clonar el repositorio de GitHub.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal.
4. Instalar las dependencias:

    npm install

5. Iniciar el servidor:

    npm start

6. Abrir en el navegador:

    http://localhost:3000

La base de datos SQLite se inicializa desde database.js.

### Rutas de la API REST

GET /api/inscripciones
Consulta todos los participantes.

POST /api/inscripciones
Registra un nuevo participante.

PUT /api/inscripciones/:id
Actualiza los datos de un participante.

DELETE /api/inscripciones/:id
Elimina una inscripción.

### Estados HTTP

- 200: Solicitud realizada correctamente.
- 201: Participante registrado.
- 400: Datos incorrectos o incompletos.
- 404: Participante no encontrado.
- 500: Error interno del servidor.

### Pruebas realizadas

Se comprobó el funcionamiento de:

- Registro de nuevos participantes.
- Consulta de información almacenada.
- Actualización de datos.
- Eliminación de registros.
- Persistencia de datos al reiniciar el servidor.
- Visualización de la lista de participantes.

### Repositorio de GitHub

https://github.com/echolotioh-crypto/registro-taller-desarrollo-web

### Conclusión

Este proyecto permitió integrar conocimientos de HTML,
CSS, JavaScript, Node.js, Express y SQLite.

Se desarrolló una aplicación funcional capaz de
administrar inscripciones y almacenar los datos en
una base de datos local.

También se aplicaron conocimientos sobre API REST,
operaciones CRUD, validaciones y control de versiones.

