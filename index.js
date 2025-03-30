import express from "express"; // استفاده از import به جای require
import fs from "fs/promises"; // استفاده از نسخه promise-based از fs

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware برای تجزیه درخواست‌های JSON
app.use(express.json());

// Endpoint برای دریافت داده‌ها از db.json
app.get("/api/commoditys", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8"); // استفاده از async/await
    const jsonData = JSON.parse(data);
    res.json(jsonData.commoditys);
  } catch (err) {
    res.status(500).json({ error: "مشکل در خواندن فایل داده‌ها" });
  }
});

app.get("/api/groups", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8"); // استفاده از async/await
    const jsonData = JSON.parse(data);
    res.json(jsonData.groups);
  } catch (err) {
    res.status(500).json({ error: "مشکل در خواندن فایل داده‌ها" });
  }
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
