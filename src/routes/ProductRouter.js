const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController")
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-all-type', ProductController.getAllType)
router.get('/get-details/:id', ProductController.getDetailsProduct)
//
router.put('/update/:id', authMiddleWare, ProductController.updateProduct)
router.post('/delete-many', authMiddleWare, ProductController.deleteMany)
router.delete('/delete/:id', authMiddleWare, ProductController.deleteProduct)

module.exports = router 