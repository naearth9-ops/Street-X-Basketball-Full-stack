const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const { category_id } = req.query;
    const products = await productService.getAll(category_id);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : (req.body.image_url || '');

    const productData = {
      ...req.body,
      image_url: imageUrl
    };

    const newId = await productService.create(productData);
    res.status(201).json({ id: newId, message: 'บันทึกสินค้าเรียบร้อยแล้ว' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (req.file) {
      updateData.image_url = `/uploads/${req.file.filename}`;
    }

    await productService.update(id, updateData);
    res.json({ message: 'อัปเดตข้อมูลสินค้าเรียบร้อยแล้ว' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.remove(req.params.id);
    res.json({ message: 'ลบสินค้าเรียบร้อยแล้ว' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};