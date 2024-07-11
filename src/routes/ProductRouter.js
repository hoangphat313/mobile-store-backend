const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', ProductController.updateProduct)
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-all-type', ProductController.getAllType)
//
router.post('/delete-many', authMiddleware, ProductController.deleteMany) //authMiddleWare
router.get('/get-details/:id', authMiddleware, ProductController.getDetailsProduct) //,authMiddleware
router.delete('/delete/:id', authMiddleware, ProductController.deleteProduct)//,authMiddleware
module.exports = router 