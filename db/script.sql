CREATE DATABASE IF not exists grupomc;

connect grupomc

CREATE table if not exists producto(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    precio decimal(10,2) NOT NULL,
    descripcion varchar(200) NOT NULL
);
Describe producto;
