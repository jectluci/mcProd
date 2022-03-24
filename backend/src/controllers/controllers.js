const pool = require("../connect/connect");
const mysql = require("mysql");

const getAllProducts = async (req, res) => {
    let sql = "Select * from producto";
    const promise = pool.query(sql, (err, data) => {
        res.json(data);
    });
};
const getProduct = async (req, res) => {
    const { id } = req.params;
    let consulta = "select * from producto where id_producto = ?";
    let sql = mysql.format(consulta, [id]);
    const promise = pool.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
};

const addProduct = async (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    let consulta =
        "insert into producto (nombre, precio, descripcion) values (?,?,?)";
    let sql = mysql.format(consulta, [nombre, precio, descripcion]);
    const promise = pool.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ message: "registro insertado" });
    });
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    let consulta =
        "update producto set nombre =?,precio=?, descripcion=?   where id_producto = ? ";
    let sql = mysql.format(consulta, [nombre, precio, descripcion, id]);
    const promise = pool.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ message: "registro actualizado" });
    });
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    let consulta = "delete from producto where id_producto = ?";
    let sql = mysql.format(consulta, [id]);
    const promise = pool.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ message: "registro eliminado" });
    });
};

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};
