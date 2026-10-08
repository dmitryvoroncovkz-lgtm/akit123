// ===== Translations =====
const translations = {
  ru: {
    nav_about: "О нас",
    nav_request: "Заявка",
    nav_contacts: "Контакты",
    hero_badge: "Подбор за 15 минут",
    hero_title: "Подбор автозапчастей<br>по VIN и модели",
    hero_sub: "Новые и б/у запчасти · Доставка по всему Казахстану · Костанай",
    hero_btn: "Оставить заявку",
    hero_catalog: "Каталог на akit.kz",
    stat_years: "лет опыта",
    stat_delivery: "доставка по РК",
    stat_wa: "WhatsApp",
    about_tag: "Почему мы",
    about_title: "О магазине АвтоКит",
    about_1_title: "Широкий ассортимент",
    about_1_text: "Запчасти на отечественные и импортные авто (включая китайские марки), новые и б/у.",
    about_2_title: "Доставка по РК",
    about_2_text: "Самовывоз в Костанае, бесплатная доставка по городу от 20 000 ₸, курьеры по Казахстану.",
    about_3_title: "Быстрый подбор",
    about_3_text: "Оставьте заявку с VIN и списком деталей — мы подберём и пришлём варианты в WhatsApp.",
    form_tag: "Заявка",
    form_title: "Заявка на подбор запчастей",
    form_desc: "Укажите только данные автомобиля и список деталей. Личные данные не требуются.",
    label_vin: "Номер кузова (VIN)",
    hint_vin: "17 символов, находится на кузове или в документах",
    label_model: "Марка и модель автомобиля",
    label_parts: "Список необходимых запчастей",
    form_note: "Мы не собираем ФИО, телефон или другие персональные данные. Заявка отправляется напрямую в WhatsApp.",
    form_btn: "Отправить в WhatsApp",
    contacts_tag: "Связь",
    contacts_title: "Контакты",
    address_label: "Адрес",
    phone_label: "Телефон",
    site_label: "Сайт",
    wa_write: "Написать",
    markets_text: "Также вы можете найти нас на маркетплейсах:",
    markets_hint: "Если у вас есть магазины на Kaspi или Halyk — добавьте прямые ссылки. Kaspi особенно популярен в Казахстане.",
    footer_text: "Интернет-магазин автозапчастей в Казахстане",
    wa_message: "Здравствуйте! Заявка на подбор запчастей:\n\nVIN (номер кузова): {vin}\nМарка/модель: {model}\n\nСписок запчастей:\n{parts}"
  },
  kk: {
    nav_about: "Біз туралы",
    nav_request: "Өтінім",
    nav_contacts: "Байланыс",
    hero_badge: "15 минутта іріктеу",
    hero_title: "Автобөлшектерді<br>VIN және модель бойынша іріктеу",
    hero_sub: "Жаңа және қолданылған бөлшектер · Қазақстан бойынша жеткізу · Қостанай",
    hero_btn: "Өтінім қалдыру",
    hero_catalog: "Каталог akit.kz",
    stat_years: "жыл тәжірибе",
    stat_delivery: "ҚР бойынша жеткізу",
    stat_wa: "WhatsApp",
    about_tag: "Неге біз",
    about_title: "АвтоКит дүкені туралы",
    about_1_title: "Кең ассортимент",
    about_1_text: "Отандық және импорттық автокөліктерге (қытай маркалары қоса) жаңа және қолданылған бөлшектер.",
    about_2_title: "ҚР бойынша жеткізу",
    about_2_text: "Қостанайда өздігінен алу, қала бойынша 20 000 ₸-ден бастап тегін жеткізу, Қазақстан бойынша курьерлер.",
    about_3_title: "Жылдам іріктеу",
    about_3_text: "VIN және бөлшектер тізімімен өтінім қалдырыңыз — біз іріктеп, WhatsApp-қа жібереміз.",
    form_tag: "Өтінім",
    form_title: "Бөлшектерді іріктеуге өтінім",
    form_desc: "Тек автокөлік деректерін және бөлшектер тізімін көрсетіңіз. Жеке деректер қажет емес.",
    label_vin: "Шанақ нөмірі (VIN)",
    hint_vin: "17 таңба, шанақта немесе құжаттарда орналасқан",
    label_model: "Автокөлік маркасы мен моделі",
    label_parts: "Қажетті бөлшектер тізімі",
    form_note: "Біз аты-жөн, телефон немесе басқа жеке деректерді жинамаймыз. Өтінім тікелей WhatsApp-қа жіберіледі.",
    form_btn: "WhatsApp-қа жіберу",
    contacts_tag: "Байланыс",
    contacts_title: "Байланыс",
    address_label: "Мекенжай",
    phone_label: "Телефон",
    site_label: "Сайт",
    wa_write: "Жазу",
    markets_text: "Сондай-ақ бізді маркетплейстерден табуға болады:",
    markets_hint: "Егер Kaspi немесе Halyk-та дүкендеріңіз болса — тікелей сілтемелерді қосыңыз. Kaspi Қазақстанда өте танымал.",
    footer_text: "Қазақстандағы автобөлшектер интернет-дүкені",
    wa_message: "Сәлеметсіз бе! Бөлшектерді іріктеуге өтінім:\n\nVIN (шанақ нөмірі): {vin}\nМарка/модель: {model}\n\nБөлшектер тізімі:\n{parts}"
  }
};

let currentLang = "ru";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "kk" ? "kk" : "ru";

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text) {
      if (text.includes("<br>")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  const vinInput = document.getElementById("vin");
  const modelInput = document.getElementById("model");
  const partsInput = document.getElementById("parts");
  if (lang === "kk") {
    vinInput.placeholder = "WVWZZZ1JZYW123456";
    modelInput.placeholder = "Toyota Camry 2018";
    partsInput.placeholder = "1. Алдыңғы бампер\n2. Сол жақ фара\n3. Алдыңғы оң амортизатор";
  } else {
    vinInput.placeholder = "WVWZZZ1JZYW123456";
    modelInput.placeholder = "Toyota Camry 2018";
    partsInput.placeholder = "1. Передний бампер\n2. Фара левая\n3. Амортизатор передний правый";
  }

  localStorage.setItem("avtokit_lang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem("avtokit_lang");
if (savedLang && translations[savedLang]) {
  setLanguage(savedLang);
}

// Mobile menu
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// Form → WhatsApp
const form = document.getElementById("parts-form");
const WHATSAPP_NUMBER = "77054529356";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const vin = document.getElementById("vin").value.trim().toUpperCase();
  const model = document.getElementById("model").value.trim();
  const parts = document.getElementById("parts").value.trim();

  if (!vin || !model || !parts) return;

  const template = translations[currentLang].wa_message;
  const message = template
    .replace("{vin}", vin)
    .replace("{model}", model)
    .replace("{parts}", parts);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// VIN: uppercase + filter
document.getElementById("vin").addEventListener("input", function () {
  this.value = this.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "").slice(0, 17);
});
