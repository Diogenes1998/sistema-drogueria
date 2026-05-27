CREATE DATABASE IF NOT EXISTS drogueria_db;

USE drogueria_db;

DROP TABLE IF EXISTS productos;

CREATE TABLE productos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100),

    forma VARCHAR(100),

    laboratorio VARCHAR(100),

    invima VARCHAR(100),

    lote VARCHAR(100),

    vence DATE,

    descripcion TEXT,

    precio DECIMAL(10,2),

    stock INT,

    categoria VARCHAR(100),

    precioUnitario DECIMAL(10,2) DEFAULT 0
);

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

VALUES
(
    'Acetaminofén 500mg',
    'Tabletas',
    'Tecnoquímicas',
    'M-2015RI-0012',
    'AC123',
    '2028-12-01',
    'Analgésico',
    20000,
    20,
    'Dolor',
    1000
),

(
    'Ibuprofeno 400mg',
    'Cápsulas',
    'MK',
    'M-2017RI-4487',
    'IB908',
    '10/08/2027',
    'Antiinflamatorio',
    36000,
    12,
    'Dolor',
    3000
),

(
    'Amoxicilina 500mg',
    'Cápsulas',
    'Genfar',
    'M-2018RI-8871',
    'AM551',
    '15/11/2027',
    'Antibiótico',
    48000,
    24,
    'Antibióticos',
    2000
),

(
    'Loratadina 10mg',
    'Tabletas',
    'La Santé',
    'M-2019RI-2255',
    'LR112',
    '20/05/2028',
    'Antialérgico',
    18000,
    10,
    'Alergias',
    1800
),

(
    'Omeprazol 20mg',
    'Cápsulas',
    'Tecnoquímicas',
    'M-2020RI-9944',
    'OM761',
    '08/09/2028',
    'Protector gástrico',
    30000,
    30,
    'Gastrointestinal',
    1000
),

(
    'Vitamina C 500mg',
    'Tabletas',
    'Natures Garden',
    'M-2021RI-3312',
    'VC222',
    '12/01/2029',
    'Suplemento vitamínico',
    25000,
    25,
    'Vitaminas',
    1000
),

(
    'Diclofenaco 50mg',
    'Tabletas',
    'MK',
    'M-2016RI-7781',
    'DC661',
    '18/04/2027',
    'Antiinflamatorio y analgésico',
    22000,
    20,
    'Dolor',
    1100
),

(
    'Azitromicina 500mg',
    'Tabletas',
    'Genfar',
    'M-2015RI-4451',
    'AZ991',
    '05/03/2028',
    'Antibiótico',
    54000,
    6,
    'Antibióticos',
    9000
),

(
    'Losartán 50mg',
    'Tabletas',
    'La Santé',
    'M-2018RI-1234',
    'LS444',
    '30/07/2029',
    'Control de hipertensión',
    42000,
    30,
    'Cardiovascular',
    1400
),

(
    'Salbutamol',
    'Inhalador',
    'GlaxoSmithKline',
    'M-2020RI-5678',
    'SB101',
    '14/10/2028',
    'Broncodilatador',
    65000,
    1,
    'Respiratorio',
    65000
),

(
    'Cetirizina 10mg',
    'Tabletas',
    'MK',
    'M-2019RI-7412',
    'CT500',
    '11/02/2028',
    'Antialérgico',
    16000,
    10,
    'Alergias',
    1600
),

(
    'Paracetamol Jarabe',
    'Jarabe',
    'Genfar',
    'M-2022RI-8821',
    'PJ321',
    '19/06/2027',
    'Fiebre infantil',
    28000,
    1,
    'Pediátrico',
    28000
),

(
    'Metformina 850mg',
    'Tabletas',
    'Tecnoquímicas',
    'M-2021RI-7766',
    'MF852',
    '09/09/2028',
    'Control de diabetes',
    39000,
    30,
    'Diabetes',
    1300
),

(
    'Clotrimazol Crema',
    'Crema',
    'La Santé',
    'M-2017RI-8822',
    'CL741',
    '22/12/2027',
    'Antifúngico tópico',
    17000,
    1,
    'Dermatológico',
    17000
),

(
    'Naproxeno 550mg',
    'Tabletas',
    'MK',
    'M-2016RI-9911',
    'NP909',
    '17/01/2029',
    'Antiinflamatorio',
    34000,
    10,
    'Dolor',
    3400
);