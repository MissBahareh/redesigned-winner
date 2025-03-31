import express from "express"; // استفاده از ES Modules برای Express
import cors from "cors"; // فعال کردن CORS
import fs from "fs/promises"; // استفاده از نسخه promise-based از fs

const app = express();
const PORT = process.env.PORT || 3000; // اولویت با PORTی که Render فراهم کرده است
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware برای تجزیه درخواست‌های JSON
app.use(express.json());
app.use(cors()); // فعال کردن CORS برای دسترسی به API از دامنه‌های مختلف

// Endpoint برای دریافت داده‌های کالاها از db.json
app.get("/api/commoditys", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8"); // خواندن فایل به صورت غیرهمزمان
    const jsonData = JSON.parse(data); // تبدیل داده‌ها به JSON
    res.json(jsonData.commoditys); // ارسال داده‌های کالاها به کلاینت
  } catch (err) {
    console.error("Error reading db.json:", err); // نمایش خطای دقیق در لاگ کنسول
    res
      .status(500)
      .json({ error: "مشکل در خواندن فایل داده‌ها یا فرمت JSON نامعتبر است" }); // ارسال پیام خطا
  }
});

// Endpoint برای دریافت داده‌های گروه‌ها از db.json
app.get("/api/groups", async (req, res) => {
  try {
    const data = await fs.readFile("db.json", "utf-8"); // خواندن فایل به صورت غیرهمزمان
    const jsonData = JSON.parse(data); // تبدیل داده‌ها به JSON
    res.json(jsonData.groups); // ارسال داده‌های گروه‌ها به کلاینت
  } catch (err) {
    console.error("Error reading db.json:", err); // نمایش خطای دقیق در لاگ کنسول
    res
      .status(500)
      .json({ error: "مشکل در خواندن فایل داده‌ها یا فرمت JSON نامعتبر است" }); // ارسال پیام خطا
  }
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
