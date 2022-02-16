var express = require('express');
// Instancia de express Router
var router = express.Router();
const mainController = require('../controllers/mainController');

/* Dispara la lógica de una petición hacia una ruta a un controlador */
router.get('/', mainController.inicio);

module.exports = router;
