require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var cors = require('cors')
const connectDB = require('./config/db');

const setupSwagger = require("./swaggerConfig")

// Import routes
const productRoutes = require("./routes/product");
const storeRoutes = require("./routes/store");
const storeProductRoutes = require("./routes/storeProduct");


const app = express();
const PORT =process.env.PORT || 6000;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.json());


// Setup Swagger
setupSwagger(app);

// Connect to DB before starting the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/store-products", storeProductRoutes);

