const db = require('../config/db');
const fs = require('fs');
const path = require('path');

// ดึงสินค้าทั้งหมด
const getAll = async (categoryId) => {
  let query = `
    SELECT 
      p.id,
      p.name,
      p.price,
      p.stock,
      p.description,
      p.image_url,
      p.category_id,
      p.created_at,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
  `;
  const queryParams = [];
  if (categoryId) {
    query += ` WHERE p.category_id = ?`;
    queryParams.push(categoryId);
  }
  query += ` ORDER BY p.id DESC`;

  const [products] = await db.query(query, queryParams);
  return products;
};
// ดึงสินค้าตาม ID
const getById = async (id) => {
  const [products] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
  return products[0];
};

// เพิ่มสินค้า
const create = async (productData) => {
  const { name, category_id, price, stock, description, image_url } = productData;
  const query = `
    INSERT INTO products (name, category_id, price, stock, description, image_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [name, category_id, price, stock, description, image_url]);
  return result.insertId;
};

// แก้ไขสินค้า
const update = async (id, productData) => {
  const { category_id, name, price, stock, description, image_url } = productData;
  await db.query(
    'UPDATE products SET category_id = ?, name = ?, price = ?, stock = ?, description = ?, image_url = ? WHERE id = ?',
    [category_id, name, price, stock, description, image_url, id]
  );
};

// ลบสินค้า
const remove = async (id) => {
  const [products] = await db.query('SELECT image_url FROM products WHERE id = ?', [id]);
  
  if (products.length === 0) {
    throw new Error('ไม่พบสินค้าที่ต้องการลบ');
  }

  const imageUrl = products[0].image_url;

  try {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  } catch (err) {
    if (err.code === 'ER_ROW_IS_REFERENCED_2' || err.errno === 1451) {
      throw new Error('ไม่สามารถลบได้ เนื่องจากสินค้านี้มีประวัติสั่งซื้ออยู่ในระบบ');
    }
    throw err;
  }

  if (imageUrl) {
  try {
    const filePath = path.join(__dirname, '../../public', imageUrl); 
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (fileErr) {
    console.error("ไม่สามารถลบไฟล์รูปภาพได้:", fileErr.message);
  }
}
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};