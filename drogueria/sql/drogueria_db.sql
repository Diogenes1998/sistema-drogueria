CREATE DATABASE IF NOT EXISTS drogueria_db;
USE drogueria_db;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    categoria VARCHAR(100) NOT NULL
);

INSERT INTO productos (nombre, descripcion, precio, stock, categoria)
VALUES
('Acetaminofén', 'Analgésico y antipirético', 5000, 100, 'Dolor'),
('Loratadina', 'Antihistamínico para alergias', 8500, 50, 'Alergias'),
('Ibuprofeno', 'Antiinflamatorio y analgésico', 12000, 80, 'Inflamación');
