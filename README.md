# Requisitos


 
  

### Para ejecutar el sistema

Node.js >= 16.11

Chrome >=96 (preferentemente) o Mozilla Firefox >= 91

URL de la API **"siga-api"**

  

### Para desarrollar el sistema

Node.js >= 16.11

Chrome >=96 (preferentemente) o Mozilla Firefox >= 91

URL de la API

Visual Studio Code >= 1.6

  

#### Plugins (recomendados) para desarrollar en el editor de codigo Visual Studio CODE

Auto Close Tag - Jun Han

Auto Import - steoates

Next.js snippets - Pulkit Gangwar

Prettier Code formatter - Prettier

Visual Studio IntelliCode - Microsoft

Bracker Pair Colorizer 2 - CoenraadS

ES7 React/Redux/GraphQL/React-Native snippets - dsznajder

ESLint - Microsoft

HTML Snippets - Mohamed Abusaid

JavaScript (ES6) code snippets - charalampos karypidis

JS JSX Snippets - Ran

Material Icon Theme - Philip Kief

  

## Para ejecutar el proyecto

  

1. Renombrar el archivo``.env.local.example`` a ``.env.local`` y cambiar las variables dentro del archivo de acuerdo a tu entorno de trabajo

2. Verficar si se tiene instalado **npm**  (en windows al instalar **Node** ya viene con npm por default)

3.  Ejecutar ``npm install``

4. Ejecutar dentro la carpeta del proyecto el modo de desarrollador o en modo de producción.

```bash

#----- Paso Obligatorio ------

npm install

  

#----- Modo Desarrollador ------

#Para modo de desarrollo ejecuta

npm run dev

  

#------ Modo Producción --------

#Para modo de producción ejecuta

npm run build && npm run start

```

**Nota**: El modo de producción genera una serie de optimizaciones y se utiliza en caso de montar una versión en producción, éste paso lo realiza automáticamente Vercel Platform y Heroku. Este paso generará una nueva carpeta llamada `.next`.

  

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

  

# Estructura del proyecto

```

.git 				//Carpeta del controlador de versiones

components 			//Formularios y piezas de interfaz

node_modules 		//Carpeta de librerias

pages 				//Paginas o Rutas del sistema

	_app.js 		//Aplicación (como si fuera el main)

	_document.js 	//Equivalente a el documento HTML

	index.js 		//Pagina principal del sistema

public 				//Contiene archivos estaticos (por ejemplo el favicon)

styles 				//Estilos (Se recomienda usar modulos)

	- global.css 	//CSS Global

.env.example		//Datos necesarios para que funcione el sistema

.eslintrc.json 		//Configuración del formateador de codigo para VSCode

.gitignore 			//Carpetas y archivos ignorados git

.next.config.js 	//Configuración del compilador NEXTJS

theme.js 			//Tema del sistema (de Chakra UI)

package-lock.json 	//Caché del proyecto

package.json 		//Datos del proyecto, librerias instaladas

Readme.md 			//Aqui estan estas mismas instrucciones en Markdown

```

  

## Documentación

  

#### React.JS

Para aprender más sobre react, échale un ojo a los siguientes recursos:

  

- [Documentación de React.js](https://es.reactjs.org/)

- VIDEO [Curso Practico de React desde 0](https://www.youtube.com/watch?v=T_j60n1zgu0)

- VIDEO [Curso de JavaScript desde 0](https://www.youtube.com/watch?v=RqQ1d1qEWlE)

  

#### Next.JS

Para aprender más sobre Next.js, echale un ojo a los siguientes recursos:

  

- [Documentación de Next.js](https://nextjs.org/docs) - leer sobre Next.js sus caracteristicas y la API.

- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js

- VIDEO [Curso desde 0 NextJS](https://youtu.be/2jxc8DMzt0I)

  

## Despliegue en Vercel Platform

  

El camino facil para desplegar tu Next.js app es usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) una vez teniendo el proyecto en [Github](github.com) podrás enlazarlo fácilmente a un entorno de producción en Vercel Platform