const db = require('../config/db');

// ดึงสินค้าทั้งหมด
const getAll = async () => {
  const query = `
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
    ORDER BY p.id DESC
  `;
  const [products] = await db.query(query);
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
  await db.query('DELETE FROM products WHERE id = ?', [id]);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};