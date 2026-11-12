# Bitácora de repaso de Desarrollo Web

## Actividad 03 – Flujo web

**Resumen propio (2–3 frases):**

Cuando una persona llena un formulario, HTML muestra los campos, CSS les da estilo y JavaScript permite enviar la información. El servidor recibe los datos mediante Express, los valida y devuelve una respuesta. La información puede almacenarse en una base de datos.

**Dos términos clave y su explicación:**
- **Frontend:** Es la parte de la aplicación que el usuario ve y utiliza en el navegador.
- **Backend:** Es la parte que funciona en el servidor y se encarga de procesar solicitudes y datos.

**Ejemplo explicado:**

Ana llena un formulario de inscripción y presiona Registrar. JavaScript utiliza `fetch()` para enviar los datos, Express recibe la solicitud y verifica la información. En el proyecto inicial, los datos se guardan temporalmente en memoria.

**Respuestas de la actividad:**
1. ¿Qué presenta los campos? HTML.
2. ¿Qué evita que el navegador recargue la página? JavaScript mediante `preventDefault()`.
3. ¿Qué componente recibe el JSON? Express.
4. ¿Qué parte puede guardar el registro? El servidor, utilizando una base de datos.

**Pregunta que podría aparecer en el examen:**

¿Por qué es importante validar los datos en el servidor?

**Respuesta:** Porque los datos enviados desde el navegador pueden ser modificados y es necesario comprobar que sean correctos antes de guardarlos.

---

## HTML

**Resumen propio (2–3 frases):**

HTML es el lenguaje que utilizamos para crear la estructura de una página web. Permite agregar títulos, párrafos, imágenes, botones y formularios. También ayuda a organizar el contenido para que sea fácil de entender.

**Dos términos clave y su explicación:**
- **Etiqueta:** Es un elemento que permite definir el contenido de una página, como `<h1>`, `<p>` o `<form>`.
- **Formulario:** Es una estructura que permite solicitar información al usuario mediante campos y botones.

**Ejemplo de código explicado:**

`<input type="text" name="nombre" required>`

Este código crea un campo para escribir el nombre del participante. El atributo `required` indica que debe completarse antes de enviar el formulario.

**Pregunta que podría aparecer en el examen:**

¿Para qué sirve HTML?

**Respuesta:** Para crear y organizar la estructura y el contenido de una página web.

---

## CSS

**Resumen propio (2–3 frases):**

CSS se utiliza para mejorar la apariencia de una página web. Permite cambiar colores, tamaños, espacios, bordes y la distribución de los elementos. También ayuda a adaptar las páginas a diferentes tamaños de pantalla.

**Dos términos clave y su explicación:**
- **Selector:** Permite indicar a qué elemento HTML se aplicará un estilo.
- **Responsive:** Es una técnica de diseño que permite adaptar una página a computadoras, tabletas y teléfonos.

**Ejemplo de código explicado:**

`.tarjeta { padding: 1rem; border-radius: 12px; }`

Este código agrega espacio interno a una tarjeta y redondea sus esquinas para mejorar su presentación.

**Pregunta que podría aparecer en el examen:**

¿Cuál es la diferencia entre HTML y CSS?

**Respuesta:** HTML crea la estructura de la página y CSS se encarga de su diseño y apariencia.

---

## JavaScript y DOM

**Resumen propio (2–3 frases):**

JavaScript permite agregar funciones e interactividad a una página web. Se utiliza para validar formularios, realizar cálculos y responder a las acciones del usuario. Con el DOM podemos acceder a los elementos HTML y modificar su contenido.

**Dos términos clave y su explicación:**
- **JavaScript:** Es un lenguaje de programación que permite ejecutar instrucciones y agregar interactividad.
- **DOM:** Es la representación de la estructura HTML que permite acceder y modificar los elementos de una página.

**Ejemplo de código explicado:**

`document.querySelector("#nombre").value;`

Este código busca el elemento que tiene el identificador `nombre` y obtiene el valor que el usuario escribió.

**Pregunta que podría aparecer en el examen:**

¿Para qué sirve el DOM en JavaScript?

**Respuesta:** Para acceder, modificar y controlar los elementos de una página web.

---

## Node.js, Express y API

**Resumen propio (2–3 frases):**

Node.js permite ejecutar JavaScript fuera del navegador, especialmente en el servidor. Express facilita la creación de aplicaciones web y rutas para recibir solicitudes. Una API permite que el navegador y el servidor intercambien información.

**Dos términos clave y su explicación:**
- **Express:** Es un framework de Node.js que facilita la creación de servidores y rutas.
- **API:** Es un mecanismo que permite la comunicación e intercambio de datos entre aplicaciones.

**Ejemplo de ruta o solicitud explicado:**

`app.get("/api/inscripciones", (req, res) => { res.json([]); });`

Este código crea una ruta GET para consultar inscripciones. Cuando el navegador solicita esa dirección, Express responde con un arreglo vacío en formato JSON.

**Pregunta que podría aparecer en el examen:**

¿Qué diferencia hay entre GET y POST?

**Respuesta:** GET se utiliza para consultar información y POST para enviar datos, por ejemplo al registrar un participante.

---

## SQL

**Resumen propio (2–3 frases):**

SQL es un lenguaje que permite trabajar con bases de datos relacionales. Se utiliza para guardar, consultar, modificar y eliminar información organizada en tablas. Es importante porque permite administrar los registros de una aplicación.

**Explica SELECT, INSERT, UPDATE y DELETE:**
- **SELECT:** Consulta información almacenada en una tabla.
- **INSERT:** Agrega nuevos registros a una tabla.
- **UPDATE:** Modifica información que ya está guardada.
- **DELETE:** Elimina registros de una tabla.

**Ejemplos de consultas:**
- `SELECT * FROM inscripciones;` — Consulta todos los registros.
- `INSERT INTO talleres (nombre) VALUES ('Desarrollo Web');` — Agrega un taller.
- `UPDATE talleres SET nombre='JavaScript' WHERE id=1;` — Modifica un taller.
- `DELETE FROM talleres WHERE id=1;` — Elimina un taller.

**¿Qué son una clave primaria y una clave foránea?**
- **Clave primaria:** Es un campo que identifica de manera única cada registro de una tabla.
- **Clave foránea:** Es un campo que permite relacionar una tabla con otra mediante una clave.

**Pregunta que podría aparecer en el examen:**

¿Cuál es la diferencia entre UPDATE y DELETE?

**Respuesta:** UPDATE modifica un registro existente, mientras que DELETE lo elimina de la base de datos.

---

## Git y GitHub

**Resumen propio (2–3 frases):**

Git es una herramienta que permite guardar y controlar las diferentes versiones de un proyecto. GitHub es una plataforma donde podemos almacenar nuestros repositorios en línea. Ambas herramientas facilitan el respaldo del código y el trabajo en equipo.

**Explica add, commit y push:**
- **git add .:** Prepara los archivos modificados para guardarlos en un commit.
- **git commit -m "mensaje":** Guarda una versión de los cambios realizados en el repositorio local.
- **git push:** Envía los commits del repositorio local al repositorio remoto de GitHub.

**Diferencia entre Git y GitHub:**

Git es el sistema de control de versiones que utilizamos en nuestra computadora. GitHub es la plataforma en línea donde podemos publicar, respaldar y compartir nuestros proyectos.

**Ejemplo de comandos:**

1. `git status` — Revisa el estado de los archivos.
2. `git add .` — Prepara los cambios.
3. `git commit -m "Actualización del proyecto"` — Registra los cambios.
4. `git push` — Sube los commits a GitHub.

**Pregunta que podría aparecer en el examen:**

¿Para qué sirve el comando git commit?

**Respuesta:** Para registrar una versión de los cambios del proyecto en el historial de Git.

---

## Conclusión general

Durante este repaso aprendí cómo se relacionan las diferentes tecnologías del desarrollo web. HTML permite crear la estructura, CSS mejora la apariencia y JavaScript agrega interactividad. Node.js y Express permiten trabajar con el servidor, SQL administra los datos y Git junto con GitHub ayudan a controlar y compartir el proyecto.

Estos conocimientos son importantes para construir una aplicación web que funcione correctamente desde el formulario hasta el almacenamiento de la información.

### Actividad 04 – HTML guiado

**Etiquetas semánticas:**
- `<header>`: Se utiliza para mostrar la cabecera de una página o sección.
- `<main>`: Contiene el contenido principal de la página.
- `<section>`: Permite organizar el contenido en secciones.
- `<form>`: Contiene los campos de un formulario.

**Atributos HTML:**
- `name`: Identifica el campo cuando se envían sus datos.
- `type`: Define el tipo de control, como texto, correo o teléfono.
- `required`: Indica que el campo es obligatorio.
- `for` e `id`: Relacionan una etiqueta con su campo correspondiente.

**Ejemplo explicado:**

`<label for="nombre">Nombre completo</label>`

`<input id="nombre" name="nombre" type="text" required>`

La etiqueta muestra el nombre del campo. El atributo `for` coincide con el `id` del input, mientras que `required` obliga a completar la información.

**Pregunta de examen:** ¿Cuál es la diferencia entre un elemento y un atributo HTML?

**Respuesta:** El elemento define una parte del contenido, como un formulario, mientras que el atributo proporciona características o información adicional al elemento.

### Actividad 05 – Práctica HTML

**Resumen:** En esta actividad completé el formulario de inscripción agregando dos campos nuevos: teléfono y horario. Utilicé etiquetas y atributos HTML para organizar la información y establecer campos obligatorios.

**Cambios realizados:**
- Agregué un campo de teléfono utilizando `type="tel"`.
- Agregué un selector de horario con dos opciones.
- Utilicé `required` para que los campos sean obligatorios.
- Verifiqué que cada `label` esté relacionado con el `id` correspondiente.

**¿Cuándo se utiliza type="email" y type="tel"?**

`type="email"` se utiliza cuando necesitamos ingresar una dirección de correo electrónico y verificar su formato.

`type="tel"` se utiliza para ingresar números de teléfono.

**Pregunta de examen:** ¿Qué atributo HTML permite establecer un campo obligatorio?

**Respuesta:** El atributo `required`.

**Conclusión:** Aprendí a agregar campos a un formulario HTML, relacionar etiquetas y aplicar validaciones básicas para mejorar el registro de participantes.

### Actividad 06 – CSS y modelo de caja

**Resumen propio:**

En esta actividad aprendí a modificar la apariencia de los elementos HTML utilizando CSS. Cambié el color del borde, aumenté el espacio interno y agregué mayor separación entre las tarjetas del formulario.

**Dos términos clave:**
- **Padding:** Es el espacio que existe entre el contenido y el borde de un elemento.
- **Margin:** Es el espacio exterior que separa un elemento de otros.

**Ejemplo de código explicado:**

```css
.panel {
  margin: 1.5rem 0;
  border: 2px solid #087e83;
  border-radius: 16px;
  padding: 2rem;
  background: white;
}
```

Esta regla selecciona los elementos con la clase `panel`. Agrega un borde verde azulado, esquinas redondeadas, espacio interior y separación exterior.

**Cambios realizados:**
1. Modifiqué el color y grosor del borde.
2. Aumenté el padding.
3. Aumenté el margin.
4. Actualicé el navegador para comprobar los cambios.

**Pregunta de examen:** ¿Cuál es la diferencia entre padding y margin?

**Respuesta:** Padding controla el espacio interno del elemento y margin controla la separación exterior.

### Actividad 07 – Responsive y Flexbox Froggy

**Resumen propio:**

En esta actividad aprendí a utilizar Flexbox para organizar elementos dentro de una página web. También conocí los media queries, que permiten adaptar el diseño según el tamaño de la pantalla. Realicé los primeros ocho niveles de Flexbox Froggy y comprobé el diseño de mi formulario.

**Dos términos clave:**

- **Flexbox:** Permite distribuir y alinear elementos dentro de un contenedor.
- **Media query:** Permite aplicar estilos CSS dependiendo de las características de la pantalla.

**Propiedades utilizadas en Flexbox Froggy:**

- `justify-content`: Permite alinear los elementos en el eje principal.
- `align-items`: Permite alinear los elementos en el eje transversal.
- `flex-direction`: Permite cambiar la dirección de los elementos.

**Ejemplo de media query:**

```css
@media (max-width: 640px) {
  .panel {
    padding: 1rem;
  }
}
```

**Explicación:** Cuando la pantalla tiene 640 píxeles de ancho o menos, el espacio interior de las tarjetas cambia a 1rem para aprovechar mejor el espacio disponible.

**Cambios realizados:**

1. Completé los primeros ocho niveles de Flexbox Froggy.
2. Modifiqué el media query de 600 px a 640 px.
3. Probé el formulario en tamaño de escritorio y celular.
4. Comprobé que los campos se adaptan al tamaño de pantalla.

**Pregunta de examen:** ¿Para qué sirve un media query en CSS?

**Respuesta:** Para aplicar diferentes estilos dependiendo del tamaño de la pantalla y lograr un diseño adaptable.

### Actividad 08 – JavaScript base

**Resumen propio:**

En esta actividad aprendí cómo JavaScript utiliza variables, funciones y condiciones para controlar un programa. Analicé un ejemplo que verifica si todavía existen cupos disponibles para inscribir participantes. También comprendí cómo funciona un contador.

**Dos términos clave:**

- **const:** Permite declarar una variable que no puede recibir una nueva asignación.
- **let:** Permite declarar una variable cuyo valor puede cambiar durante la ejecución.

**Ejemplo de código explicado:**

```javascript
const cuposMaximos = 20;
let inscritos = 0;

function hayCupo() {
  return inscritos < cuposMaximos;
}

if (hayCupo()) {
  inscritos++;
}
```

La variable `cuposMaximos` establece el límite de participantes. La función `hayCupo()` verifica si todavía hay espacio disponible. Cuando hay cupo, el contador aumenta en uno.

**Resultado del ejercicio:**

Después de ejecutar el bloque una vez, la variable `inscritos` vale 1.

**Reto de lectura:**

Si cambiamos `inscritos` a 20, la función `hayCupo()` devuelve `false` porque ya se alcanzó el límite. Por lo tanto, el contador permanece en 20.

**Ejemplos de uso:**

- Utilizaría `const` para definir el número máximo de cupos de un taller.
- Utilizaría `let` para contar los participantes que se van inscribiendo.

**Pregunta de examen:** ¿Cuál es la diferencia entre const y let?

**Respuesta:** `const` no permite reasignar una variable, mientras que `let` permite cambiar su valor.

**Conclusión:**

Aprendí a utilizar variables y condiciones para controlar la cantidad de participantes que pueden registrarse en un taller.

### Actividad 09 – DOM y eventos

**Resumen propio:**

En esta actividad aprendí a utilizar JavaScript para interactuar con los elementos de una página HTML. Utilicé eventos para detectar cuándo una persona escribe o envía un formulario. También aprendí a obtener los datos sin recargar la página.

**Dos términos clave:**

- **DOM:** Permite acceder y modificar los elementos HTML mediante JavaScript.
- **addEventListener:** Permite ejecutar una función cuando ocurre un evento, como hacer clic o enviar un formulario.

**Ejemplo de código explicado:**

```javascript
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);
  console.log(datos.get("nombre"));
});
```

Este código detecta cuando se envía el formulario, evita que se recargue la página y muestra el nombre ingresado en la consola.

**Cambios realizados:**

1. Utilicé `querySelector` para seleccionar elementos HTML.
2. Agregué un evento `submit` al formulario.
3. Utilicé `preventDefault()` para evitar la recarga.
4. Obtuve los valores con `FormData`.
5. Agregué un evento `input` para detectar cuándo se escribe el nombre.

**Pregunta de examen:** ¿Para qué sirve preventDefault()?

**Respuesta:** Para impedir la acción predeterminada del navegador, permitiendo que JavaScript procese los datos del formulario sin recargar la página.

**Conclusión:**

Aprendí a conectar un formulario HTML con JavaScript utilizando el DOM y eventos. Esto permitirá implementar posteriormente el registro de participantes mediante una API.

### Actividad 10 – Práctica JavaScript

**Resumen propio:**

En esta actividad utilicé JavaScript para crear un arreglo con tres participantes. También desarrollé una función que permite contar los registros utilizando la propiedad `length`. Finalmente mostré el resultado mediante JavaScript y HTML.

**Dos términos clave:**

- **Arreglo (Array):** Permite almacenar varios valores en una sola variable.
- **Función:** Es un bloque de código que realiza una tarea específica y puede devolver un resultado.

**Ejemplo de código explicado:**

```javascript
const inscripciones = ["Ana", "Carlos", "María"];

function contarInscripciones() {
  return inscripciones.length;
}
```

La función utiliza `length` para conocer cuántos elementos contiene el arreglo y devuelve la cantidad.

**Resultado obtenido:**

El programa muestra un total de 3 inscripciones.

**Pregunta de examen:** ¿Para qué sirve la propiedad length en un arreglo?

**Respuesta:** Para conocer la cantidad de elementos que contiene un arreglo.

**Conclusión:**

Aprendí a utilizar arreglos y funciones para almacenar y contar datos. Estos conocimientos pueden aplicarse al registro de participantes de un taller.

### Actividad 11 – Node.js y Visual Studio Code

**Resumen propio:**

En esta actividad aprendí cómo preparar y ejecutar un proyecto web utilizando Node.js y Visual Studio Code. Utilicé npm para instalar las dependencias y ejecutar el servidor. También comprobé que el formulario se puede abrir desde el navegador utilizando localhost.

**Dos términos clave:**

- **Node.js:** Permite ejecutar JavaScript fuera del navegador, por ejemplo, en un servidor.
- **npm:** Es el administrador de paquetes que permite instalar las dependencias necesarias para un proyecto de Node.js.

**¿Qué diferencia hay entre Node.js, npm y Visual Studio Code?**

- **Node.js:** Ejecuta el código JavaScript del servidor.
- **npm:** Instala y administra los paquetes necesarios para el proyecto.
- **Visual Studio Code:** Es el editor que utilizo para escribir, modificar y organizar el código.

**¿Por qué aparece node_modules después de instalar?**

La carpeta `node_modules` aparece después de ejecutar `npm install` porque contiene las dependencias instaladas que necesita el proyecto para funcionar.

**¿Por qué no debe subirse node_modules a GitHub?**

Porque puede contener muchos archivos y ocupar bastante espacio. No es necesario subirla, ya que las dependencias pueden instalarse nuevamente utilizando `npm install` y los archivos de configuración del proyecto.

**Comandos utilizados:**

- `node -v`: Consulta la versión instalada de Node.js.
- `npm.cmd -v`: Consulta la versión de npm.
- `npm.cmd install`: Instala las dependencias del proyecto.
- `npm.cmd start`: Inicia el servidor.
- `Ctrl + C`: Detiene el servidor desde la terminal.

**Resultado obtenido:**

Se instalaron correctamente 65 paquetes y npm reportó cero vulnerabilidades. El proyecto pudo ejecutarse y mostrar el formulario de registro de participantes en localhost:3000.

**Pregunta de examen:** ¿Cuál es la diferencia entre npm install y npm start?

**Respuesta:** `npm install` instala las dependencias del proyecto, mientras que `npm start` ejecuta el comando de inicio configurado en package.json.

**Conclusión:**

Aprendí a utilizar Node.js, npm y Visual Studio Code para preparar y ejecutar una aplicación web. También comprendí la importancia de administrar las dependencias y no subir node_modules a GitHub.

### Actividad 12 – API con Express

**Resumen propio (2–3 frases):**

En esta actividad aprendí a utilizar Express para crear una API que permite consultar y registrar participantes de un taller. Implementé las rutas GET y POST, agregué validaciones y comprobé las respuestas del servidor. También aprendí a utilizar los códigos HTTP para identificar solicitudes exitosas y errores.

**Dos términos clave y su explicación:**

- **API:** Permite que el navegador y el servidor intercambien información mediante solicitudes y respuestas.
- **Ruta:** Es una dirección del servidor que recibe solicitudes y ejecuta una función para devolver una respuesta.

**¿Qué es una ruta en Express?**

Es una dirección que permite ejecutar una función del servidor cuando se recibe una solicitud HTTP, como GET o POST.

**Ejemplo de ruta GET:**

```javascript
app.get("/api/inscripciones", (req, res) => {
  res.status(200).json(inscripciones);
});
```

Esta ruta permite consultar los participantes registrados y devuelve la información en formato JSON.

**Ejemplo de ruta POST:**

```javascript
app.post("/api/inscripciones", (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;
});
```

Este ejemplo muestra cómo se reciben los datos enviados mediante POST. En el proyecto, la ruta completa también valida los campos, crea el registro y devuelve una respuesta.

**¿Para qué sirve express.json()?**

Permite interpretar los datos JSON enviados al servidor para acceder a ellos mediante `req.body`.

**Estados HTTP utilizados:**

- **200 OK:** La solicitud se procesó correctamente.
- **201 Created:** Se creó correctamente un nuevo registro.
- **400 Bad Request:** Los datos enviados son incorrectos o incompletos.

**Pruebas realizadas:**

1. **Prueba GET:** Abrí `http://localhost:3000/api/inscripciones` y comprobé que inicialmente devolvía un arreglo vacío `[]`.

2. **Prueba POST:** Envié una inscripción de prueba utilizando PowerShell y el servidor respondió con el estado HTTP 201.

3. **Consulta del registro:** Actualicé la ruta GET y comprobé que aparecía el participante Ana Lopez con su ID y los datos registrados.

4. **Prueba de validación:** Envié una solicitud con un correo electrónico inválido y el servidor respondió con HTTP 400 y el mensaje: "El correo electrónico no es válido."

**Cambios realizados en server.js:**

- Implementé la ruta GET para consultar las inscripciones.
- Implementé la ruta POST para registrar participantes.
- Agregué validaciones para los campos obligatorios.
- Agregué una validación para el formato del correo electrónico.
- Configuré respuestas HTTP 200, 201 y 400.
- Utilicé un arreglo para guardar temporalmente los registros.

**Resultado obtenido:**

La API funcionó correctamente en las pruebas realizadas. Pude registrar un participante, consultar sus datos mediante GET y comprobar que el servidor rechaza correos electrónicos inválidos. Los registros todavía se almacenan temporalmente en memoria.

**Pregunta que podría aparecer en el examen:**

¿Cuál es la diferencia entre GET y POST?

**Respuesta:** GET permite consultar información del servidor, mientras que POST permite enviar datos para crear un nuevo registro.

**Conclusión:**

Aprendí cómo funciona una API con Express y cómo utilizar rutas HTTP para recibir, validar y devolver información. Esta actividad me permitió comprender cómo se conecta el frontend con el backend de una aplicación web.

### Actividad 13 – Fetch y JSON

**Resumen propio:**

En esta actividad aprendí cómo JavaScript permite enviar información desde un formulario hacia un servidor utilizando fetch(). También comprendí cómo convertir los datos a formato JSON y cómo interpretar la respuesta enviada por Express.

**Dos términos clave:**

- **fetch():** Es una función de JavaScript que permite realizar solicitudes HTTP para enviar o consultar información.
- **JSON:** Es un formato de texto utilizado para intercambiar datos entre el navegador y el servidor.

**Ejemplo de código explicado:**

```javascript
const datos = {
  nombre: "Ana López",
  correo: "ana@example.com",
  telefono: "12345678",
  taller: "JavaScript",
  horario: "Matutino"
};

const respuesta = await fetch("/api/inscripciones", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(datos)
});

const resultado = await respuesta.json();
```

Este código muestra cómo enviar los datos de un participante mediante una solicitud POST. JSON.stringify() convierte el objeto en texto JSON y respuesta.json() interpreta la respuesta del servidor.

**¿Cuál es la diferencia entre JSON.stringify() y response.json()?**

- **JSON.stringify():** Convierte un objeto JavaScript en una cadena de texto JSON para enviarlo.
- **response.json():** Lee e interpreta el cuerpo JSON de una respuesta HTTP y devuelve los datos correspondientes.

**¿Qué representa el estado HTTP 201?**

El código HTTP 201 significa que el servidor creó correctamente un nuevo recurso, como una inscripción.

**Actividad interactiva realizada:**

Completé el formulario de simulación utilizando datos ficticios. Observé cómo los datos se preparan para enviarse mediante fetch y JSON. La simulación permitió comprender el proceso sin enviar información a un servidor real.

**Recorrido de la información:**

1. Capturar los cinco datos del formulario.
2. Enviar los datos mediante fetch y POST.
3. Procesar y validar la información mediante Express.
4. Recibir una respuesta HTTP con los datos JSON.

**Pregunta de examen:** ¿Para qué sirve JSON.stringify()?

**Respuesta:** Para convertir un objeto JavaScript en texto JSON y poder enviarlo al servidor.

**Conclusión:**

Aprendí cómo se comunican el frontend y el backend mediante fetch y JSON. Estos conocimientos serán útiles para conectar el formulario de inscripción con la API del proyecto.

### Actividad 14 – SQL

**Resumen propio (2–3 frases):**

En esta actividad aprendí a utilizar SQL para crear tablas y administrar información de una base de datos. Practiqué las instrucciones INSERT, SELECT, UPDATE y DELETE para agregar, consultar, modificar y eliminar registros. También comprendí la diferencia entre las claves primarias y foráneas.

**Dos términos clave:**

- **Clave primaria (PK):** Identifica de forma única cada registro de una tabla.
- **Clave foránea (FK):** Es un campo que permite relacionar un registro con otra tabla mediante su clave primaria.

**Relación entre tablas:**

En la tabla talleres, el campo `id` funciona como clave primaria. En la tabla inscripciones, `taller_id` puede funcionar como clave foránea para identificar a qué taller pertenece cada participante.

**Explicación de las instrucciones SQL:**

- **CREATE TABLE:** Crea una nueva tabla.
- **INSERT:** Agrega información.
- **SELECT:** Consulta los registros.
- **UPDATE:** Modifica información existente.
- **DELETE:** Elimina registros.

**Ejemplo de código:**

```sql
CREATE TABLE talleres (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  horario TEXT
);

INSERT INTO talleres (nombre, horario)
VALUES ('Desarrollo Web', 'Tarde');

SELECT * FROM talleres;
```

Este código crea una tabla de talleres, registra un taller de Desarrollo Web y consulta su información.

**Pruebas y resultados esperados:**

1. CREATE TABLE e INSERT: Se crea una tabla y se agrega un taller con horario de tarde.
2. SELECT: Se muestra el registro creado.
3. UPDATE: El horario cambia de Tarde a Mañana.
4. DELETE: Se elimina el registro con ID 1.
5. SELECT final: La consulta ya no muestra registros.

**¿Qué son DDL y DML?**

- **DDL (Data Definition Language):** Son instrucciones utilizadas para definir o modificar la estructura de la base de datos, como CREATE TABLE.
- **DML (Data Manipulation Language):** Son instrucciones para agregar, modificar y eliminar información, como INSERT, UPDATE y DELETE. SELECT se utiliza para consultar datos y suele clasificarse como DQL.

**Pregunta que podría aparecer en el examen:**

¿Cuál es la diferencia entre una clave primaria y una clave foránea?

**Respuesta:** La clave primaria identifica un registro de manera única, mientras que la clave foránea permite establecer relaciones entre dos tablas.

**Conclusión:**

Aprendí a crear y administrar registros mediante SQL. Comprendí cómo utilizar las operaciones básicas de una base de datos y cómo relacionar información mediante claves primarias y foráneas.

### Actividad 15 – Git y control de versiones

**Resumen propio (2–3 frases):**

En esta actividad aprendí a utilizar Git para guardar y controlar las diferentes versiones de mi proyecto de Desarrollo Web. Realicé tres commits para organizar los archivos de configuración, el diseño del formulario y las funciones de JavaScript y Express. También comprobé el historial de cambios y verifiqué que todos los archivos quedaron guardados correctamente.

**Dos términos clave:**

- **Git:** Es una herramienta que permite controlar las versiones de un proyecto y conservar el historial de cambios.
- **Commit:** Es un registro que guarda una versión de los archivos del proyecto.

**Diferencia entre git add, git commit y git push:**

- `git add`: Prepara los archivos modificados para incluirlos en el siguiente commit.
- `git commit`: Guarda los cambios preparados en el historial local del proyecto.
- `git push`: Envía los commits del repositorio local a un repositorio remoto, como GitHub.

**Diferencia entre Git y GitHub:**

Git es una herramienta de control de versiones que funciona en mi computadora. GitHub es una plataforma en línea que permite almacenar y compartir repositorios Git.

**Comandos utilizados:**

```bash
git init
git status
git add
git commit
git log --oneline
```

**Commits realizados:**

**Primer commit: Estructura inicial**

- Identificador: `0ba1ddf`
- Mensaje: "Agrega estructura inicial del proyecto"
- Archivos: `.gitignore`, `README.md`, `package.json` y `package-lock.json`.

**Segundo commit: HTML y CSS**

- Identificador: `18e22b5`
- Mensaje: "Completa formulario HTML y estilos CSS"
- Archivos: `public/index.html` y `public/styles.css`.

**Tercer commit: JavaScript y API Express**

- Identificador: `1728753`
- Mensaje: "Implementa JavaScript, API Express y bitacora"
- Archivos: `public/app.js`, `server.js` y `bitacora.md`.

**Resultado obtenido:**

Se realizaron correctamente tres commits en la rama `master`. Al ejecutar `git log --oneline`, aparecieron las tres versiones guardadas.

También ejecuté `git status` y obtuve el mensaje:

```text
On branch master
nothing to commit, working tree clean
```

Esto confirmó que todos los archivos estaban guardados en Git y no había cambios pendientes en ese momento.

**¿Qué información comunica un buen mensaje de commit?**

Un buen mensaje de commit describe de manera breve y clara qué modificación se realizó en el proyecto. Por ejemplo: "Completa formulario HTML y estilos CSS".

**Pregunta que podría aparecer en el examen:**

¿Cuál es el orden correcto para guardar y publicar los cambios de un proyecto utilizando Git?

**Respuesta:** Primero `git add`, después `git commit` y finalmente `git push`.

**Conclusión:**

Aprendí a utilizar Git para organizar el desarrollo de un proyecto mediante diferentes versiones. También comprendí cómo consultar el historial y verificar que los cambios estén guardados correctamente antes de publicarlos en GitHub.