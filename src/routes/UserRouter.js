const express = require("express");
const router = express.Router();
const userController = require('../controller/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.post('/refresh-token', userController.refreshToken)
router.put('/update-user/:id', userController.updateUser)
router.get('/get-details/:id', userController.getDetailsUser) //,authUserMiddleware
//
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser) //authMiddleware
router.get('/get-all', authMiddleWare, userController.getAllUser) //authMiddleware
router.post('/delete-many', authMiddleWare, userController.deleteMany) //authMiddleWare

module.exports = router 