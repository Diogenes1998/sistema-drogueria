const db = require('../config/db');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos');

    res.json(rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: 'Error al obtener productos'
    });
  }
};

// Crear producto
const crearProducto = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    } = req.body;

    if (!nombre || !precio || !stock || !categoria) {
      return res.status(400).json({
        mensaje: 'Todos los campos obligatorios deben completarse'
      });
    }

    const sql = `
      INSERT INTO productos
      (nombre, descripcion, precio, stock, categoria)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    ]);

    res.status(201).json({
      mensaje: 'Producto agregado correctamente',
      id: result.insertId
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: 'Error al crear producto'
    });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto
};
