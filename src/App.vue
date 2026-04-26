<script setup lang="ts">
  import { useHead } from "@vueuse/head";
  import { ref, onMounted, onUnmounted } from "vue";

  useHead({
    title: "Connect Mobile - Original Texnikalar va Aksessuarlar",
    meta: [
      { name: "description", content: "Smartfonlar, noutbuklar, original aksessuarlar va eng so'nggi devicelar faqat Connect Mobile-da. Kafolatlangan brend mahsulotlari." },
      { property: "og:title", content: "Connect Mobile - Sifatli Texnikalar Olami" },
      { property: "og:image", content: "https://saytingiz.uz/path-to-your-logo.png" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0" },
    ],
    htmlAttrs: { lang: "uz" },
  });

  // Dark/Light mode
  const isDark = ref(true);
  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
  }

  // Mobile menu
  const menuOpen = ref(false);
  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
  }
  function closeMenu() {
    menuOpen.value = false;
  }

  // Navbar scroll shadow
  const navScrolled = ref(false);
  function handleScroll() {
    navScrolled.value = window.scrollY > 20;
  }

  // Scroll reveal
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  onMounted(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    window.addEventListener("scroll", handleScroll);
    initReveal();
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const categories = [
    {
      id: 1,
      name: "Smartfonlar",
      count: "150+ model",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    },
    {
      id: 2,
      name: "Noutbuklar",
      count: "80+ model",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    },
    {
      id: 3,
      name: "Aksessuarlar",
      count: "300+ mahsulot",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    },
    {
      id: 4,
      name: "Aqlli Soatlar",
      count: "60+ model",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    },
  ];

  const brands = ["Apple", "Samsung", "Xiaomi", "Sony", "Huawei", "OPPO", "OnePlus", "Realme"];

  const features = [
    {
      title: "100% Original",
      text: "Barcha mahsulotlarimiz rasmiy distribyutorlardan keltiriladi. Soxta mahsulot yo'q, hech qachon.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    },
    {
      title: "Rasmiy Kafolat",
      text: "Barcha mahsulotlarga 1 yildan 3 yilgacha rasmiy ishlab chiqaruvchi kafolati beriladi.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8v4h8V3z"/></svg>`,
    },
    {
      title: "Tezkor Yetkazish",
      text: "Toshkent bo'ylab 2 soatda, butun O'zbekiston bo'ylab esa keyingi kun yetkazib beramiz.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    },
    {
      title: "Mutaxassis Maslahat",
      text: "Bizning tajribali mutaxassislarimiz sizga eng mos qurilmani tanlashda bepul yordam beradi.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    },
    {
      title: "Qulay To'lov",
      text: "Naqd pul, karta, hamda 0% foiz bilan bo'lib to'lash imkoniyati mavjud.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    },
    {
      title: "24/7 Qo'llab-quvvatlash",
      text: "Savol yoki muammo bo'lsa, bizning jamoamiz doimo siz uchun tayyor.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    },
  ];

  const aboutFeatures = ["100% Original va sertifikatlangan mahsulotlar", "Rasmiy ishlab chiqaruvchi kafolati", "Toshkent bo'ylab 2 soatda yetkazib berish", "0% foiz bilan bo'lib to'lash imkoniyati"];

  const stats = [
    { num: "500+", label: "Mahsulot turi" },
    { num: "10k+", label: "Mamnun mijoz" },
    { num: "5★", label: "Mijoz baholari" },
    { num: "3yil", label: "Kafolat" },
  ];
</script>

<template>
  <!-- NAV -->
  <nav :class="['navbar', { scrolled: navScrolled }]">
    <a href="#" class="nav-logo"> <span class="logo-c">CONNECT</span><span class="logo-m">MOBILE</span> </a>
    <div class="nav-links">
      <a href="#katalog" class="nav-link">Katalog</a>
      <a href="#brendlar" class="nav-link">Brendlar</a>
      <a href="#haqimizda" class="nav-link">Biz haqimizda</a>
      <a href="#ilova" class="nav-link">Ilova</a>
      <a href="#aloqa" class="nav-link nav-cta">Bog'lanish</a>
      <button class="theme-btn" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
        <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
    <!-- Mobile controls -->
    <div class="nav-mobile-controls">
      <button class="theme-btn" @click="toggleTheme">
        <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div class="mobile-menu" :class="{ open: menuOpen }">
    <a href="#katalog" @click="closeMenu">Katalog</a>
    <a href="#brendlar" @click="closeMenu">Brendlar</a>
    <a href="#haqimizda" @click="closeMenu">Biz haqimizda</a>
    <a href="#ilova" @click="closeMenu">Ilova</a>
    <a href="#aloqa" @click="closeMenu" class="mobile-cta">Bog'lanish →</a>
  </div>

  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-dots"></div>
      <div class="hero-inner">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Toshkentdagi eng yaxshi texno do'kon
        </div>
        <h1>Texnologiyalar<br /><span class="accent">Olamiga Xush</span> Kelibsiz</h1>
        <p>Original smartfonlar, noutbuklar va aksessuarlar. 100% rasmiy kafolat bilan.</p>
        <div class="hero-btns">
          <a href="#katalog" class="btn-prim">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            Katalogni ko'rish
          </a>
          <a href="#haqimizda" class="btn-sec">Biz haqimizda</a>
        </div>
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat">
            <div class="stat-num">{{ stat.num }}</div>
            <div class="stat-lbl">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section id="katalog" class="section">
      <div class="sec-head reveal">
        <div class="sec-label">Toifalar</div>
        <div class="sec-title">Mahsulot Katalogi</div>
        <div class="sec-sub">Eng so'nggi texnologiyalar sizni kutmoqda — bir joyda hamma narsa.</div>
      </div>
      <div class="cat-grid">
        <div v-for="cat in categories" :key="cat.id" class="cat-card reveal">
          <div class="cat-icon" v-html="cat.icon"></div>
          <div class="cat-name">{{ cat.name }}</div>
          <div class="cat-count">{{ cat.count }}</div>
        </div>
      </div>
    </section>

    <!-- BRANDS -->
    <section id="brendlar" class="section section-brands">
      <div class="sec-head reveal">
        <div class="sec-label">Brendlar</div>
        <div class="sec-title">Original Hamkorlar</div>
      </div>
      <div class="brand-scroll reveal">
        <div class="brand-track">
          <span v-for="brand in [...brands, ...brands]" :key="Math.random()" class="brand-item">{{ brand }}</span>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="afzalliklar" class="section">
      <div class="sec-head reveal">
        <div class="sec-label">Afzalliklar</div>
        <div class="sec-title">Nima uchun biz?</div>
        <div class="sec-sub">Minglab mijozlar Connect Mobile'ni tanlashda davom etmoqda.</div>
      </div>
      <div class="feat-grid">
        <div v-for="feat in features" :key="feat.title" class="feat-card reveal">
          <div class="feat-ico" v-html="feat.icon"></div>
          <div class="feat-title">{{ feat.title }}</div>
          <div class="feat-text">{{ feat.text }}</div>
        </div>
      </div>
    </section>

    <!-- APP DOWNLOAD -->
    <section id="ilova" class="section section-app">
      <div class="app-grid">
        <div class="app-text reveal">
          <div class="sec-label">Mobil Ilova</div>
          <div class="sec-title">Har doim qo'lingizda!</div>
          <p class="about-desc">Connect Mobile ilovasini yuklab oling va eng qulay xarid tajribasini his eting. Eksklyuziv chegirmalar, buyurtma kuzatuvi va tezkor xarid — barchasi bir ilovada.</p>
          <div class="app-perks">
            <div class="app-perk">
              <div class="app-perk-ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <span>Ilk xaridda <strong>10% chegirma</strong></span>
            </div>
            <div class="app-perk">
              <div class="app-perk-ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>Real vaqtda buyurtma kuzatuvi</span>
            </div>
            <div class="app-perk">
              <div class="app-perk-ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </div>
              <span>Narx o'zgarishida bildirishnoma</span>
            </div>
            <div class="app-perk">
              <div class="app-perk-ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <span>Tez va xavfsiz to'lov</span>
            </div>
          </div>
          <div class="store-btns">
            <a href="#" class="store-btn store-apple">
              <svg class="store-ico" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              <div class="store-txt">
                <span class="store-sub">App Store'dan yuklab oling</span>
                <span class="store-name">App Store</span>
              </div>
            </a>
            <a href="#" class="store-btn store-google">
              <svg class="store-ico" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.18 23.76c.3.17.64.24.99.2l13.23-12.23L13.54 8 3.18 23.76zM20.6 10.27l-2.31-1.35-3.91 3.62 3.91 3.61 2.29-1.33c.65-.38 1.09-1.07 1.09-1.87s-.42-1.5-1.07-1.68zM2.14.47C2.05.68 2 .92 2 1.19v21.62c0 .27.05.51.15.72L13.54 12 2.14.47zM17.4 2.24L4.17.03c-.35-.04-.69.03-.99.2L14.54 11.5 17.4 2.24z"
                />
              </svg>
              <div class="store-txt">
                <span class="store-sub">Google Play'dan yuklab oling</span>
                <span class="store-name">Google Play</span>
              </div>
            </a>
          </div>
          <div class="app-rating">
            <div class="rating-stars">
              <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span class="rating-txt">4.9 — 10,000+ sharh</span>
          </div>
        </div>

        <div class="app-mockup reveal">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="phone-statusbar">
                <span>9:41</span>
                <div class="phone-status-icons">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
                  </svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="7" width="16" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none" />
                    <path d="M22 11v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
              <div class="phone-header">
                <div class="phone-logo">C<span>M</span></div>
                <div class="phone-search">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  Qidirish...
                </div>
              </div>
              <div class="phone-banner">
                <div class="phone-banner-tag">CHEGIRMA</div>
                <div class="phone-banner-title">iPhone 15 Pro</div>
                <div class="phone-banner-price">dan 14,990,000 so'm</div>
              </div>
              <div class="phone-cats">
                <div class="phone-cat active">Barchasi</div>
                <div class="phone-cat">📱 Telefon</div>
                <div class="phone-cat">💻 Noutbuk</div>
              </div>
              <div class="phone-products">
                <div class="phone-product">
                  <div class="phone-product-img">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                  <div class="phone-product-info">
                    <div class="phone-product-name">Samsung S24</div>
                    <div class="phone-product-price">8,990,000</div>
                  </div>
                  <div class="phone-add-btn">+</div>
                </div>
                <div class="phone-product">
                  <div class="phone-product-img">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                  <div class="phone-product-info">
                    <div class="phone-product-name">Xiaomi 14</div>
                    <div class="phone-product-price">6,490,000</div>
                  </div>
                  <div class="phone-add-btn">+</div>
                </div>
              </div>
              <div class="phone-navbar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>
          <div class="phone-glow"></div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="haqimizda" class="section section-about">
      <div class="about-grid">
        <div class="about-text reveal">
          <div class="sec-label">Biz haqimizda</div>
          <div class="sec-title">Connect Mobile — Ishonchli Hamkoringiz</div>
          <p class="about-desc">
            2021 yildan buyon biz mijozlarimizga eng yaxshi texnologiyalarni eng qulay narxlarda taklif etib kelmoqdamiz. Bizning maqsadimiz — har bir mijozga kerakli qurilmani topib, uni xursand qilish.
          </p>
          <div class="feat-list">
            <div v-for="item in aboutFeatures" :key="item" class="feat-row">
              <div class="feat-row-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div class="feat-row-text">{{ item }}</div>
            </div>
          </div>
        </div>
        <div class="about-visual reveal">
          <div class="about-logo-big"><span class="lc">CONNECT</span><br /><span class="lm">MOBILE</span></div>
          <div class="since">Since 2021</div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer id="aloqa">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo"><span class="logo-c">CONNECT</span><span class="logo-m">MOBILE</span></div>
        <p class="footer-desc">Sizning ishonchli texnologik hamkoringiz. Original mahsulotlar, eng yaxshi narxlar.</p>
        <div class="social-row">
          <a class="soc-btn" href="#" title="Telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2z" />
            </svg>
          </a>
          <a class="soc-btn" href="#" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a class="soc-btn" href="#" title="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
              />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Sahifalar</h4>
        <div class="footer-links">
          <a href="#katalog">Katalog</a>
          <a href="#brendlar">Brendlar</a>
          <a href="#afzalliklar">Afzalliklar</a>
          <a href="#haqimizda">Biz haqimizda</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Aloqa</h4>
        <div class="contact-item">
          <div class="contact-ico">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <span class="contact-txt">+998 90 123 45 67</span>
        </div>
        <div class="contact-item">
          <div class="contact-ico">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span class="contact-txt">Toshkent, Chilonzor tumani</span>
        </div>
        <div class="contact-item">
          <div class="contact-ico">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span class="contact-txt">Har kuni 9:00 – 21:00</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 Connect Mobile. Barcha huquqlar himoyalangan.</p>
      <p class="footer-city">Toshkent, O'zbekiston</p>
    </div>
  </footer>
</template>

<style>
  /* ---- GLOBAL VARIABLES ---- */
  :root,
  [data-theme="dark"] {
    --bg: #0a0a0f;
    --bg2: #111118;
    --bg3: #16161f;
    --surface: #1c1c28;
    --surface2: #22222f;
    --border: rgba(255, 255, 255, 0.07);
    --border2: rgba(255, 255, 255, 0.13);
    --text: #f0f0f8;
    --text2: #a0a0b8;
    --text3: #606078;
    --accent: #3b82f6;
    --accent2: #60a5fa;
    --accent-glow: rgba(59, 130, 246, 0.15);
    --radius: 14px;
    --radius-sm: 8px;
    --trans: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="light"] {
    --bg: #f5f5f7;
    --bg2: #ffffff;
    --bg3: #ececf0;
    --surface: #ffffff;
    --surface2: #f0f0f5;
    --border: rgba(0, 0, 0, 0.08);
    --border2: rgba(0, 0, 0, 0.14);
    --text: #0a0a14;
    --text2: #44445a;
    --text3: #8888a0;
    --accent: #2563eb;
    --accent2: #3b82f6;
    --accent-glow: rgba(37, 99, 235, 0.1);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-size: 16px;
    line-height: 1.6;
    transition:
      background 0.4s,
      color 0.4s;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
  }

  /* ---- NAVBAR ---- */
  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    height: 64px;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 0.5px solid var(--border);
    transition:
      background 0.4s,
      box-shadow 0.3s;
  }

  [data-theme="light"] .navbar {
    background: rgba(245, 245, 247, 0.88);
  }

  .navbar.scrolled {
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);
  }

  .nav-logo {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .logo-c {
    color: var(--text);
  }
  .logo-m {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .nav-link {
    font-size: 14px;
    font-weight: 500;
    color: var(--text2);
    padding: 6px 14px;
    border-radius: 20px;
    transition: var(--trans);
  }

  .nav-link:hover {
    color: var(--text);
    background: var(--surface);
  }

  .nav-cta {
    background: var(--accent);
    color: #fff !important;
    margin-left: 4px;
  }

  .nav-cta:hover {
    background: var(--accent2) !important;
    transform: scale(1.03);
  }

  .theme-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--surface);
    border: 0.5px solid var(--border2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--trans);
    margin-left: 4px;
    color: var(--text2);
  }

  .theme-btn:hover {
    background: var(--surface2);
    transform: rotate(20deg);
  }

  .nav-mobile-controls {
    display: none;
    align-items: center;
    gap: 8px;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 6px;
    background: var(--surface);
    border: 0.5px solid var(--border2);
    border-radius: var(--radius-sm);
  }

  .hamburger span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: var(--trans);
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* ---- MOBILE MENU ---- */
  .mobile-menu {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg2);
    border-bottom: 0.5px solid var(--border);
    padding: 12px 5%;
    z-index: 998;
    flex-direction: column;
    gap: 4px;
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-menu a {
    font-size: 15px;
    font-weight: 500;
    color: var(--text2);
    padding: 10px 14px;
    border-radius: var(--radius-sm);
    transition: var(--trans);
  }

  .mobile-menu a:hover {
    color: var(--text);
    background: var(--surface);
  }

  .mobile-menu .mobile-cta {
    color: var(--accent);
    font-weight: 700;
  }

  /* ---- HERO ---- */
  .hero {
    min-height: 100vh;
    padding: 120px 5% 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
    animation: heroPulse 6s ease-in-out infinite;
  }

  .hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, var(--border2) 1px, transparent 1px);
    background-size: 36px 36px;
    opacity: 0.5;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
  }

  [data-theme="light"] .hero-dots {
    opacity: 0.3;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 800px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-glow);
    border: 0.5px solid var(--accent);
    color: var(--accent2);
    font-size: 13px;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 28px;
    animation: fadeUp 0.6s ease both;
  }

  .badge-dot {
    width: 7px;
    height: 7px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .hero h1 {
    font-size: clamp(36px, 6vw, 72px);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.1;
    color: var(--text);
    animation: fadeUp 0.7s 0.1s ease both;
  }

  .hero h1 .accent {
    color: var(--accent);
  }

  .hero > .hero-inner > p {
    font-size: clamp(16px, 2vw, 20px);
    color: var(--text2);
    max-width: 600px;
    margin: 20px auto 36px;
    animation: fadeUp 0.7s 0.2s ease both;
  }

  .hero-btns {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.3s ease both;
  }

  .btn-prim {
    background: var(--accent);
    color: #fff;
    padding: 13px 28px;
    border-radius: var(--radius);
    font-size: 15px;
    font-weight: 600;
    transition: var(--trans);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-prim:hover {
    transform: translateY(-2px);
    background: var(--accent2);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  }

  .btn-sec {
    background: var(--surface);
    color: var(--text);
    padding: 13px 28px;
    border-radius: var(--radius);
    font-size: 15px;
    font-weight: 600;
    border: 0.5px solid var(--border2);
    transition: var(--trans);
  }

  .btn-sec:hover {
    background: var(--surface2);
    transform: translateY(-2px);
  }

  .hero-stats {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 60px;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.4s ease both;
  }

  .stat {
    text-align: center;
  }

  .stat-num {
    font-size: 28px;
    font-weight: 800;
    color: var(--text);
  }

  .stat-lbl {
    font-size: 13px;
    color: var(--text3);
    margin-top: 2px;
  }

  /* ---- SECTIONS ---- */
  .section {
    padding: 100px 5%;
  }

  .section-brands {
    background: var(--bg2);
    border-top: 0.5px solid var(--border);
    border-bottom: 0.5px solid var(--border);
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .section-about {
    background: var(--bg2);
  }

  .sec-head {
    text-align: center;
    margin-bottom: 60px;
  }

  .sec-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent);
    margin-bottom: 14px;
  }

  .sec-label::before {
    content: "";
    width: 20px;
    height: 1.5px;
    background: var(--accent);
    display: inline-block;
  }

  .sec-title {
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.2;
    color: var(--text);
    margin-bottom: 12px;
  }

  .sec-sub {
    font-size: 17px;
    color: var(--text2);
    max-width: 540px;
    margin: 0 auto;
  }

  /* ---- CATEGORIES ---- */
  .cat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .cat-card {
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 24px;
    text-align: center;
    cursor: pointer;
    transition: var(--trans);
    position: relative;
    overflow: hidden;
  }

  .cat-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--accent-glow);
    opacity: 0;
    transition: var(--trans);
    border-radius: var(--radius);
  }

  .cat-card:hover::before {
    opacity: 1;
  }

  .cat-card:hover {
    border-color: var(--accent);
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(59, 130, 246, 0.12);
  }

  .cat-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    background: var(--surface2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--trans);
    color: var(--accent);
    position: relative;
    z-index: 1;
  }

  .cat-card:hover .cat-icon {
    background: var(--accent);
    color: #fff;
    transform: rotate(-5deg) scale(1.1);
  }

  .cat-name {
    font-size: 17px;
    font-weight: 700;
    color: var(--text);
    position: relative;
    z-index: 1;
  }

  .cat-count {
    font-size: 13px;
    color: var(--text3);
    margin-top: 4px;
    position: relative;
    z-index: 1;
  }

  /* ---- BRANDS ---- */
  .brand-scroll {
    overflow: hidden;
  }

  .brand-track {
    display: flex;
    align-items: center;
    gap: 60px;
    animation: scrollLeft 20s linear infinite;
    width: max-content;
  }

  .brand-scroll:hover .brand-track {
    animation-play-state: paused;
  }

  .brand-item {
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--text3);
    text-transform: uppercase;
    white-space: nowrap;
    transition: var(--trans);
  }

  .brand-item:hover {
    color: var(--accent);
    transform: scale(1.05);
  }

  /* ---- FEATURES ---- */
  .feat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 60px;
  }

  .feat-card {
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: var(--radius);
    padding: 32px 28px;
    transition: var(--trans);
    position: relative;
  }

  .feat-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 24px;
    right: 24px;
    height: 2px;
    background: var(--accent);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .feat-card:hover::after {
    transform: scaleX(1);
  }

  .feat-card:hover {
    border-color: var(--border2);
    transform: translateY(-4px);
  }

  .feat-ico {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--accent);
  }

  .feat-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 8px;
  }

  .feat-text {
    font-size: 14px;
    color: var(--text2);
    line-height: 1.7;
  }

  /* ---- ABOUT ---- */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .about-desc {
    color: var(--text2);
    font-size: 16px;
    line-height: 1.8;
    margin: 20px 0 32px;
  }

  .feat-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .feat-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-sm);
    transition: var(--trans);
  }

  .feat-row:hover {
    border-color: var(--accent);
    transform: translateX(6px);
  }

  .feat-row-ico {
    width: 36px;
    height: 36px;
    background: var(--accent-glow);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--accent);
  }

  .feat-row-text {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
  }

  .about-visual {
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: var(--radius);
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .about-visual::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 30%, var(--accent-glow) 0%, transparent 60%);
    animation: heroPulse 4s infinite;
  }

  .about-logo-big {
    font-size: 48px;
    font-weight: 900;
    letter-spacing: -2px;
    text-align: center;
    position: relative;
    z-index: 1;
    line-height: 1.1;
  }

  .about-logo-big .lc {
    color: var(--text);
  }
  .about-logo-big .lm {
    color: var(--accent);
  }

  .since {
    font-size: 13px;
    color: var(--text3);
    margin-top: 10px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  /* ---- FOOTER ---- */
  footer {
    background: var(--bg2);
    border-top: 0.5px solid var(--border);
    padding: 60px 5% 30px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 48px;
  }

  .footer-logo {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .footer-desc {
    font-size: 14px;
    color: var(--text2);
    line-height: 1.7;
    max-width: 280px;
  }

  .social-row {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .soc-btn {
    width: 38px;
    height: 38px;
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--trans);
    color: var(--text2);
  }

  .soc-btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
    transform: translateY(-2px);
  }

  footer h4 {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text3);
    margin-bottom: 18px;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-links a {
    font-size: 14px;
    color: var(--text2);
    transition: var(--trans);
  }

  .footer-links a:hover {
    color: var(--accent);
    padding-left: 6px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .contact-ico {
    width: 32px;
    height: 32px;
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--accent);
  }

  .contact-txt {
    font-size: 14px;
    color: var(--text2);
  }

  .footer-bottom {
    padding-top: 28px;
    border-top: 0.5px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-bottom p {
    font-size: 13px;
    color: var(--text3);
  }

  /* ---- SCROLL REVEAL ---- */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 0.7s ease,
      transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: none;
  }

  /* ---- ANIMATIONS ---- */
  @keyframes heroPulse {
    0%,
    100% {
      opacity: 0.7;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.4);
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .about-visual {
      aspect-ratio: auto;
      padding: 60px;
    }

    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    .section {
      padding: 70px 5%;
    }

    .nav-links {
      display: none;
    }
    .nav-mobile-controls {
      display: flex;
    }

    .hero-stats {
      gap: 24px;
    }

    .cat-grid {
      grid-template-columns: 1fr 1fr;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .footer-desc {
      max-width: 100%;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 420px) {
    .cat-grid {
      grid-template-columns: 1fr;
    }
    .hero-stats {
      gap: 16px;
    }
    .stat-num {
      font-size: 22px;
    }
  }

  /* ---- APP DOWNLOAD SECTION ---- */
  .section-app {
    background: var(--bg2);
    border-top: 0.5px solid var(--border);
    overflow: hidden;
  }

  .app-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .app-perks {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 28px 0 36px;
  }

  .app-perk {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--text2);
  }

  .app-perk strong {
    color: var(--text);
    font-weight: 700;
  }

  .app-perk-ico {
    width: 32px;
    height: 32px;
    background: var(--accent-glow);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--accent);
  }

  .store-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .store-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: var(--radius);
    border: 0.5px solid var(--border2);
    background: var(--surface);
    transition: var(--trans);
    cursor: pointer;
    min-width: 180px;
  }

  .store-btn:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
  }

  .store-apple {
    color: var(--text);
  }
  .store-google {
    color: var(--text);
  }

  .store-ico {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    color: var(--text);
  }

  .store-google .store-ico path:nth-child(1) {
    fill: #ea4335;
  }
  .store-google .store-ico path:nth-child(2) {
    fill: #34a853;
  }
  .store-google .store-ico path:nth-child(3) {
    fill: #4285f4;
  }
  .store-google .store-ico path:nth-child(4) {
    fill: #fbbc05;
  }

  .store-txt {
    display: flex;
    flex-direction: column;
  }

  .store-sub {
    font-size: 11px;
    color: var(--text3);
    line-height: 1;
    margin-bottom: 3px;
  }

  .store-name {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
  }

  .app-rating {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .rating-stars {
    display: flex;
    gap: 2px;
  }

  .rating-txt {
    font-size: 13px;
    color: var(--text3);
  }

  /* ---- PHONE MOCKUP ---- */
  .app-mockup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 40px 0;
  }

  .phone-glow {
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%);
    z-index: 0;
    animation: heroPulse 4s ease-in-out infinite;
  }

  .phone-frame {
    width: 240px;
    background: var(--surface);
    border-radius: 36px;
    border: 1.5px solid var(--border2);
    overflow: hidden;
    position: relative;
    z-index: 1;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
  }

  [data-theme="light"] .phone-frame {
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
  }

  .phone-notch {
    width: 80px;
    height: 20px;
    background: var(--bg);
    border-radius: 0 0 14px 14px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .phone-screen {
    background: var(--bg);
    min-height: 420px;
    display: flex;
    flex-direction: column;
  }

  .phone-statusbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 14px 4px;
    font-size: 11px;
    font-weight: 700;
    color: var(--text);
  }

  .phone-status-icons {
    display: flex;
    gap: 4px;
    color: var(--text2);
  }

  .phone-header {
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .phone-logo {
    font-size: 16px;
    font-weight: 900;
    color: var(--text);
    letter-spacing: -0.5px;
  }

  .phone-logo span {
    color: var(--accent);
  }

  .phone-search {
    flex: 1;
    background: var(--surface);
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 11px;
    color: var(--text3);
    display: flex;
    align-items: center;
    gap: 6px;
    border: 0.5px solid var(--border);
  }

  .phone-banner {
    margin: 8px 14px;
    background: linear-gradient(135deg, #1d4ed8, #3b82f6);
    border-radius: 12px;
    padding: 14px;
    color: #fff;
  }

  .phone-banner-tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.5px;
    background: rgba(255, 255, 255, 0.25);
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 6px;
  }

  .phone-banner-title {
    font-size: 15px;
    font-weight: 800;
    line-height: 1.2;
  }

  .phone-banner-price {
    font-size: 11px;
    opacity: 0.85;
    margin-top: 3px;
  }

  .phone-cats {
    display: flex;
    gap: 6px;
    padding: 8px 14px;
    overflow-x: auto;
  }

  .phone-cats::-webkit-scrollbar {
    display: none;
  }

  .phone-cat {
    font-size: 11px;
    font-weight: 600;
    color: var(--text3);
    padding: 4px 10px;
    border-radius: 20px;
    white-space: nowrap;
    background: var(--surface);
    border: 0.5px solid var(--border);
    cursor: pointer;
  }

  .phone-cat.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }

  .phone-products {
    padding: 4px 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .phone-product {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 10px;
  }

  .phone-product-img {
    width: 40px;
    height: 40px;
    background: var(--surface2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
  }

  .phone-product-info {
    flex: 1;
  }

  .phone-product-name {
    font-size: 12px;
    font-weight: 700;
    color: var(--text);
  }

  .phone-product-price {
    font-size: 11px;
    color: var(--accent);
    font-weight: 600;
    margin-top: 2px;
  }

  .phone-add-btn {
    width: 26px;
    height: 26px;
    background: var(--accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    flex-shrink: 0;
  }

  .phone-navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 14px 20px;
    border-top: 0.5px solid var(--border);
    margin-top: auto;
    color: var(--text3);
  }

  .phone-navbar svg:first-child {
    color: var(--accent);
  }

  @media (max-width: 900px) {
    .app-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }
    .app-mockup {
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .store-btns {
      flex-direction: column;
    }
    .store-btn {
      min-width: unset;
    }
  }
</style>
