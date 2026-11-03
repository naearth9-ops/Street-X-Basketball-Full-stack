const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// //Admin
router.post('/', upload.single('image'), productController.createProduct);
router.put('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
// router.post('/', verifyToken, isAdmin, upload.single('image'), productController.createProduct);
// router.put('/:id', verifyToken, isAdmin, upload.single('image'), productController.updateProduct);
// router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct);

module.exports = router;