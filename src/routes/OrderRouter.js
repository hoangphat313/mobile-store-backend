const express = require("express");
const router = express.Router()
const OrderController = require('../controller/OrderController');
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create/:id', authUserMiddleWare, OrderController.createOrder) //authUserMiddleWare
router.get('/get-all-order/:id', authUserMiddleWare, OrderController.getAllOrderDetails) //authUserMiddleWare
router.delete('/cancel-order/:id', authUserMiddleWare, OrderController.cancelOrderDetails)//authUserMiddleWare
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
//
router.get('/get-all-order', authMiddleWare, OrderController.getAllOrder) //authMiddleWare


module.exports = router