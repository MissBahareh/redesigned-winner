const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware برای تجزیه درخواست‌های JSON
app.use(express.json());

// Endpoint برای دریافت داده‌ها از db.json
app.get("/api/commoditys", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "مشکل در خواندن فایل داده‌ها" });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.commoditys);
  });
});

app.get("/api/groups", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "مشکل در خواندن فایل داده‌ها" });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.groups);
  });
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const cors = require("cors");
app.use(cors());
