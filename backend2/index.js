const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/users", (req, res) => {
  res.json({ service: "backend2", users: ["user1", "user2"] });
});

app.listen(PORT, () => {
  console.log(`Backend2 running on port ${PORT}`);
});
