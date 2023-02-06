const express = require("express");
const mongoose = require("mongoose");
const { Products } = require("./models");
var cors = require('cors')
const app = express();
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts))
app.use(express.json());
app.get("/products", async (req, res) => {
  const allProductss = await Products.find();
  var test = allProductss.filter(item => item.shop.ware_house_region_name == 'Hà Nội')
  console.log(typeof allProductss)
  return res.status(200).json(allProductss);
});
app.get('/products/:filter', async (req, res) => {
  var filter = req.params.filter;
  const allProductss = await Products.find();
   if (filter.length != 0) {
    var test = allProductss.filter(item => filter.includes(item.shop.ware_house_region_name))}
  return res.status(200).json(test);
});
app.get('/products/:sort/:condition', async (req, res) => {
   var sort = req.params.sort
   var condition = req.params.condition
  const allProductss = await Products.find();
  console.log(sort)
  console.log(condition.length)
  if (!condition) {
    var test = allProductss.filter(item => condition.includes(item.shop.ware_house_region_name))
  }else{
    var test = allProductss.map( item => item)
  }
  console.log(test)
  switch (sort) {
    case "Đề cử":
      break;
    case "Bán chạy":
      test.sort( (a, b) => parseFloat(b?.sold) - parseFloat(a?.sold))
      break;
    case "Giá thấp":
      test.sort( (a, b) => parseFloat(a?.sale_price_max) - parseFloat(b?.sale_price_max))
      break;
    case "Giá cao":
      test.sort( (a, b) => parseFloat(b?.sale_price_max) - parseFloat(a?.sale_price_max))
      break;
    case "Lượt yêu thích":
      test.sort( (a, b) => parseFloat(b?.rated?.star) - parseFloat(a?.rated?.star))
      break;
  }
  return res.status(200).json(test);
});
app.get('/sort/:sort/:condition', async (req, res) => {
   var sort = req.params.sort
   var condition = req.params.condition
  const allProductss = await Products.find();
  console.log(sort)
  console.log(condition.length)
    var test = allProductss.filter(item => condition.includes(item.shop.ware_house_region_name))
  switch (sort) {
    case "Đề cử":
      break;
    case "Bán chạy":
      test.sort( (a, b) => parseFloat(b?.sold) - parseFloat(a?.sold))
      break;
    case "Giá thấp":
      test.sort( (a, b) => parseFloat(a?.sale_price_max) - parseFloat(b?.sale_price_max))
      break;
    case "Giá cao":
      test.sort( (a, b) => parseFloat(b?.sale_price_max) - parseFloat(a?.sale_price_max))
      break;
    case "Lượt yêu thích":
      test.sort( (a, b) => parseFloat(b?.rated?.star) - parseFloat(a?.rated?.star))
      break;
  }
  return res.status(200).json(test);
});
app.get('/all/:sort/', async (req, res) => {
  var sort = req.params.sort
 const allProductss = await Products.find();
   var test = allProductss.map( item => item)
 switch (sort) {
   case "Đề cử":
     break;
   case "Bán chạy":
     test.sort( (a, b) => parseFloat(b?.sold) - parseFloat(a?.sold))
     break;
   case "Giá thấp":
     test.sort( (a, b) => parseFloat(a?.sale_price_max) - parseFloat(b?.sale_price_max))
     break;
   case "Giá cao":
     test.sort( (a, b) => parseFloat(b?.sale_price_max) - parseFloat(a?.sale_price_max))
     break;
   case "Lượt yêu thích":
     test.sort( (a, b) => parseFloat(b?.rated?.star) - parseFloat(a?.rated?.star))
     break;
 }
 return res.status(200).json(test);
});
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sendo:asadzz123@nghia64.kr8lhc7.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();