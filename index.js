import express from "express"; // برای سرور
import cors from "cors"; // برای CORS
import fs from "fs/promises"; // برای کار با فایل‌ها به صورت غیرهمزمان

const app = express();
const PORT = process.env.PORT || 3000; // استفاده از PORT تعیین شده توسط محیط

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint برای کالاها
app.get("/api/commoditys", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8");
    const jsonData = JSON.parse(data);
    res.json(jsonData.commoditys);
  } catch (err) {
    console.error("Error reading db.json:", err);
    res
      .status(500)
      .json({ error: "مشکل در خواندن فایل داده‌ها یا JSON نامعتبر است" });
  }
});

// Endpoint برای گروه‌ها
app.get("/api/groups", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8");
    const jsonData = JSON.parse(data);
    res.json(jsonData.groups);
  } catch (err) {
    console.error("Error reading db.json:", err);
    res
      .status(500)
      .json({ error: "مشکل در خواندن فایل داده‌ها یا JSON نامعتبر است" });
  }
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
