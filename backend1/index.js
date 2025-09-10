const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/orders", (req, res) => {
  res.json({ service: "backend1", orders: ["order1", "order2"] });
});

app.listen(PORT, () => {
  console.log(`Backend1 running on port ${PORT}`);
});
