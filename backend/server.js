const express = require("express");
const cors = require("cors");

const pricingRoute = require("./routes/pricing");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/check-price", pricingRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});