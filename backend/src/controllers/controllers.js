const mysql = require("mysql");
const exesql = require("../connect/querys");

const getAllProducts = async (req, res) => {
    let sql = "Select * from producto";
    try {
        exesql(sql, res);
        console.log("lista de productos");
    } catch (e) {
        /* handle error */
    }
};
const getProduct = async (req, res) => {
    const { id } = req.params;
    let consulta = "select * from producto where id_producto = ?";
    let sql = mysql.format(consulta, [id]);
    try {
        exesql(sql, res);
    } catch (e) {
        /* handle error */
    }
};

const addProduct = async (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    let consulta =
        "insert into producto (nombre, precio, descripcion) values (?,?,?)";
    let sql = mysql.format(consulta, [nombre, precio, descripcion]);
    try {
        exesql(sql, res);
    } catch (e) {
        /* handle error */
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    let consulta =
        "update producto set nombre =?,precio=?, descripcion=?   where id_producto = ? ";
    let sql = mysql.format(consulta, [nombre, precio, descripcion, id]);
    try {
        exesql(sql, res);
    } catch (e) {
        /* handle error */
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    let consulta = "delete from producto where id_producto = ?";
    let sql = mysql.format(consulta, [id]);
    try {
        exesql(sql, res);
    } catch (e) {
        /* handle error */
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};
