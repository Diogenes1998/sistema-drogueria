const express = require('express');
const router = express.Router();

const {
  obtenerProductos,
  crearProducto
} = require('../controllers/productosController');

// GET productos
router.get('/', obtenerProductos);

// POST producto
router.post('/', crearProducto);

module.exports = router;