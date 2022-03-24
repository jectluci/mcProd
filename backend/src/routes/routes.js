const { Router } = require("express");
const {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/controllers");

const router = Router();

router.get("/grupomc/products", getAllProducts);
router.get("/grupomc/products/:id", getProduct);
router.post("/grupomc/products", addProduct);
router.post("/grupomc/products/:id", updateProduct);
router.delete("/grupomc/products/:id", deleteProduct);

module.exports = router;
