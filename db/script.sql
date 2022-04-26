CREATE DATABASE IF not exists grupomc;

connect grupomc

CREATE table if not exists producto(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    precio decimal(10,2) NOT NULL,
    descripcion varchar(200) NOT NULL
);
Describe producto;


DELIMITER $
CREATE PROCEDURE insertarProduct (
        in nom VARCHAR(50), 
        in prec decimal(10,2), 
        in descr VARCHAR(200)
        )
    BEGIN 
    INSERT INTO producto(nombre,precio,descripcion) VALUES (nom, prec, descr);
    END
$


DELIMITER $
CREATE PROCEDURE actualizarProduct(
        IN id int,
        IN nom VARCHAR(50), 
        IN prec decimal(10,2), 
        IN descr VARCHAR(200)
        )
    BEGIN
    UPDATE producto 
    SET  nombre=nom, precio=prec, descripcion=descr  WHERE id_producto = id;
    END
$

DELIMITER $
CREATE PROCEDURE eliminarProduct(
        in id int
        )
    Begin 
    delete from producto where id_producto = id;
    END
$

DESCRIBE producto;



