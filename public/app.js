const tablaProductos =
document.getElementById('tablaProductos');

const productoForm =
document.getElementById('productoForm');

const precioInput =
document.getElementById('precio');

const stockInput =
document.getElementById('stock');

const precioUnitarioInput =
document.getElementById('precioUnitario');

/* =========================
   FORMATEAR FECHA
========================= */

const formatearFecha = (
input
) => {

  let valor =
  input.value.replace(/\D/g, '');

  if (valor.length > 2) {

    valor =
    valor.substring(0,2) +
    '/' +
    valor.substring(2);
  }

  if (valor.length > 5) {

    valor =
    valor.substring(0,5) +
    '/' +
    valor.substring(5,9);
  }

  input.value = valor;
};

/* =========================
   FORMATO MONEDA
========================= */

const formatoMoneda =
(valor) => {

  return new Intl.NumberFormat(
    'es-CO',
    {
      style: 'currency',
      currency: 'COP'
    }
  ).format(valor);
};

/* =========================
   PRECIO UNITARIO
========================= */

const calcularPrecioUnitario = () => {

  const precio =
  parseFloat(precioInput.value);

  const cantidad =
  parseInt(stockInput.value);

  if (
    precio > 0 &&
    cantidad > 0
  ) {

    const unitario =
    precio / cantidad;

    precioUnitarioInput.value =
    formatoMoneda(unitario);

  } else {

    precioUnitarioInput.value = '';
  }
};

precioInput.addEventListener(
  'input',
  calcularPrecioUnitario
);

stockInput.addEventListener(
  'input',
  calcularPrecioUnitario
);

/* =========================
   OBTENER PRODUCTOS
========================= */

const obtenerProductos = async () => {

  try {

    const respuesta =
    await fetch('/api/productos');

    const productos =
    await respuesta.json();

    tablaProductos.innerHTML = '';

    productos.forEach(producto => {

      tablaProductos.innerHTML += `

      <tr>

        <td>${producto.nombre}</td>

        <td>${producto.forma || 'Tabletas'}</td>

        <td>${producto.laboratorio || 'Tecnoquímicas'}</td>

        <td>${producto.invima || 'M-2015RI-0012'}</td>

        <td>${producto.lote || 'AC123'}</td>

        <td>${producto.vence || ''}</td>

        <td>${formatoMoneda(producto.precio)}</td>

        <td>${producto.stock}</td>

        <td>
          ${formatoMoneda(
            producto.precioUnitario || 0
          )}
        </td>

      </tr>

      `;
    });

  } catch (error) {

    console.error(error);

    mostrarAlerta(
      'Error al cargar productos',
      'danger'
    );
  }
};

/* =========================
   CREAR PRODUCTO
========================= */

productoForm.addEventListener(
  'submit',
  async (e) => {

    e.preventDefault();

    /* VALIDAR FECHA */

    const fecha =
    document.getElementById('vence').value;

    const regexFecha =
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regexFecha.test(fecha)) {

      return mostrarAlerta(
        'Fecha inválida. Use dd/mm/aaaa',
        'danger'
      );
    }

    const nuevoProducto = {

      nombre:
      document.getElementById('nombre').value,

      forma:
      document.getElementById('forma').value,

      laboratorio:
      document.getElementById('laboratorio').value,

      invima:
      document.getElementById('invima').value,

      lote:
      document.getElementById('lote').value,

      vence:
      document.getElementById('vence').value,

      descripcion:
      document.getElementById('descripcion').value,

      precio:
      parseFloat(
        document.getElementById('precio').value
      ),

      stock:
      parseInt(
        document.getElementById('stock').value
      ),

      categoria:
      document.getElementById('categoria').value
    };

    /* VALIDACIONES */

    if (nuevoProducto.precio < 0) {

      return mostrarAlerta(
        'Precio inválido',
        'danger'
      );
    }

    if (nuevoProducto.stock < 0) {

      return mostrarAlerta(
        'Cantidad inválida',
        'danger'
      );
    }

    nuevoProducto.precioUnitario =
    nuevoProducto.precio /
    nuevoProducto.stock;

    try {

      const respuesta =
      await fetch('/api/productos', {

        method: 'POST',

        headers: {
          'Content-Type':
          'application/json'
        },

        body:
        JSON.stringify(nuevoProducto)
      });

      const data =
      await respuesta.json();

      mostrarAlerta(
        data.mensaje,
        'success'
      );

      productoForm.reset();

      precioUnitarioInput.value = '';

      obtenerProductos();

    } catch (error) {

      console.error(error);

      mostrarAlerta(
        'Error al guardar',
        'danger'
      );
    }
  }
);

/* =========================
   ALERTAS
========================= */

const mostrarAlerta = (
mensaje,
tipo
) => {

  const alerta =
  document.createElement('div');

  alerta.className =
  `alert alert-${tipo}
  position-fixed top-0 end-0 m-3`;

  alerta.style.zIndex = '9999';

  alerta.innerText = mensaje;

  document.body.appendChild(alerta);

  setTimeout(() => {

    alerta.remove();

  }, 3000);
};

/* =========================
   INICIALIZAR
========================= */

obtenerProductos();