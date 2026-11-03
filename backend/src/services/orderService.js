const db = require('../config/db');

const createOrder = async (orderData) => {
  const { user_id, total_price, items } = orderData;

  //ตรวจสอบสต็อกสินค้าก่อนทำรายการ
  for (let item of items) {
    const [products] = await db.query('SELECT stock, name FROM products WHERE id = ?', [item.product_id]);
    
    if (products.length === 0) {
      throw new Error(`ไม่พบสินค้ารหัส ${item.product_id}`);
    }
    
    if (products[0].stock < item.quantity) {
      throw new Error(`สินค้า "${products[0].name}" มีจำนวนในสต็อกไม่พอ (เหลือ ${products[0].stock} ชิ้น)`);
    }
  }

  //ถ้าสต็อกผ่านบันทึกลงตาราง orders
  const [orderResult] = await db.query(
    'INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)',
    [user_id, total_price, 'pending']
  );

  const orderId = orderResult.insertId;

  //บันทึกรายการลง order_items และตัดสต็อกสินค้า
  for (let item of items) {
    await db.query(
      'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, item.product_id, item.quantity, item.price]
    );

    //ตัดสต็อกสินค้าตามจำนวนที่ซื้อ
    await db.query(
      'UPDATE products SET stock = stock - ? WHERE id = ?',
      [item.quantity, item.product_id]
    );
  }

  return orderId;
};

module.exports = {
  createOrder
};