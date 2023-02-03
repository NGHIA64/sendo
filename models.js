const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "category_path": String,
    "image": String,
    "default_price_min": String,
    "default_price_max": String,
    "sale_price_min": String,
    "sale_price_max": String,
    "sale_percent": String,
    "sold": String,
    "order_count_text": String,
    "seller_admin_id": String,
    "sku_user": String,
    "product_type": String,
    "status_new": String,
    "stock_status": String,
    "search_feed_type": String,
    "shop": Object,
    "rated": Object,
    "options": Object,
    "package_discount": Array
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = { Products };