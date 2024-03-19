# SOLVE_THE_X: FRONT

Este es el cliente frontend para el proyecto **SOLVE_THE_X**. Utiliza las siguientes tecnologías:

- **Vite**: Un entorno de desarrollo rápido para aplicaciones web.
- **Typescript**: Un lenguaje de programación tipado que compila a JavaScript.
- **Vue 3 & Composition API**: Un framework progresivo para construir interfaces de usuario.

## Instalación
	- Es necesario tener entorno de desarrollo habilitado al menos con [NodeJS](https://nodejs.org/en) y [npm](https://www.npmjs.com/)
   - Clona este repositorio en tu máquina local.
   - Ejecuta `npm install` para instalar las dependencias.

##  Compilación
   - Para transpilar el proyecto de Typescript a Javascript, ejecuta `npm run build`. El resultado estará en la carpeta `./dist`.

##  Configuración
   - El cliente consume los endpoints de la API. Asegúrate de configurar correctamente la URL base de la API en tu archivo de configuración.

##  Autenticación
   - Durante el inicio de sesión, el JWT recibido se almacena en el `localStorage`. Cada operación de usuario envía este token en el encabezado de autenticación (`authentication header`), y el servidor lo valida con su `TOKEN_SECRET`.

##  Endpoints
   - El cliente utiliza los siguientes endpoints de la API:
     - `GET /user/details`: Muestra datos del usuario actualmente loggeado.
     - `POST /auth/signup`: Crea un nuevo usuario en la base de datos durante el proceso de registro.
     - `POST /auth/login`: Inicia la sesión del usuario.
     - `PUT /user/edit`: Actualiza datos del usuario loggeado en la base de datos con información recogida en el formulario.
     - `DELETE /user/delete`: Elimina al usuario de la base de datos definitivamente.

##  Dependencias
   - Las dependencias utilizadas (sin número de versión) son:
     - `vue`: Framework para construir interfaces de usuario.
     - `vue-router`: Enrutador oficial para Vue.
     - `typescript`: Lenguaje de programación tipado.
     - `vite`: Entorno de desarrollo rápido.
     - `vue-tsc`: Herramienta para transpilar código Typescript.

##  Estilo
   - Considera usar Bootstrap o Tailwind para acelerar tareas tediosas del proceso de desarrollo.