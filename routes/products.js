const express = require('express');
const router = express.Router();

// Importo el controlador de productos
const productsController = require('../controllers/productsController');

// Defino las rutas con los métodos del controlador
router.get('/mouses', productsController.mouses);
router.get('/monitores', productsController.monitores);

// Exporto este router (es el router de productos)
module.exports = router;