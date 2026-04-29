<template>
  <div class="legal-page">
    <nav class="nav-header">
      <div class="nav-inner">
        <div class="brand">
          <span class="brand-badge">CM</span>
          <span class="brand-name">ConnectMobile</span>
        </div>
        <div class="lang-selector">
          <button v-for="l in ['uz', 'en', 'ru']" :key="l" :class="['l-btn', { 'is-active': lang === l }]" @click="setLang(l)">
            {{ l.toUpperCase() }}
          </button>
        </div>
      </div>
    </nav>

    <div class="main-wrapper">
      <article class="doc-container">
        <header class="doc-top">
          <div class="doc-identity">
            <span class="doc-code">ID: CM-PRV-2026-FINAL</span>
            <h1 class="doc-title">
              {{ t.title1 }} <br /><span class="highlight">{{ t.title2 }}</span>
            </h1>
          </div>
          <div class="doc-timestamp">
            <div class="t-row"><span class="t-label">Sana:</span> <strong>29.04.2026</strong></div>
            <div class="t-row"><span class="t-label">Status:</span> <strong class="status-active">TASDIQLANGAN</strong></div>
          </div>
        </header>

        <nav class="doc-toc">
          <h3 class="toc-title">{{ t.toc }}</h3>
          <ul class="toc-links">
            <li v-for="(item, index) in t.sections" :key="index">
              <span class="n">{{ +index + 1 }}</span> {{ item.title }}
            </li>
            <li><span class="n">9</span> {{ t.contactTitle }}</li>
          </ul>
        </nav>

        <div class="doc-body">
          <section v-for="(item, index) in t.sections" :key="index" class="doc-section">
            <h2 class="section-head">
              <span class="idx">{{ +index + 1 }}.0</span> {{ item.title }}
            </h2>
            <div class="section-content" v-html="item.content"></div>
          </section>

          <section class="doc-section contact-block">
            <h2 class="section-head"><span class="idx">9.0</span> {{ t.contactTitle }}</h2>
            <p class="contact-intro">{{ t.contactText }}</p>
            <div class="contact-table">
              <div class="c-row">
                <span class="c-key">{{ t.phoneLabel }}</span>
                <span class="c-val">+998 71 200 00 00</span>
              </div>
              <div class="c-row">
                <span class="c-key">E-mail</span>
                <span class="c-val">privacy@connectmobile.uz</span>
              </div>
              <div class="c-row">
                <span class="c-key">{{ t.addressLabel }}</span>
                <span class="c-val">O'zbekiston Respublikasi, Toshkent sh., Mustaqillik shoh ko'chasi, 15-uy</span>
              </div>
            </div>
          </section>
        </div>

        <footer class="doc-end">
          <div class="signature-box">
            <div class="sig-stamp">
              <div class="stamp-circle">APPROVED</div>
              <span>ConnectMobile Digital Security</span>
            </div>
            <p class="legal-disclaimer">{{ t.footerNote }}</p>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from "vue";

  const lang = ref("uz");

  const translations: any = {
    uz: {
      title1: "MAXFIYLIK VA SHAXSIY MA'LUMOTLARNI",
      title2: "HIMOYA QILISH SIYOSATI",
      toc: "HUJJATNING TARKIBIY TUZILISHI",
      contactTitle: "QAYTA ALOQA VA REKVIZITLAR",
      contactText: "Ushbu Siyosat yuzasidan barcha murojaatlar quyidagi rasmiy kanallar orqali qabul qilinadi:",
      phoneLabel: "Mijozlarni qo'llab-quvvatlash",
      addressLabel: "Yuridik manzil",
      footerNote: "Mazkur hujjat elektron hujjat aylanishi tizimi orqali tasdiqlangan va 2026-yil 29-apreldan kuchga kirgan.",
      sections: [
        {
          title: "Umumiy qoidalar",
          content:
            "<p>ConnectMobile platformasidan foydalanish jarayonida foydalanuvchi ma'lumotlarini qayta ishlash tartibi O'zbekiston Respublikasining 'Shaxsiy ma'lumotlar to'g'risida'gi Qonuniga muvofiq amalga oshiriladi. Ushbu siyosat barcha foydalanuvchilar uchun majburiydir.</p>",
        },
        {
          title: "To'planadigan ma'lumotlar",
          content:
            "<p>Biz faqat xizmat ko'rsatish uchun zarur bo'lgan quyidagi ma'lumotlarni yig'amiz:</p><ul><li>Foydalanuvchi telefon raqami (SMS tasdiqlash uchun);</li><li>Ism va familiya (buyurtmani rasmiylashtirish uchun);</li><li>Yetkazib berish manzili;</li><li>Qurilma turi va IP-manzili (xavfsizlikni ta'minlash uchun).</li></ul>",
        },
        {
          title: "Ma'lumotlardan foydalanish maqsadlari",
          content:
            "<p>Sizning ma'lumotlaringiz quyidagilar uchun ishlatiladi:</p><ul><li>Shaxsiy kabinetni yaratish va boshqarish;</li><li>Buyurtmalarni qabul qilish va ularni kuryer orqali yetkazib berish;</li><li>Xizmat sifatini tahlil qilish va texnik xatolarni tuzatish;</li><li>Yangi mahsulotlar va aksiyalar haqida xabardor qilish.</li></ul>",
        },
        {
          title: "To'lovlar xavfsizligi (Payme)",
          content:
            "<p>Barcha to'lov amaliyotlari <strong>Payme</strong> to'lov tizimi protokollari orqali amalga oshiriladi. ConnectMobile serverlarida foydalanuvchining bank kartasi ma'lumotlari (karta raqami, amal qilish muddati, CVV) saqlanmaydi va qayta ishlanmaydi.</p>",
        },
        {
          title: "Push-bildirishnomalar",
          content:
            "<p>Foydalanuvchi buyurtma holati va marketing xabarlarini Push-bildirishnomalar ko'rinishida olishi mumkin. Ushbu funksiyani mobil ilova yoki brauzer sozlamalarida istalgan vaqtda o'chirib qo'yish imkoniyati mavjud.</p>",
        },
        {
          title: "Ma'lumotlarni uchinchi shaxslarga berish",
          content:
            "<p>Sizning shaxsiy ma'lumotlaringiz uchinchi shaxslarga sotilmaydi. Ma'lumotlar faqat quyidagi hollarda uzatiladi:</p><ul><li>Yetkazib berish kuryerlariga (ism va manzil);</li><li>Davlat organlarining qonuniy so'rovlariga asosan;</li><li>To'lovni tasdiqlash uchun Payme tizimiga.</li></ul>",
        },
        {
          title: "Ma'lumotlarni saqlash va himoya qilish",
          content:
            "<p>Ma'lumotlar zamonaviy SSL shifrlash tizimlari himoyasidagi serverlarda saqlanadi. Saqlash muddati foydalanuvchi hisobi o'chirilgunga qadar davom etadi. Hisob o'chirilgandan so'ng ma'lumotlar 30 kun ichida to'liq yo'q qilinadi.</p>",
        },
        {
          title: "Foydalanuvchi huquqlari",
          content:
            "<p>Siz o'z ma'lumotlaringizni tahrirlash, ularning nusxasini olish yoki tizimdan butunlay o'chirib tashlashni talab qilish huquqiga egasiz. Buning uchun qo'llab-quvvatlash xizmatiga murojaat qilish kifoya.</p>",
        },
      ],
    },
    en: {
      title1: "PRIVACY AND PERSONAL DATA",
      title2: "PROTECTION POLICY",
      toc: "DOCUMENT STRUCTURE",
      contactTitle: "FEEDBACK AND REQUISITES",
      contactText: "All inquiries regarding this Policy are accepted through the following official channels:",
      phoneLabel: "Customer Support",
      addressLabel: "Legal Address",
      footerNote: "This document is verified via electronic document management and effective from April 29, 2026.",
      sections: [
        { title: "General Provisions", content: "<p>Processing of user data on ConnectMobile is carried out in accordance with international data protection standards. This policy is binding for all users.</p>" },
        {
          title: "Collected Information",
          content:
            "<p>We collect only the information necessary for service delivery:</p><ul><li>Phone number (for SMS verification);</li><li>Full name (for ordering);</li><li>Delivery address;</li><li>Device type and IP address (for security).</li></ul>",
        },
        {
          title: "Purpose of Data Usage",
          content:
            "<p>Your information is used for:</p><ul><li>Account creation and management;</li><li>Order processing and courier delivery;</li><li>Service quality analysis and bug fixing;</li><li>Marketing notifications and updates.</li></ul>",
        },
        {
          title: "Payment Security (Payme)",
          content: "<p>All payment transactions are processed through <strong>Payme</strong> protocols. ConnectMobile does not store or process user bank card data (number, expiry, CVV) on its servers.</p>",
        },
        { title: "Push Notifications", content: "<p>Users receive order status and marketing updates via Push notifications. This can be disabled in app or browser settings at any time.</p>" },
        { title: "Third-party Disclosure", content: "<p>We do not sell your data. Disclosure occurs only for: Courier delivery, legal government requests, or payment processing via Payme.</p>" },
        { title: "Data Storage & Protection", content: "<p>Data is stored on secure servers with SSL encryption. Data is kept until account deletion, after which it is fully erased within 30 days.</p>" },
        { title: "User Rights", content: "<p>You have the right to access, edit, or request full deletion of your personal data by contacting our support team.</p>" },
      ],
    },
    ru: {
      title1: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
      title2: "И ЗАЩИТЫ ДАННЫХ",
      toc: "СОДЕРЖАНИЕ ДОКУМЕНТА",
      contactTitle: "ОБРАТНАЯ СВЯЗЬ И РЕКВИЗИТЫ",
      contactText: "Все запросы по данной Политике принимаются через официальные каналы связи:",
      phoneLabel: "Поддержка клиентов",
      addressLabel: "Юридический адрес",
      footerNote: "Данный документ утвержден системой электронного документооборота и вступает в силу с 29 апреля 2026 года.",
      sections: [
        { title: "Общие положения", content: "<p>Обработка данных в ConnectMobile осуществляется в соответствии с Законом РУз 'О персональных данных'. Данная политика обязательна для всех пользователей.</p>" },
        {
          title: "Собираемая информация",
          content: "<p>Мы собираем только необходимые данные:</p><ul><li>Номер телефона (для SMS);</li><li>Имя и фамилия;</li><li>Адрес доставки;</li><li>Тип устройства и IP-адрес.</li></ul>",
        },
        { title: "Цели использования", content: "<p>Ваши данные используются для: управления аккаунтом, доставки заказов, анализа качества и рассылки уведомлений.</p>" },
        { title: "Безопасность платежей (Payme)", content: "<p>Платежи проходят через систему <strong>Payme</strong>. ConnectMobile не хранит данные банковских карт пользователей на своих серверах.</p>" },
        { title: "Push-уведомления", content: "<p>Пользователи могут получать уведомления о заказах. Функцию можно отключить в настройках приложения в любой момент.</p>" },
        { title: "Передача третьим лицам", content: "<p>Данные не продаются. Передача возможна курьерам для доставки или госорганам по официальному запросу.</p>" },
        { title: "Хранение и защита", content: "<p>Данные защищены шифрованием SSL. Информация хранится до удаления аккаунта и полностью уничтожается через 30 дней после запроса.</p>" },
        { title: "Права пользователя", content: "<p>Вы имеете право изменять или требовать полного удаления своих данных через службу поддержки.</p>" },
      ],
    },
  };

  const t = computed(() => translations[lang.value]);
  const setLang = (val: any) => {
    lang.value = val;
  };
</script>

<style scoped>
  .legal-page {
    --primary: #1e40af;
    --bg: #f8fafc;
    --text: #0f172a;
    --border: #e2e8f0;
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
    font-family: "Inter", sans-serif;
  }

  /* NAVBAR */
  .nav-header {
    background: #ffffff;
    border-bottom: 2px solid var(--primary);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 12px 0;
  }
  .nav-inner {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .brand-badge {
    background: var(--primary);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 800;
  }
  .brand-name {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .lang-selector {
    display: flex;
    gap: 4px;
    background: #f1f5f9;
    padding: 4px;
    border-radius: 8px;
  }
  .l-btn {
    border: none;
    background: transparent;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.75rem;
    border-radius: 6px;
    color: #64748b;
    transition: 0.2s;
  }
  .l-btn.is-active {
    background: white;
    color: var(--primary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* MAIN DOC */
  .main-wrapper {
    padding: 40px 20px;
  }
  .doc-container {
    max-width: 850px;
    margin: 0 auto;
    background: white;
    border: 1px solid var(--border);
    padding: 60px 80px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .doc-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid var(--text);
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .doc-code {
    font-family: monospace;
    font-size: 0.8rem;
    color: #64748b;
  }
  .doc-title {
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1.2;
    margin-top: 10px;
  }
  .highlight {
    color: var(--primary);
  }

  .t-label {
    color: #64748b;
    margin-right: 5px;
    font-size: 0.85rem;
  }
  .status-active {
    color: #16a34a;
  }

  /* TOC */
  .doc-toc {
    background: #f8fafc;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 40px;
  }
  .toc-title {
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .toc-links {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .toc-links li {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .toc-links .n {
    color: var(--primary);
    font-weight: 800;
    width: 15px;
  }

  /* SECTIONS */
  .doc-section {
    margin-bottom: 45px;
  }
  .section-head {
    font-size: 1.25rem;
    font-weight: 800;
    border-bottom: 1px solid var(--border);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .idx {
    color: var(--primary);
    margin-right: 8px;
  }
  .section-content {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #334155;
  }
  :deep(ul) {
    padding-left: 20px;
    margin-top: 10px;
  }
  :deep(li) {
    margin-bottom: 6px;
  }

  /* CONTACT TABLE */
  .contact-table {
    border: 1px solid var(--border);
    margin-top: 20px;
  }
  .c-row {
    display: flex;
    border-bottom: 1px solid var(--border);
    padding: 12px 15px;
  }
  .c-row:last-child {
    border-bottom: none;
  }
  .c-key {
    width: 180px;
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 600;
  }
  .c-val {
    font-weight: 700;
  }

  /* FOOTER */
  .doc-end {
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid var(--border);
  }
  .sig-stamp {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    color: #64748b;
    font-weight: 700;
  }
  .stamp-circle {
    border: 2px dashed var(--primary);
    color: var(--primary);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    transform: rotate(-15deg);
  }
  .legal-disclaimer {
    font-size: 0.8rem;
    color: #94a3b8;
  }

  @media (max-width: 768px) {
    .doc-container {
      padding: 40px 20px;
    }
    .doc-top {
      flex-direction: column;
      gap: 20px;
    }
    .toc-links {
      grid-template-columns: 1fr;
    }
    .c-row {
      flex-direction: column;
      gap: 5px;
    }
  }
</style>
