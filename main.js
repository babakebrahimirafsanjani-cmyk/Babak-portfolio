/* ============ متن‌های سایت (EN / FA) ============ */
const i18n = {
  en: {
    nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_certs: "Certificates", nav_contact: "Contact",
    hero_greeting: "Hello, I'm Babak 👋",
    hero_title1: "AI & Machine Learning", hero_title2: "Engineer",
    hero_desc: "I build machine learning models and turn data into meaningful solutions.",
    hero_btn1: "Explore My Projects", hero_btn2: "Contact Me",
    about_label: "GET TO KNOW ME", about_title: "About Me",
    about_h3: "Business Mind, Data-Driven Engineer.",
    about_p1: "I'm Babak, a Business Management graduate from Vali-e-Asr University of Rafsanjan. I have hands-on experience in the gold and jewelry market in Rafsanjan, and to digitize our daily operations I built “Negin”, an AI-powered management application.",
    about_p2: "I started programming with C++ and now work professionally with Python. I also have experience with HTML and CSS, but my main focus is machine learning, and I keep improving my skills every day.",
    about_p3: "So far I have written several machine learning projects. You can see them in the Projects section, and the full code is available on GitHub.",
    card1_t: "Machine Learning", card1_d: "Regression, classification and clustering models.",
    card2_t: "Data Science", card2_d: "Data cleaning, outlier handling and visualization.",
    card3_t: "Software Development", card3_d: "Python desktop apps with real-world features.",
    proj_label: "MY RECENT WORK", proj_title: "Featured Projects",
    proj_desc: "Projects I've built. Full code is available on GitHub.",
    view: "View on GitHub →",
    cert_label: "ACHIEVEMENTS", cert_title: "Certificates",
    contact_label: "CONTACT", contact_title: "Get In Touch",
    contact_desc: "Interested in working together? Reach out!", contact_email: "Email Me",
    footer: "All rights reserved."
  },
  fa: {
    nav_home: "خانه", nav_about: "درباره من", nav_projects: "پروژه‌ها", nav_certs: "مدارک", nav_contact: "تماس",
    hero_greeting: "سلام، من بابک هستم 👋",
    hero_title1: "مهندس هوش مصنوعی و", hero_title2: "یادگیری ماشین",
    hero_desc: "مدل‌های یادگیری ماشین می‌سازم و داده‌ها را به راه‌حل‌های کاربردی تبدیل می‌کنم.",
    hero_btn1: "مشاهده پروژه‌ها", hero_btn2: "تماس با من",
    about_label: "با من آشنا شوید", about_title: "درباره من",
    about_h3: "نگاه کسب‌وکار، ذهن داده‌محور.",
    about_p1: "من بابک هستم، فارغ‌التحصیل مدیریت بازرگانی از دانشگاه ولی‌عصر رفسنجان. تجربه کار در بازار طلا و جواهر رفسنجان را دارم و برای سیستمی کردن فعالیت‌هایمان، برنامه‌ای با هوش مصنوعی به نام «نگین» ساخته‌ام.",
    about_p2: "برنامه‌نویسی را با C++ شروع کردم و امروز به‌صورت تخصصی با پایتون کار می‌کنم. با HTML و CSS هم تجربه دارم، اما تمرکز اصلی‌ام روی یادگیری ماشین است و هر روز خودم را در این مسیر ارتقا می‌دهم.",
    about_p3: "تا امروز چندین پروژه یادگیری ماشین نوشته‌ام. می‌توانید آن‌ها را در بخش پروژه‌ها ببینید و کد کامل‌شان را در گیت‌هاب مشاهده کنید.",
    card1_t: "یادگیری ماشین", card1_d: "مدل‌های رگرسیون، طبقه‌بندی و خوشه‌بندی.",
    card2_t: "علم داده", card2_d: "پاک‌سازی داده، مدیریت داده‌های پرت و مصورسازی.",
    card3_t: "توسعه نرم‌افزار", card3_d: "برنامه‌های دسکتاپ پایتون با امکانات کاربردی.",
    proj_label: "کارهای اخیر من", proj_title: "پروژه‌های منتخب",
    proj_desc: "پروژه‌هایی که ساخته‌ام. کد کامل آن‌ها در گیت‌هاب موجود است.",
    view: "مشاهده در گیت‌هاب ←",
    cert_label: "دستاوردها", cert_title: "مدارک و گواهی‌نامه‌ها",
    contact_label: "تماس", contact_title: "در ارتباط باشیم",
    contact_desc: "برای همکاری آماده‌ام، پیام بدهید!", contact_email: "ایمیل بزنید",
    footer: "تمامی حقوق محفوظ است."
  }
};

/* ============ پروژه‌ها (link = آدرس ریپو در گیت‌هاب) ============ */
const projects = [
  { link: "https://github.com/babakebrahimirafsanjani-cmyk/regression-project-house-in-tehran", image: "assets/images/Screenshot 2026-11-07 132207.png",
    tags: ["Python", "Pandas", "Scikit-learn", "Regression"],
    en: { title: "House Price Prediction", desc: "Regression on housing data: cleaning, log transform of price, target encoding, and comparing Linear, Ridge and Polynomial models (R² ≈ 0.86)." },
    fa: { title: "پیش‌بینی قیمت خانه", desc: "رگرسیون روی داده‌های مسکن: پاک‌سازی، لگاریتم قیمت، Target Encoding و مقایسه مدل‌های Linear، Ridge و Polynomial (R² ≈ ۰٫۸۶)." } },
  { link: "",
    tags: ["Python", "Logistic Regression", "Seaborn"],
    en: { title: "Heart Attack Prediction", desc: "Classification of heart attack risk using Logistic Regression with outlier removal (IQR / percentile) and confusion matrix analysis (accuracy ≈ 88%)." },
    fa: { title: "پیش‌بینی حمله قلبی", desc: "طبقه‌بندی ریسک حمله قلبی با Logistic Regression، حذف داده‌های پرت (IQR و صدک) و تحلیل ماتریس درهم‌ریختگی (دقت ≈ ۸۸٪)." } },
  { link: "",
    tags: ["Python", "K-Means", "DBSCAN", "Clustering"],
    en: { title: "Customer Segmentation", desc: "Clustering mall customers by age, income and spending score using K-Means and DBSCAN, evaluated with the Davies-Bouldin index." },
    fa: { title: "بخش‌بندی مشتریان", desc: "خوشه‌بندی مشتریان بر اساس سن، درآمد و امتیاز خرج‌کردن با K-Means و DBSCAN و ارزیابی با شاخص Davies-Bouldin." } },
  { link: "",
    tags: ["Python", "CustomTkinter", "ReportLab", "openpyxl"],
    en: { title: "Negin – Jewelry Management System", desc: "Desktop app for a gold & jewelry shop: inventory, sales, Excel storage, Jalali dates, Persian RTL UI and PDF invoices." },
    fa: { title: "نگین – سیستم مدیریت طلا و جواهر", desc: "نرم‌افزار دسکتاپ برای طلافروشی: انبار، فروش، ذخیره در اکسل، تاریخ شمسی، رابط راست‌چین فارسی و فاکتور PDF." } },
];

/* ============ مدارک (image = مسیر عکس مدرک مثل "certs/ml.jpg"، link = لینک تأیید) ============ */
const certificates = [
  { image: "assets/images/quera-ai-bootcamp.webp", link: "https://quera.org/certificate/d17QvhsJ",
    en: { title: "Task-Oriented Bootcamp in Artificial Intelligence", issuer: "Quera Bootcamp · November 2025" },
    fa: { title: "بوتکمپ پروژه‌محور هوش مصنوعی", issuer: "بوتکمپ کوئرا · آبان ۱۴۰۴" } },

  { image: "assets/images/university.jpg",
    en: { title: "My University", issuer: "Vali-e-Asr-Rafsanjan" },
    fa: { title: "دانشگاه من ", issuer: "ولیعصر رفسنجان" } },
    

];

/* ============ رندر ============ */
const grid = document.getElementById("projects-grid");
const certGrid = document.getElementById("certs-grid");
const t = (lang, k) => i18n[lang][k];

function render(lang) {
  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal visible">
      <div class="project-image"><span>${String(i + 1).padStart(2, "0")}</span></div>
      <div class="project-info">
        <h3>${p[lang].title}</h3>
        <p>${p[lang].desc}</p>
        <div class="project-tags">${p.tags.map(x => `<span>${x}</span>`).join("")}</div>
        ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${t(lang, "view")}</a>` : ""}
      </div>
    </div>`).join("");

  certGrid.innerHTML = certificates.map(c => {
    const inner = `
      <div class="cert-img">${c.image ? `<img src="${c.image}" alt="${c[lang].title}">` : "🏆"}</div>
      <h4>${c[lang].title}</h4><p>${c[lang].issuer}</p>`;
    return c.link
      ? `<a class="cert-card reveal visible" href="${c.link}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="cert-card reveal visible">${inner}</div>`;
  }).join("");
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(lang, el.dataset.i18n));
  document.getElementById("lang-btn").textContent = lang === "fa" ? "EN" : "FA";
  render(lang);
  localStorage.setItem("lang", lang);
}

document.getElementById("lang-btn").addEventListener("click", () =>
  setLang(document.documentElement.lang === "fa" ? "en" : "fa"));

setLang(localStorage.getItem("lang") || "en");

/* انیمیشن ظاهر شدن بخش‌ها هنگام اسکرول */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll(".detail-card").forEach(el => { el.classList.add("reveal"); io.observe(el); });

document.getElementById("year").textContent = new Date().getFullYear();
