const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware');
router.post('/', orderController.createOrder);
router.get('/', verifyToken, orderController.getAllOrders);
router.put('/:id/status', verifyToken, orderController.updateOrderStatus);

module.exports = router;