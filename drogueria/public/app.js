const tablaProductos = document.getElementById('tablaProductos');
const productoForm = document.getElementById('productoForm');

// Obtener productos
const obtenerProductos = async () => {

  try {

    const respuesta = await fetch('/api/productos');
    const productos = await respuesta.json();

    tablaProductos.innerHTML = '';

    productos.forEach(producto => {

  tablaProductos.innerHTML += `
    <tr>
      <td data-label="ID">${producto.id}</td>
      <td data-label="Nombre">${producto.nombre}</td>
      <td data-label="Descripción">${producto.descripcion}</td>
      <td data-label="Precio">$${producto.precio}</td>
      <td data-label="Stock">${producto.stock}</td>
      <td data-label="Categoría">${producto.categoria}</td>
    </tr>
  `;
});

  } catch (error) {
    console.error('Error:', error);
  }
};

// Crear producto
productoForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const nuevoProducto = {
    nombre: document.getElementById('nombre').value,
    descripcion: document.getElementById('descripcion').value,
    precio: document.getElementById('precio').value,
    stock: document.getElementById('stock').value,
    categoria: document.getElementById('categoria').value
  };

  try {

    const respuesta = await fetch('/api/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    });

    const data = await respuesta.json();

    alert(data.mensaje);

    productoForm.reset();

    obtenerProductos();

  } catch (error) {
    console.error('Error:', error);
  }
});

// Inicializar
obtenerProductos();
