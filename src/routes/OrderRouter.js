const express = require("express");
const router = express.Router()
const OrderController = require('../controller/OrderController');
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create/:id', authUserMiddleWare, OrderController.createOrder)
router.get('/get-all-order/:id', authUserMiddleWare, OrderController.getAllOrderDetails)
router.delete('/cancel-order/:id', authUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-details-order/:id', authUserMiddleWare, OrderController.getDetailsOrder)
//
router.get('/get-all-order', authMiddleWare, OrderController.getAllOrder)


module.exports = router