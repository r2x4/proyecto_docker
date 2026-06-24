CREATE DATABASE IF NOT EXISTS venta_jugos
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE venta_jugos;

DROP TABLE IF EXISTS tb_cliente;

CREATE TABLE tb_cliente (
    DNI VARCHAR(20) PRIMARY KEY,
    NOMBRE VARCHAR(100),
    CIUDAD VARCHAR(100),
    SEXO VARCHAR(10),
    EDAD INT,
    LIMITE_CREDITO DECIMAL(12,2)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO tb_cliente
(DNI, NOMBRE, CIUDAD, SEXO, EDAD, LIMITE_CREDITO)
VALUES
('1001','Juan Pérez','Bogotá','M',25,500000),
('1002','María Gómez','Medellín','F',30,750000),
('1003','Carlos Ruiz','Barranquilla','M',28,650000);