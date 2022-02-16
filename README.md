# Receta paso a paso

## Objetivo

Armar un sitio web de un ecommerce de productos de computación que tenga
Inicio / -> Listado de productos
Mouses /productos/mouses -> Productos con la categoria "mouse"
Monitores /productos/monitores-> Productos con la categoria "mouse"
Nosotros /nosotros -> Info de la empresa

## Paso a paso

- Instalar express-generator
  npm i -g express-generator

- Generar un proyecto de express con la herramienta
  express --ejs --git

- Instalar las dependencias
  npm install

- Actualizar script start de package.json
  "start": "nodemon ./bin/www"

- Agregar controlador / es
  Crear carpeta controllers
  Crear archivo mainController.js

        module.exports = {
            // Métodos encargados de centralizar la lógica
            // Renderizar una vista con los datos resultantes de este proceso
            inicio(req, res) {
                return res.send('Hola')
            },

        };

- Mapear ruta con controlador
  En el archivo routes/index.js
  Importar el controlador creado:

          const mainController = require('../controllers/mainController');

Una vez importado, utilizar la variable donde se almacenó esta importación para vincular una ruta con un método del controlador

        router.get('/', mainController.inicio);

- Crear controlador y router de productos
  Crear un router nuevo que gestione todas las rutas referidas a /productos y las vincule con métodos del controlador de productos.

  Archivo routes/products
  Archivo controllers/productsController

  Configuré rutas con controladores
  Exporto esta configuración (router)
  Importo (require) en el app.js que se encarga de configurar la app

        app.use('/products', productsRouter);

- Armar la vista de productos. Reutilizar esta vista tanto para mostrar mouses como monitores.

  Archivo: views/products/index.ejs

- En la vista determinar las partes dinámicas (las que contendrán datos enviados desde el controlador)
