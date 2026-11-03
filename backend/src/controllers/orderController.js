const db = require("../config/db");

const createOrder = async (req, res) => {
  const { user_id, total_price, items } = req.body;
  console.log("Incoming Order Data:", req.body);

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "ไม่มีรายการสินค้าในตะกร้า" });
  }

  try {
    const targetUserId = user_id || 1;

    const [orderResult] = await db.query(
      "INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)",
      [targetUserId, total_price, "pending"],
    );

    const orderId = orderResult.insertId;

    for (let item of items) {
      const productId = item.product_id || item.id;
      const quantity = item.quantity || item.qty || 1;
      const price = item.price || 0;

      await db.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, productId, quantity, price],
      );
    }

    console.log(`Order ${orderId} created successfully!`);
    res
      .status(201)
      .json({ orderId: orderId, message: "Order created success" });
  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const [orders] = await db.query("SELECT * FROM orders ORDER BY id DESC");
    res.json(orders);
  } catch (err) {
    console.error("GET ALL ORDERS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
