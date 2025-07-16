const express = require("express");
const app = express();

const productRoutes = require("./routes/productroutes");
const logger = require("./middlewares/logger"); // optional

app.use(express.json());
app.use(logger); // optional

app.get("/", (req, res) => {
  res.status(200).send('<h1 style="color:blue; background-color:yellow; width: 50%; margin:auto">Welcome to RB</h1>');
});

app.use("/products", productRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
