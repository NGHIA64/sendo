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
  return res.status(200).json(allProductss);
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