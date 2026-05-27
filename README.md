# 📖 Descripción

Sistema web desarrollado para la gestión y control de inventario farmacéutico en droguerías o farmacias.

La aplicación permite registrar medicamentos, administrar precios, calcular automáticamente valores unitarios según la cantidad de unidades por caja y mantener un control organizado del inventario.

El proyecto fue diseñado con una interfaz moderna, limpia y responsiva, enfocada en mejorar la experiencia administrativa y facilitar el manejo de medicamentos dentro de un entorno farmacéutico.

---

# ✨ Características Clave

- 💊 Registro y administración de medicamentos.
- 📦 Control de inventario mediante el campo de cantidad.
- 🧾 Cálculo automático del precio unitario.
- 🏷️ Clasificación de medicamentos por categorías.
- 🧪 Diferenciación de medicamentos por presentación:
  - Tabletas
  - Cápsulas
  - Jarabes
  - Inhaladores
  - Cremas
- 📅 Gestión de fechas de vencimiento en formato español (`dd/mm/aaaa`).
- 🚫 Validación para evitar precios o cantidades negativas.
- 📱 Diseño responsive adaptable a dispositivos móviles.
- 🎨 Interfaz moderna utilizando Bootstrap 5.
- ⚡ Actualización dinámica de datos mediante JavaScript y Node.js.
- 🗑️ Eliminación de productos del inventario.
- ✏️ Edición rápida de medicamentos registrados.

---

# 🛠️ Tecnologías Utilizadas

## 🎨 Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript Vanilla

## ⚙️ Backend

- Node.js
- Express.js

## 🗄️ Base de Datos

- MySQL

## 🧰 Herramientas

- Visual Studio Code
- MySQL Workbench
- Git
- GitHub

---

# 📂 Estructura del Proyecto

```bash
drogueria/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── productosController.js
│
├── public/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── imagen/
│       └── logo.png
│
├── routes/
│   └── productosRoutes.js
│
├── sql/
│   └── drogueria_db.sql
│
├── node_modules/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Instalación y Uso

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/drogueria.git
```

---

## 2️⃣ Entrar al proyecto

```bash
cd drogueria
```

---

## 3️⃣ Instalar dependencias

```bash
npm install
```

O manualmente:

```bash
npm install express mysql2 cors
```

---

## 4️⃣ Configurar la base de datos

Abrir MySQL Workbench y ejecutar:

```sql
CREATE DATABASE drogueria_db;
```

Luego importar o ejecutar el script SQL del proyecto ubicado en:

```bash
sql/drogueria_db.sql
```

---

## 5️⃣ Configurar conexión MySQL

Editar el archivo:

```bash
config/db.js
```

y configurar:

```javascript
const conexion = mysql.createConnection({

  host: 'localhost',

  user: 'root',

  password: 'TU_PASSWORD',

  database: 'drogueria_db'
});
```

---

## 6️⃣ Ejecutar el servidor

```bash
node server.js
```

O con Nodemon:

```bash
npx nodemon server.js
```

---

## 7️⃣ Abrir en el navegador

```bash
http://localhost:3000
```

---

# 🖼️ Capturas de Pantalla / Demostración

## 🏠 Dashboard Principal

_Aquí puedes agregar una captura del sistema._

---

## 📝 Formulario de Registro

_Aquí puedes agregar una captura del formulario._

---

## 📦 Tabla de Inventario

_Aquí puedes agregar una captura del inventario._

---

# 🚀 Funcionalidades Futuras

- 🔐 Sistema de autenticación y login.
- 📊 Dashboard estadístico.
- 📉 Alertas de inventario bajo.
- ⏰ Alertas de vencimiento.
- 🧾 Facturación y ventas.
- 📤 Exportación de reportes PDF/Excel.
- 🔎 Búsqueda avanzada de medicamentos.

---

# 👨‍💻 Autor

Desarrollado por **Diogenes Bermeo Sanchez** **ERIKA ANDREA ERAZO RODRIGUEZ** 🚀

📌 Proyecto académicO.
