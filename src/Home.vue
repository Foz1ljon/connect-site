<template>
  <div class="app">
    <!-- Floating particles background -->
    <div class="particles">
      <span v-for="i in 30" :key="i" class="particle" :style="particleStyle(i)"></span>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-inner">
        <div class="logo">
          <span class="logo-icon">⬡</span>
          <span class="logo-text">Connect<em>Mobile</em></span>
        </div>
        <ul class="nav-links">
          <li><a href="#brands">Brendlar</a></li>
          <li><a href="#app">Ilova</a></li>
          <li><a href="#about">Biz haqimizda</a></li>
          <li><a href="#contact">Bog'lanish</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#app" class="btn-nav">Yuklab olish</a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">🔥 O'zbekistonning #1 Tech Do'koni</div>
        <h1 class="hero-title">
          <span class="line1">Texnologiya</span>
          <span class="line2">Kelajagi</span>
          <span class="line3">Sizning <em>Qo'lingizda</em></span>
        </h1>
        <p class="hero-sub">Apple, Samsung, Greenlion va yuzlab top brendlardan original texnikalar. Eng yaxshi narxlar, tez yetkazib berish, kafolat bilan.</p>
        <div class="hero-actions">
          <a href="#app" class="btn-primary">
            <span>Ilovani Yuklab Oling</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#brands" class="btn-ghost">Brendlarni Ko'rish</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="num">50K+</span><span class="lbl">Mijozlar</span></div>
          <div class="stat"><span class="num">200+</span><span class="lbl">Brendlar</span></div>
          <div class="stat"><span class="num">5★</span><span class="lbl">Reyting</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="phone-mockup">
          <div class="phone-frame">
            <div class="phone-screen">
              <div class="screen-header">
                <div class="screen-time">09:41</div>
                <div class="screen-icons">📶 🔋</div>
              </div>
              <div class="screen-content">
                <div class="app-logo-sm">⬡ Connect</div>
                <div class="screen-cards">
                  <div class="screen-card ac1">
                    <span>🍎</span>
                    <p>iPhone 16 Pro</p>
                    <small>12 999 000 so'm</small>
                  </div>
                  <div class="screen-card ac2">
                    <span>📱</span>
                    <p>Galaxy S25</p>
                    <small>9 499 000 so'm</small>
                  </div>
                  <div class="screen-card ac3">
                    <span>🎧</span>
                    <p>AirPods Pro</p>
                    <small>3 299 000 so'm</small>
                  </div>
                </div>
                <div class="screen-nav"><span>🏠</span><span>🔍</span><span>❤️</span><span>👤</span></div>
              </div>
            </div>
          </div>
          <div class="phone-glow"></div>
          <div class="floating-badge fb1">✓ Kafolat</div>
          <div class="floating-badge fb2">🚀 Tez yetkazish</div>
          <div class="floating-badge fb3">💳 Bo'lib to'lash</div>
        </div>
      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker-wrap">
      <div class="ticker">
        <span v-for="item in tickerItems" :key="item" class="tick-item">{{ item }} <span class="sep">✦</span></span>
        <span v-for="item in tickerItems" :key="'b' + item" class="tick-item">{{ item }} <span class="sep">✦</span></span>
      </div>
    </div>

    <!-- BRANDS SECTION -->
    <section id="brands" class="brands-section">
      <div class="section-header">
        <div class="section-tag">BRENDLAR</div>
        <h2>Top Texnika <span class="accent">Brendlari</span></h2>
        <p>Dunyoning eng yaxshi ishlab chiqaruvchilaridan original mahsulotlar</p>
      </div>

      <div class="brands-grid">
        <div v-for="brand in brands" :key="brand.name" class="brand-card" :class="{ featured: brand.featured }" @mouseenter="hoveredBrand = brand.name" @mouseleave="hoveredBrand = ''">
          <div class="brand-glow" v-if="brand.featured"></div>
          <div class="brand-icon">{{ brand.icon }}</div>
          <h3 class="brand-name">{{ brand.name }}</h3>
          <p class="brand-desc">{{ brand.desc }}</p>
          <div class="brand-count">{{ brand.count }} mahsulot</div>
          <div class="brand-tag" v-if="brand.tag">{{ brand.tag }}</div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="about-section">
      <div class="about-bg-text">CONNECT</div>
      <div class="about-grid">
        <div class="about-left">
          <div class="section-tag">BIZ HAQIMIZDA</div>
          <h2>Texnologiyani <br /><span class="accent">Hammaga</span> Yetkazamiz</h2>
          <p class="about-text">2019-yildan buyon faoliyat yuritib kelayotgan ConnectMobile — O'zbekistondagi eng yirik texnika savdo platformasi. Biz faqat original va sertifikatlangan mahsulotlarni taqdim etamiz.</p>
          <div class="about-features">
            <div class="feat" v-for="f in features" :key="f.title">
              <div class="feat-icon">{{ f.icon }}</div>
              <div>
                <strong>{{ f.title }}</strong>
                <p>{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-right">
          <div class="about-cards">
            <div class="acard acard-1">
              <div class="acard-num">50,000+</div>
              <div class="acard-label">Xursand mijozlar</div>
            </div>
            <div class="acard acard-2">
              <div class="acard-num">6 yil</div>
              <div class="acard-label">Bozorda tajriba</div>
            </div>
            <div class="acard acard-3">
              <div class="acard-num">24/7</div>
              <div class="acard-label">Qo'llab-quvvatlash</div>
            </div>
            <div class="acard acard-4">
              <div class="acard-num">200+</div>
              <div class="acard-label">Hamkor brendlar</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APP SECTION -->
    <section id="app" class="app-section">
      <div class="app-bg-orb orb1"></div>
      <div class="app-bg-orb orb2"></div>
      <div class="app-content">
        <div class="app-left">
          <div class="section-tag light">MOBIL ILOVA</div>
          <h2>Ilovamizni <span class="accent">Yuklab Oling</span></h2>
          <p>Minglab mahsulotlar bir joyda. Qulay buyurtma berish, real-time kuzatish, eksklyuziv chegirmalar — barchasi siz uchun. iOS va Android uchun bepul!</p>
          <ul class="app-features">
            <li>📦 Real-vaqt buyurtma kuzatuvi</li>
            <li>💸 Ilovada maxsus chegirmalar</li>
            <li>🔔 Yangi mahsulot bildirishnomalar</li>
            <li>💬 Jonli chat qo'llab-quvvatlash</li>
            <li>🔐 Xavfsiz to'lov tizimlari</li>
            <li>⭐ Mahsulot sharhlari va baholash</li>
          </ul>
          <div class="store-buttons">
            <a href="#" class="store-btn app-store">
              <div class="store-icon">
                <svg viewBox="0 0 24 24" width="28" fill="currentColor">
                  <path
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                  />
                </svg>
              </div>
              <div class="store-text">
                <small>App Store'dan</small>
                <strong>Yuklab Oling</strong>
              </div>
            </a>
            <a href="#" class="store-btn play-store">
              <div class="store-icon">
                <svg viewBox="0 0 24 24" width="28" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l15 8.5c.6.34.6 1.26 0 1.6l-15 8.5c-.66.5-1.6.03-1.6-.8z" /></svg>
              </div>
              <div class="store-text">
                <small>Google Play'dan</small>
                <strong>Yuklab Oling</strong>
              </div>
            </a>
          </div>
          <div class="app-rating">
            <div class="stars">★★★★★</div>
            <span>4.9/5 — 12,000+ sharh</span>
          </div>
        </div>
        <div class="app-right">
          <div class="phones-showcase">
            <div class="showcase-phone p1">
              <div class="sp-screen">
                <div class="sp-header">🏠 Home</div>
                <div class="sp-banner">🔥 Flash Sale!</div>
                <div class="sp-item">📱 iPhone 16</div>
                <div class="sp-item">🖥️ MacBook Pro</div>
                <div class="sp-item">⌚ Apple Watch</div>
              </div>
            </div>
            <div class="showcase-phone p2">
              <div class="sp-screen">
                <div class="sp-header">🛒 Savat</div>
                <div class="sp-cart-item">
                  <span>Samsung S25</span>
                  <span class="price-tag">9.5M</span>
                </div>
                <div class="sp-cart-item">
                  <span>Galaxy Buds</span>
                  <span class="price-tag">1.2M</span>
                </div>
                <div class="sp-total">Jami: 10.7M so'm</div>
                <div class="sp-checkout">✓ Buyurtma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact-section">
      <div class="contact-inner">
        <div class="section-tag">BOG'LANISH</div>
        <h2>Biz Bilan <span class="accent">Bog'laning</span></h2>
        <p class="contact-sub">Savollaringiz bormi? Bizga yozing, 24/7 javob beramiz!</p>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="cinfo" v-for="c in contacts" :key="c.label">
              <div class="cinfo-icon">{{ c.icon }}</div>
              <div>
                <div class="cinfo-label">{{ c.label }}</div>
                <div class="cinfo-val">{{ c.value }}</div>
              </div>
            </div>
            <div class="socials">
              <a href="#" class="soc">Telegram</a>
              <a href="#" class="soc">Instagram</a>
              <a href="#" class="soc">Facebook</a>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label>Ismingiz</label>
                <input v-model="form.name" type="text" placeholder="Ism Familiya" />
              </div>
              <div class="form-group">
                <label>Telefon</label>
                <input v-model="form.phone" type="tel" placeholder="+998 XX XXX XX XX" />
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="form.email" type="email" placeholder="email@mail.com" />
            </div>
            <div class="form-group">
              <label>Xabar</label>
              <textarea v-model="form.message" rows="4" placeholder="Savolingizni yozing..."></textarea>
            </div>
            <button type="submit" class="btn-submit" :class="{ sent: formSent }">
              <span v-if="!formSent">Xabar Yuborish →</span>
              <span v-else>✓ Yuborildi!</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-logo">
          <span class="logo-icon">⬡</span>
          <span class="logo-text">Connect<em>Mobile</em></span>
        </div>
        <p class="footer-copy">© 2024 ConnectMobile. Barcha huquqlar himoyalangan.</p>
        <div class="footer-links">
          <a href="#">Maxfiylik</a>
          <a href="#">Shartlar</a>
          <a href="#">Yordam</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from "vue";

  export default defineComponent({
    name: "ConnectMobile",
    setup() {
      const scrolled = ref(false);
      const hoveredBrand = ref("");
      const formSent = ref(false);
      const form = ref({ name: "", phone: "", email: "", message: "" });

      const tickerItems = [" Apple", " Samsung", " Greenlion", " Sony", " Lenovo", " Huawei", " LG", " Xiaomi", " Canon", " Anker", " JBL", " Logitech", " TCL", " Bose", " Philips"];

      const brands = [
        { name: "Apple", icon: "", desc: "iPhone, MacBook, iPad, AirPods va boshqalar", count: "150+", featured: true, tag: "⭐ Top Brend" },
        { name: "Samsung", icon: "", desc: "Galaxy seriyasi, smartfonlar, planshetlar", count: "120+", featured: true, tag: "🔥 Eng Ko'p Sotiladi" },
        { name: "Greenlion", icon: "", desc: "Quvvat banklari, kabellar, aksessuarlar", count: "80+", featured: false, tag: null },
        { name: "Sony", icon: "", desc: "Naushniklar, kameralar, konsoli", count: "60+", featured: false, tag: null },
        { name: "Xiaomi", icon: "", desc: "Smartfonlar, uy texnikasi, gadjetlar", count: "90+", featured: false, tag: null },
        { name: "Lenovo", icon: "", desc: "Noutbuklar, planshetlar, aksessuarlar", count: "45+", featured: false, tag: null },
        { name: "Huawei", icon: "", desc: "Soatlar, smartfonlar, audio", count: "55+", featured: false, tag: null },
        { name: "Anker", icon: "", desc: "Zaryadlagichlar, kabellar, Hub'lar", count: "70+", featured: false, tag: null },
        { name: "JBL", icon: "", desc: "Kolonkalar, naushniklar, audio tizimlar", count: "35+", featured: false, tag: null },
        { name: "Logitech", icon: "", desc: "Sichqoncha, klaviatura, veb-kamera", count: "40+", featured: false, tag: null },
        { name: "Canon", icon: "", desc: "Kameralar, printerlar, opsiyalar", count: "30+", featured: false, tag: null },
        { name: "Bose", icon: "", desc: "Premium audio, naushniklar, kolonkalar", count: "25+", featured: false, tag: null },
      ];

      const features = [
        { icon: "", title: "Original Mahsulotlar", desc: "Faqat sertifikatlangan, original brendlar" },
        { icon: "", title: "Tez Yetkazib Berish", desc: "Toshkent bo'yicha 2-4 soat ichida" },
        { icon: "", title: "Rasmiy Kafolat", desc: "12 oydan 24 oygacha rasmiy kafolat" },
        { icon: "", title: "Bo'lib To'lash", desc: "0% foiz bilan 12 oygacha bo'lib to'lash" },
      ];

      const contacts = [
        { icon: "📞", label: "Telefon", value: "+998 71 200 20 20" },
        { icon: "📧", label: "Email", value: "info@connectmobile.uz" },
        { icon: "📍", label: "Manzil", value: "Toshkent, Chilonzor tumani" },
        { icon: "⏰", label: "Ish vaqti", value: "09:00 – 22:00, Har kuni" },
      ];

      const particleStyle = (i: number) => {
        const size = Math.random() * 4 + 2;
        return {
          width: size + "px",
          height: size + "px",
          left: ((i * 3.5) % 100) + "%",
          top: ((i * 7.3) % 100) + "%",
          animationDelay: i * 0.2 + "s",
          animationDuration: Math.random() * 10 + 8 + "s",
        };
      };

      const onScroll = () => {
        scrolled.value = window.scrollY > 60;
      };

      const submitForm = () => {
        formSent.value = true;
        setTimeout(() => {
          formSent.value = false;
          form.value = { name: "", phone: "", email: "", message: "" };
        }, 3000);
      };

      onMounted(() => window.addEventListener("scroll", onScroll));
      onUnmounted(() => window.removeEventListener("scroll", onScroll));

      return { scrolled, hoveredBrand, form, formSent, tickerItems, brands, features, contacts, particleStyle, submitForm };
    },
  });
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --brand: #00aeff;
    --brand-dark: #0088d4;
    --brand-glow: rgba(0, 174, 255, 0.3);
    --brand-subtle: rgba(0, 174, 255, 0.08);
    --dark: #050c14;
    --dark2: #0a1628;
    --dark3: #0f1f35;
    --surface: rgba(255, 255, 255, 0.04);
    --surface2: rgba(255, 255, 255, 0.08);
    --border: rgba(0, 174, 255, 0.15);
    --text: #e8f4ff;
    --text2: #7fa8cc;
    --white: #ffffff;
    --font-display: "Syne", sans-serif;
    --font-body: "Space Grotesk", sans-serif;
    --radius: 16px;
    --radius-lg: 24px;
  }

  .app {
    font-family: var(--font-body);
    background: var(--dark);
    color: var(--text);
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* PARTICLES */
  .particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .particle {
    position: absolute;
    background: var(--brand);
    border-radius: 50%;
    opacity: 0.15;
    animation: floatP ease-in-out infinite alternate;
  }
  @keyframes floatP {
    from {
      transform: translateY(0) scale(1);
      opacity: 0.1;
    }
    to {
      transform: translateY(-40px) scale(1.5);
      opacity: 0.3;
    }
  }

  /* NAVBAR */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 20px 0;
    transition: all 0.4s ease;
  }
  .navbar.scrolled {
    background: rgba(5, 12, 20, 0.92);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
  }
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex: 1;
  }
  .logo-icon {
    font-size: 28px;
    animation: spin 8s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .logo-text {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
  }
  .logo-text em {
    color: var(--brand);
    font-style: normal;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 32px;
  }
  .nav-links a {
    color: var(--text2);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: var(--brand);
  }
  .btn-nav {
    background: var(--brand);
    color: var(--dark);
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .btn-nav:hover {
    background: var(--white);
    transform: translateY(-2px);
  }

  /* HERO */
  .hero {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    padding: 120px 24px 80px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .hero-badge {
    display: inline-block;
    background: var(--brand-subtle);
    border: 1px solid var(--border);
    color: var(--brand);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 24px;
    animation: fadeUp 0.6s ease both;
  }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(42px, 5vw, 72px);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 24px;
  }
  .hero-title .line1 {
    display: block;
    color: var(--text);
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .hero-title .line2 {
    display: block;
    color: var(--text);
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .hero-title .line3 {
    display: block;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .hero-title em {
    color: var(--brand);
    font-style: normal;
    position: relative;
  }
  .hero-title em::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--brand);
    border-radius: 2px;
    animation: underlineGrow 0.8s 1s ease both;
  }
  @keyframes underlineGrow {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  .hero-sub {
    font-size: 17px;
    color: var(--text2);
    line-height: 1.7;
    margin-bottom: 36px;
    max-width: 480px;
    animation: fadeUp 0.6s 0.4s ease both;
  }
  .hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
    animation: fadeUp 0.6s 0.5s ease both;
  }
  .btn-primary {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--brand);
    color: var(--dark);
    padding: 14px 28px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.3s;
    box-shadow: 0 0 30px var(--brand-glow);
  }
  .btn-primary:hover {
    background: var(--white);
    transform: translateY(-3px);
    box-shadow: 0 0 50px var(--brand-glow);
  }
  .btn-ghost {
    display: flex;
    align-items: center;
    padding: 14px 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s;
  }
  .btn-ghost:hover {
    border-color: var(--brand);
    color: var(--brand);
    background: var(--brand-subtle);
  }
  .hero-stats {
    display: flex;
    gap: 40px;
    animation: fadeUp 0.6s 0.6s ease both;
  }
  .stat {
    display: flex;
    flex-direction: column;
  }
  .num {
    font-family: var(--font-display);
    font-size: 32px;
    font-weight: 800;
    color: var(--brand);
  }
  .lbl {
    font-size: 13px;
    color: var(--text2);
    font-weight: 500;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* PHONE MOCKUP */
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .phone-mockup {
    position: relative;
    animation: floatPhone 4s ease-in-out infinite alternate;
  }
  @keyframes floatPhone {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
  .phone-frame {
    width: 240px;
    height: 480px;
    background: #111;
    border-radius: 36px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    overflow: hidden;
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.6),
      inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    position: relative;
    z-index: 2;
  }
  .phone-screen {
    height: 100%;
    background: linear-gradient(180deg, #0a1628 0%, #050c14 100%);
    padding: 12px;
  }
  .screen-header {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: var(--text2);
    margin-bottom: 16px;
    padding: 4px 8px;
  }
  .app-logo-sm {
    text-align: center;
    font-family: var(--font-display);
    font-size: 14px;
    color: var(--brand);
    font-weight: 700;
    margin-bottom: 16px;
  }
  .screen-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .screen-card {
    background: var(--surface2);
    border-radius: 10px;
    padding: 10px 12px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: pulseCard 2s ease-in-out infinite alternate;
  }
  .screen-card span {
    font-size: 20px;
  }
  .screen-card p {
    font-size: 11px;
    font-weight: 600;
    color: var(--text);
    margin: 0;
  }
  .screen-card small {
    font-size: 10px;
    color: var(--brand);
  }
  .ac1 {
    animation-delay: 0s;
  }
  .ac2 {
    animation-delay: 0.5s;
  }
  .ac3 {
    animation-delay: 1s;
  }
  @keyframes pulseCard {
    from {
      border-color: var(--border);
    }
    to {
      border-color: var(--brand);
      background: rgba(0, 174, 255, 0.1);
    }
  }
  .screen-nav {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
  }
  .phone-glow {
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle, var(--brand-glow) 0%, transparent 70%);
    z-index: 1;
    animation: glowPulse 3s ease-in-out infinite alternate;
  }
  @keyframes glowPulse {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  .floating-badge {
    position: absolute;
    background: var(--dark3);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    z-index: 3;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  .fb1 {
    top: 40px;
    right: -80px;
    animation: floatBadge 3s 0s ease-in-out infinite alternate;
  }
  .fb2 {
    top: 50%;
    right: -90px;
    animation: floatBadge 3s 1s ease-in-out infinite alternate;
  }
  .fb3 {
    bottom: 60px;
    left: -90px;
    animation: floatBadge 3s 2s ease-in-out infinite alternate;
  }
  @keyframes floatBadge {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }

  /* TICKER */
  .ticker-wrap {
    overflow: hidden;
    background: var(--brand);
    padding: 14px 0;
    position: relative;
    z-index: 2;
  }
  .ticker {
    display: flex;
    animation: tickerScroll 30s linear infinite;
    white-space: nowrap;
  }
  .tick-item {
    font-size: 14px;
    font-weight: 700;
    color: var(--dark);
    padding: 0 8px;
  }
  .sep {
    color: rgba(0, 0, 0, 0.4);
    margin: 0 4px;
  }
  @keyframes tickerScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  /* BRANDS SECTION */
  .brands-section {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 24px;
  }
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  .section-tag {
    display: inline-block;
    color: var(--brand);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 16px;
    background: var(--brand-subtle);
    padding: 6px 16px;
    border-radius: 50px;
    border: 1px solid var(--border);
  }
  .section-tag.light {
    background: rgba(0, 174, 255, 0.2);
  }
  .section-header h2,
  .about-left h2,
  .app-content h2,
  .contact-inner h2 {
    font-family: var(--font-display);
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 16px;
  }
  .section-header p {
    color: var(--text2);
    font-size: 17px;
  }
  .accent {
    color: var(--brand);
  }

  .brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }
  .brand-card {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px 24px;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  .brand-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--brand-subtle), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .brand-card:hover::before {
    opacity: 1;
  }
  .brand-card:hover {
    border-color: var(--brand);
    transform: translateY(-6px);
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.4),
      0 0 30px var(--brand-glow);
  }
  .brand-card.featured {
    border-color: var(--brand);
    background: linear-gradient(135deg, rgba(0, 174, 255, 0.1), var(--surface));
  }
  .brand-glow {
    position: absolute;
    top: -30px;
    right: -30px;
    width: 100px;
    height: 100px;
    background: var(--brand-glow);
    border-radius: 50%;
    filter: blur(30px);
  }
  .brand-icon {
    font-size: 40px;
    margin-bottom: 14px;
    display: block;
  }
  .brand-name {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .brand-desc {
    font-size: 13px;
    color: var(--text2);
    line-height: 1.6;
    margin-bottom: 14px;
  }
  .brand-count {
    font-size: 12px;
    color: var(--brand);
    font-weight: 600;
  }
  .brand-tag {
    position: absolute;
    top: 14px;
    right: 14px;
    background: var(--brand);
    color: var(--dark);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 50px;
  }

  /* ABOUT */
  .about-section {
    position: relative;
    z-index: 1;
    background: var(--dark2);
    padding: 100px 0;
    overflow: hidden;
  }
  .about-bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-display);
    font-size: 160px;
    font-weight: 800;
    color: rgba(0, 174, 255, 0.03);
    white-space: nowrap;
    pointer-events: none;
    z-index: 0;
    letter-spacing: 20px;
  }
  .about-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .about-left h2 {
    margin-bottom: 20px;
  }
  .about-text {
    color: var(--text2);
    line-height: 1.8;
    font-size: 16px;
    margin-bottom: 36px;
  }
  .about-features {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .feat {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .feat-icon {
    font-size: 24px;
    background: var(--brand-subtle);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--border);
    flex-shrink: 0;
  }
  .feat strong {
    display: block;
    font-size: 15px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .feat p {
    font-size: 13px;
    color: var(--text2);
    margin: 0;
  }
  .about-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .acard {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px 24px;
    text-align: center;
    transition: all 0.3s;
  }
  .acard:hover {
    border-color: var(--brand);
    transform: translateY(-4px);
  }
  .acard-1 {
    animation: float1 4s ease-in-out infinite alternate;
  }
  .acard-2 {
    animation: float1 4s 1s ease-in-out infinite alternate;
  }
  .acard-3 {
    animation: float1 4s 2s ease-in-out infinite alternate;
  }
  .acard-4 {
    animation: float1 4s 3s ease-in-out infinite alternate;
  }
  @keyframes float1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-8px);
    }
  }
  .acard-num {
    font-family: var(--font-display);
    font-size: 36px;
    font-weight: 800;
    color: var(--brand);
    margin-bottom: 8px;
  }
  .acard-label {
    font-size: 13px;
    color: var(--text2);
  }

  /* APP SECTION */
  .app-section {
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 100px 0;
    background: var(--dark);
  }
  .app-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .orb1 {
    width: 400px;
    height: 400px;
    background: rgba(0, 174, 255, 0.15);
    top: -100px;
    right: -100px;
    animation: orbMove 8s ease-in-out infinite alternate;
  }
  .orb2 {
    width: 300px;
    height: 300px;
    background: rgba(0, 100, 200, 0.1);
    bottom: -50px;
    left: -50px;
    animation: orbMove 8s 4s ease-in-out infinite alternate;
  }
  @keyframes orbMove {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(40px, 40px);
    }
  }
  .app-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .app-left h2 {
    margin-bottom: 16px;
  }
  .app-left > p {
    color: var(--text2);
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 28px;
  }
  .app-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
  }
  .app-features li {
    font-size: 15px;
    color: var(--text2);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .store-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .store-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 14px 20px;
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s;
    min-width: 180px;
  }
  .store-btn:hover {
    border-color: var(--brand);
    background: var(--brand-subtle);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  .store-icon {
    font-size: 28px;
  }
  .store-text small {
    display: block;
    font-size: 11px;
    color: var(--text2);
  }
  .store-text strong {
    font-size: 15px;
    font-weight: 700;
  }
  .app-rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .stars {
    color: #ffd700;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .app-rating span {
    color: var(--text2);
    font-size: 14px;
  }

  /* PHONES SHOWCASE */
  .phones-showcase {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .showcase-phone {
    width: 180px;
    height: 340px;
    background: #0a1628;
    border-radius: 28px;
    border: 2px solid var(--border);
    overflow: hidden;
    position: absolute;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  .p1 {
    left: 10%;
    z-index: 2;
    transform: rotate(-6deg);
    animation: showFloat 3s ease-in-out infinite alternate;
  }
  .p2 {
    right: 10%;
    z-index: 3;
    transform: rotate(4deg);
    animation: showFloat 3s 1.5s ease-in-out infinite alternate;
  }
  @keyframes showFloat {
    from {
      transform: rotate(-6deg) translateY(0);
    }
    to {
      transform: rotate(-6deg) translateY(-12px);
    }
  }
  .p2 {
    animation: showFloat2 3s 1.5s ease-in-out infinite alternate;
  }
  @keyframes showFloat2 {
    from {
      transform: rotate(4deg) translateY(0);
    }
    to {
      transform: rotate(4deg) translateY(-12px);
    }
  }
  .sp-screen {
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sp-header {
    font-size: 11px;
    color: var(--brand);
    font-weight: 700;
  }
  .sp-banner {
    background: linear-gradient(90deg, var(--brand), var(--brand-dark));
    color: var(--dark);
    padding: 8px;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
  }
  .sp-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 11px;
    color: var(--text);
    animation: itemPulse 2s ease-in-out infinite alternate;
  }
  @keyframes itemPulse {
    from {
      border-color: var(--border);
    }
    to {
      border-color: var(--brand);
    }
  }
  .sp-cart-item {
    background: var(--surface);
    border-radius: 8px;
    padding: 8px 10px;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
  }
  .price-tag {
    color: var(--brand);
    font-weight: 700;
  }
  .sp-total {
    background: var(--brand-subtle);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 11px;
    color: var(--brand);
    font-weight: 600;
  }
  .sp-checkout {
    background: var(--brand);
    color: var(--dark);
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
  }

  /* CONTACT */
  .contact-section {
    position: relative;
    z-index: 1;
    background: var(--dark2);
    padding: 100px 0;
  }
  .contact-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .contact-sub {
    color: var(--text2);
    font-size: 17px;
    margin-bottom: 60px;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    align-items: start;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .cinfo {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .cinfo-icon {
    font-size: 22px;
    background: var(--brand-subtle);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--border);
  }
  .cinfo-label {
    font-size: 12px;
    color: var(--text2);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .cinfo-val {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-top: 2px;
  }
  .socials {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  .soc {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.2s;
  }
  .soc:hover {
    border-color: var(--brand);
    color: var(--brand);
    background: var(--brand-subtle);
  }

  /* FORM */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form-group label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text2);
  }
  .form-group input,
  .form-group textarea {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 12px 16px;
    border-radius: 10px;
    font-family: var(--font-body);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--brand);
  }
  .form-group textarea {
    resize: vertical;
  }
  .btn-submit {
    background: var(--brand);
    color: var(--dark);
    padding: 16px 32px;
    border: none;
    border-radius: 12px;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 30px var(--brand-glow);
  }
  .btn-submit:hover {
    background: var(--white);
    transform: translateY(-2px);
  }
  .btn-submit.sent {
    background: #22c55e;
    color: var(--white);
  }

  /* FOOTER */
  .footer {
    background: #020810;
    border-top: 1px solid var(--border);
    padding: 40px 24px;
  }
  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .footer-copy {
    color: var(--text2);
    font-size: 13px;
  }
  .footer-links {
    display: flex;
    gap: 20px;
  }
  .footer-links a {
    color: var(--text2);
    text-decoration: none;
    font-size: 13px;
    transition: color 0.2s;
  }
  .footer-links a:hover {
    color: var(--brand);
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .hero-sub {
      max-width: 100%;
    }
    .hero-actions {
      justify-content: center;
    }
    .hero-stats {
      justify-content: center;
    }
    .hero-visual {
      display: none;
    }
    .about-grid {
      grid-template-columns: 1fr;
    }
    .app-content {
      grid-template-columns: 1fr;
    }
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .form-row {
      grid-template-columns: 1fr;
    }
    .nav-links {
      display: none;
    }
    .footer-inner {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
