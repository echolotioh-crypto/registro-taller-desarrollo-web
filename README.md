
# Sistema de Registro al Taller de Desarrollo Web

## 1. Descripción del proyecto

El Sistema de Registro al Taller es una aplicación web desarrollada como proyecto académico de la asignatura Desarrollo Web.

Su objetivo es facilitar el registro, consulta, actualización y eliminación de participantes inscritos en talleres de formación tecnológica.

La aplicación utiliza una arquitectura cliente-servidor y una API REST desarrollada con Node.js y Express. La información se almacena en una base de datos SQLite, lo que permite conservar los registros después de cerrar y reiniciar el servidor.

Además, el sistema incorpora un módulo de reportes y estadísticas que permite visualizar la cantidad de participantes inscritos y su distribución según el taller, la modalidad y el nivel de experiencia.

## 2. Objetivos

### Objetivo general

Desarrollar una aplicación web que permita administrar las inscripciones de participantes a talleres mediante operaciones CRUD, utilizando tecnologías de desarrollo web y almacenamiento persistente en una base de datos.

### Objetivos específicos

- Diseñar un formulario para registrar los datos de los participantes.
- Implementar validaciones para garantizar el ingreso de información.
- Desarrollar una API REST utilizando Node.js y Express.
- Almacenar las inscripciones en una base de datos SQLite.
- Implementar operaciones de consulta, registro, actualización y eliminación.
- Generar reportes estadísticos a partir de los registros almacenados.
- Diseñar una interfaz adaptable a diferentes tamaños de pantalla.
- Documentar el desarrollo y las pruebas realizadas.
- Utilizar Git y GitHub para el control de versiones.

## 3. Tecnologías utilizadas

| Tecnología | Función |
|------------|---------|
| HTML5 | Estructura de la aplicación web y formularios |
| CSS3 | Diseño visual y adaptación a dispositivos móviles |
| JavaScript | Interacción con el usuario y manipulación del DOM |
| Fetch API | Comunicación entre el navegador y la API REST |
| Node.js | Entorno de ejecución del servidor |
| Express | Desarrollo de rutas y servicios HTTP |
| SQLite | Almacenamiento persistente de inscripciones |
| SQL | Consultas, inserciones, actualizaciones y eliminaciones |
| Visual Studio Code | Edición y desarrollo del código fuente |
| Git | Control de versiones del proyecto |
| GitHub | Publicación y respaldo del código fuente |

La implementación utiliza el módulo `node:sqlite` de Node.js para administrar la base de datos.

## 4. Arquitectura del sistema

El proyecto utiliza una arquitectura cliente-servidor.

El navegador ejecuta la interfaz desarrollada con HTML, CSS y JavaScript.

JavaScript utiliza Fetch API para enviar solicitudes HTTP al servidor Express.

El servidor recibe las solicitudes, valida los datos y ejecuta las operaciones correspondientes en SQLite.

La información se devuelve al navegador en formato JSON.

### Flujo de funcionamiento

1. El usuario ingresa sus datos en el formulario.
2. JavaScript obtiene la información y realiza las validaciones del navegador.
3. Fetch API envía una solicitud HTTP al servidor.
4. Express procesa la solicitud y valida los datos recibidos.
5. SQLite almacena, consulta, actualiza o elimina los registros.
6. El servidor devuelve una respuesta JSON.
7. La interfaz muestra el resultado y actualiza la lista de participantes.
8. El módulo de reportes consulta las estadísticas y actualiza los gráficos.

## 5. Funcionalidades del sistema

### 5.1. Registro de participantes

Permite ingresar los datos de una persona interesada en participar en un taller.

El formulario contiene siete campos obligatorios:

1. Nombre completo.
2. Correo electrónico.
3. Taller.
4. Número de teléfono.
5. Horario.
6. Modalidad.
7. Nivel de experiencia.

Al completar el formulario correctamente, la información se almacena en SQLite.

### 5.2. Consulta de participantes

Permite mostrar los participantes registrados en el sistema.

Cada registro presenta la información ingresada y dispone de botones para editar o eliminar la inscripción.

### 5.3. Edición de participantes

Permite seleccionar un participante existente y cargar sus datos en el formulario.

El usuario puede modificar la información y guardar los cambios sin crear un registro adicional.

### 5.4. Eliminación de participantes

Permite eliminar una inscripción existente.

Antes de realizar la eliminación, el sistema solicita confirmación al usuario.

### 5.5. Validación de datos

El sistema realiza validaciones básicas, entre ellas:

- Verificación de campos obligatorios.
- Validación del formato del correo electrónico.
- Longitud del nombre entre 2 y 100 caracteres.
- Longitud del teléfono entre 8 y 15 caracteres.
- Validación del identificador del participante.
- Comprobación de la existencia del registro antes de modificarlo.

### 5.6. Persistencia de información

Los participantes se almacenan en una base de datos SQLite local.

Esto permite conservar los registros después de detener y volver a iniciar el servidor.

### 5.7. Reportes y estadísticas

El módulo de reportes presenta:

- Total de participantes inscritos.
- Cantidad de participantes por taller.
- Cantidad de participantes por modalidad.
- Cantidad de participantes por nivel de experiencia.
- Porcentajes de participación mediante gráficos de barras.

Las estadísticas se actualizan al registrar, editar o eliminar una inscripción.

También existe un botón denominado "Actualizar reportes", que permite consultar nuevamente la información.

## 6. Estructura del proyecto

```text
registro-taller-estudiante/
|
|-- public/
|   |-- index.html
|   |-- styles.css
|   `-- app.js
|
|-- evidencias/
|   |-- 01_formulario_superior.png
|   |-- 02_formulario_central.png
|   |-- 03_formulario_inferior.png
|   |-- 04_registro_exitoso.png
|   |-- 05_lista_participantes.png
|   |-- 06_edicion_formulario.png
|   |-- 07_edicion_exitosa.png
|   |-- 08_confirmacion_eliminar.png
|   |-- 09_eliminacion_exitosa.png
|   |-- 10_api_get.png
|   |-- 11_base_datos_sqlite.png
|   |-- 12_repositorio_github.png
|   |-- 13_api_reportes.png
|   |-- 14_reportes_actualizados.png
|   |-- 15_reportes_despues_editar.png
|   `-- 16_reportes_despues_eliminar.png
|
|-- database.js
|-- server.js
|-- package.json
|-- package-lock.json
|-- README.md
|-- bitacora.md
`-- .gitignore
```

El archivo `registro_taller.db` se crea localmente al inicializar SQLite y no se publica en GitHub.

La carpeta `node_modules` tampoco se incluye en el repositorio, porque las dependencias se instalan mediante npm.

## 7. Base de datos SQLite

La base de datos del proyecto se denomina:

`registro_taller.db`

Contiene la tabla principal:

`inscripciones`

### Campos de la tabla

| Campo | Tipo de dato | Descripción |
|-------|-------------|-------------|
| id | INTEGER | Identificador único y clave primaria |
| nombre | TEXT | Nombre completo del participante |
| correo | TEXT | Correo electrónico |
| telefono | TEXT | Número de teléfono |
| taller | TEXT | Taller seleccionado |
| horario | TEXT | Horario de participación |
| modalidad | TEXT | Modalidad del taller |
| nivel_experiencia | TEXT | Nivel de conocimiento |
| fecha_registro | TEXT | Fecha de creación del registro |

El campo `id` se genera automáticamente.

La tabla se inicializa desde el archivo `database.js`.

## 8. API REST

La aplicación utiliza los siguientes endpoints:

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| GET | /api/inscripciones | Consultar participantes |
| POST | /api/inscripciones | Registrar participante |
| PUT | /api/inscripciones/:id | Actualizar participante |
| DELETE | /api/inscripciones/:id | Eliminar participante |
| GET | /api/reportes | Consultar estadísticas |

### Ejemplo de registro mediante POST

Endpoint:

`POST /api/inscripciones`

Cuerpo de la solicitud:

```json
{
  "nombre": "Ana López",
  "correo": "ana@example.com",
  "telefono": "12345670",
  "taller": "JavaScript",
  "horario": "Vespertino",
  "modalidad": "Presencial",
  "nivel_experiencia": "Intermedio"
}
```

Cuando el registro se realiza correctamente, la API devuelve el estado HTTP 201, un mensaje de confirmación y los datos de la inscripción creada.

### Consulta de reportes

Endpoint:

`GET /api/reportes`

Ejemplo de respuesta:

```json
{
  "totalParticipantes": 1,
  "participantesPorTaller": [
    {
      "taller": "JavaScript",
      "cantidad": 1
    }
  ],
  "participantesPorModalidad": [
    {
      "modalidad": "Presencial",
      "cantidad": 1
    }
  ],
  "participantesPorNivel": [
    {
      "nivel_experiencia": "Intermedio",
      "cantidad": 1
    }
  ]
}
```

Los resultados cambian automáticamente según los registros almacenados.

### Estados HTTP utilizados

| Código | Significado |
|--------|-------------|
| 200 | Solicitud procesada correctamente |
| 201 | Registro creado correctamente |
| 400 | Datos incorrectos o incompletos |
| 404 | Registro no encontrado |
| 500 | Error interno del servidor |

## 9. Requisitos para ejecutar el proyecto

Se necesita:

- Node.js compatible con el módulo `node:sqlite`; se recomienda Node.js 24 o superior.
- npm.
- Visual Studio Code u otro editor de código.
- Un navegador web.
- Conexión a internet para instalar las dependencias inicialmente.

No es necesario instalar un servidor de base de datos independiente, ya que SQLite utiliza un archivo local.

## 10. Instalación y ejecución

### Paso 1. Descargar el proyecto

Clonar el repositorio mediante Git:

```bash
git clone https://github.com/echolotioh-crypto/registro-taller-desarrollo-web.git
```

### Paso 2. Abrir el proyecto

Entrar a la carpeta:

```bash
cd registro-taller-desarrollo-web
```

Abrirla en Visual Studio Code.

### Paso 3. Instalar las dependencias

Ejecutar:

```bash
npm install
```

### Paso 4. Iniciar el servidor

Ejecutar:

```bash
npm start
```

Si PowerShell de Windows bloquea `npm.ps1`, utilizar:

```powershell
npm.cmd install
npm.cmd start
```

### Paso 5. Abrir la aplicación

Ingresar desde el navegador a:

http://localhost:3000

### Paso 6. Consultar la API

Para consultar los registros:

http://localhost:3000/api/inscripciones

Para consultar las estadísticas:

http://localhost:3000/api/reportes

### Nota importante

La aplicación se ejecuta localmente. El repositorio de GitHub almacena el código y las evidencias, pero no constituye un servidor público donde se pueda utilizar directamente el formulario.

Al iniciar el proyecto en otra computadora, SQLite puede crear una base de datos nueva sin los registros de prueba originales.

## 11. Pruebas realizadas

Se realizaron pruebas funcionales para verificar el comportamiento del sistema.

| Prueba | Resultado |
|--------|-----------|
| Visualización del formulario | Correcto |
| Registro de participantes | Correcto |
| Validación de campos | Implementada |
| Consulta de participantes | Correcto |
| Edición de registros | Correcto |
| Eliminación de registros | Correcto |
| Persistencia en SQLite | Correcto |
| Consulta de API GET | Correcto |
| Consulta de API de reportes | Correcto |
| Actualización después de registrar | Correcto |
| Actualización después de editar | Correcto |
| Actualización después de eliminar | Correcto |

### Prueba de reportes al registrar

Inicialmente se contaba con un participante registrado.

Se agregó una segunda inscripción y se verificó que el total aumentara de 1 a 2.

Los gráficos mostraron correctamente la distribución de participantes por taller, modalidad y nivel de experiencia.

### Prueba de reportes al editar

Se modificaron la modalidad y el nivel de experiencia de un participante.

El total permaneció en 2, mientras que los gráficos reflejaron las nuevas categorías.

### Prueba de reportes al eliminar

Se eliminó el participante utilizado para la prueba.

El total disminuyó de 2 a 1 y los gráficos regresaron a la distribución correspondiente al registro restante.

## 12. Evidencias del funcionamiento

Las capturas de pantalla se encuentran organizadas en la carpeta:

[evidencias/](evidencias/)

Se incluyen 16 imágenes que documentan:

1. Parte superior del formulario.
2. Parte central del formulario.
3. Parte inferior del formulario.
4. Registro exitoso.
5. Lista de participantes.
6. Formulario de edición.
7. Edición exitosa.
8. Confirmación de eliminación.
9. Eliminación exitosa.
10. Consulta GET en formato JSON.
11. Código y estructura de SQLite.
12. Repositorio de GitHub.
13. API de reportes.
14. Reportes después de registrar.
15. Reportes después de editar.
16. Reportes después de eliminar.

## 13. Diseño responsive

La aplicación utiliza CSS3, Flexbox, Grid y consultas de medios para adaptarse a diferentes tamaños de pantalla.

El formulario, la lista y los reportes se organizan de acuerdo con el espacio disponible.

En pantallas pequeñas, las tarjetas de estadísticas se muestran en una sola columna para facilitar la lectura.

## 14. Control de versiones

Se utilizó Git para registrar los cambios realizados durante el desarrollo.

GitHub permitió almacenar el código fuente, mantener el historial de commits y publicar las evidencias de las pruebas.

El archivo `.gitignore` excluye los elementos que no deben publicarse, como las dependencias instaladas, los archivos de configuración privados y la base de datos local.

## 15. Repositorio de GitHub

El código fuente y las evidencias están disponibles en:

https://github.com/echolotioh-crypto/registro-taller-desarrollo-web

## 16. Conclusión

El desarrollo del Sistema de Registro al Taller permitió integrar conocimientos de HTML, CSS, JavaScript, Node.js, Express, SQL y SQLite en una aplicación web funcional.

Se implementaron operaciones CRUD que permiten registrar, consultar, editar y eliminar participantes, con almacenamiento persistente y validación básica de datos.

Además, se desarrolló un módulo de reportes que utiliza consultas SQL y una API REST para presentar estadísticas mediante gráficos de barras.

Las pruebas realizadas demostraron el funcionamiento de las operaciones principales y la actualización de los reportes después de modificar la información.

Finalmente, el uso de Git y GitHub permitió documentar el proceso de desarrollo, mantener un historial de cambios y organizar las evidencias del proyecto.
