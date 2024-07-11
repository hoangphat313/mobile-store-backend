const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController")
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', ProductController.updateProduct)
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-all-type', ProductController.getAllType)
//
router.post('/delete-many', authMiddleWare, ProductController.deleteMany) //authMiddleWare
router.get('/get-details/:id', authMiddleWare, ProductController.getDetailsProduct) //,authMiddleware
router.delete('/delete/:id', authMiddleWare, ProductController.deleteProduct)//,authMiddleware

module.exports = router 