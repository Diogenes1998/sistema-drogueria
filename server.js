const express = require('express');

const mysql = require('mysql2');

const cors = require('cors');

const path = require('path');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(
  path.join(__dirname, 'public')
));

/* =========================
   CONEXION MYSQL
========================= */

const conexion = mysql.createConnection({

  host: 'localhost',

  user: 'root',

  password: '123456',

  database: 'drogueria_db'
});

conexion.connect(error => {

  if (error) {

    console.log(error);

  } else {

    console.log('MySQL conectado');
  }
});

/* =========================
   OBTENER PRODUCTOS
========================= */

app.get('/api/productos',
(req, res) => {

  conexion.query(
    'SELECT * FROM productos',

    (error, resultados) => {

      if (error) {

        return res
        .status(500)
        .json(error);
      }

      res.json(resultados);
    }
  );
});

/* =========================
   CREAR PRODUCTO
========================= */

app.post('/api/productos',
(req, res) => {

  const {

    nombre,
    forma,
    laboratorio,
    invima,
    lote,
    vence,
    descripcion,
    precio,
    stock,
    categoria,
    precioUnitario

  } = req.body;

  /* VALIDACIONES */

  if (precio < 0) {

    return res.status(400).json({

      mensaje:
      'El precio no puede ser negativo'
    });
  }

  if (stock < 0) {

    return res.status(400).json({

      mensaje:
      'La cantidad no puede ser negativa'
    });
  }

  const sql = `

    INSERT INTO productos
    (

      nombre,
      forma,
      laboratorio,
      invima,
      lote,
      vence,
      descripcion,
      precio,
      stock,
      categoria,
      precioUnitario

    )

    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  conexion.query(

    sql,

    [

      nombre,
      forma,
      laboratorio,
      invima,
      lote,
      vence,
      descripcion,
      precio,
      stock,
      categoria,
      precioUnitario

    ],

    (error) => {

      if (error) {

        return res
        .status(500)
        .json(error);
      }

      res.json({

        mensaje:
        'Producto agregado'
      });
    }
  );
});

/* =========================
   SERVIDOR
========================= */

const PORT = 3000;

app.listen(PORT, () => {

  console.log(`

  Servidor corriendo:
  http://localhost:${PORT}

  `);
});