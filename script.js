const menuCategories = [
  {
    name: "مشروبات ساخنة",
    icon: "☕",
    items: [
      { name: "شاي", price: "8" },
      { name: "قهوة — صغير", price: "10" },
      { name: "قهوة — كبير", price: "12" },
      { name: "نسكافيه", price: "12" },
      { name: "نسكافيه بالحليب", price: "15" },
      { name: "إسبريسو — صغير", price: "12" },
      { name: "إسبريسو — كبير", price: "15" },
      { name: "كابتشينو", price: "18" },
      { name: "كافي لاتيه", price: "20" },
      { name: "كافي نوتيلا", price: "22" },
      { name: "سبانش لاتيه", price: "22" },
      { name: "فلات وايت", price: "22" },
      { name: "زهورات", price: "8" },
      { name: "سحلب", price: "15" },
      { name: "هوت نوتيلا", price: "20" },
      { name: "هوت لوتس", price: "22" },
      { name: "ميكاتو", price: "15" },
      { name: "أمريكانو", price: "15" }
    ]
  },
  {
    name: "آيس كافي",
    icon: "🧊",
    items: [
      { name: "آيس لاتيه", price: "22" },
      { name: "آيس سبانش لاتيه", price: "25" },
      { name: "آيس نوتيلا", price: "25" },
      { name: "آيس كراميل لاتيه", price: "25" },
      { name: "آيس كراميل ميكاتو", price: "23" },
      { name: "آيس أمريكانو", price: "16" }
    ]
  },
  {
    name: "موهيتو كلاسيك",
    icon: "🍋",
    items: [
      { name: "موهيتو فلورا", price: "20" },
      { name: "موهيتو حمضيات", price: "20" },
      { name: "موهيتو أناناس", price: "20" },
      { name: "موهيتو كراميل", price: "20" },
      { name: "موهيتو بلو بري", price: "20" },
      { name: "نكهات أخرى", price: "20" }
    ]
  },
  {
    name: "موهيتو طاقة",
    icon: "⚡",
    items: [
      { name: "موهيتو طاقة فلورا", price: "20" },
      { name: "موهيتو طاقة حمضيات", price: "20" },
      { name: "موهيتو طاقة أناناس", price: "20" },
      { name: "موهيتو طاقة كراميل", price: "20" },
      { name: "موهيتو طاقة بلو بري", price: "20" },
      { name: "موهيتو طاقة — نكهات أخرى", price: "20" }
    ]
  },
  {
    name: "ميلك شيك",
    icon: "🥤",
    items: [
      { name: "فانيلا", price: "20" },
      { name: "شوكولاتة", price: "20" },
      { name: "نوتيلا", price: "25" },
      { name: "لوتس", price: "25" },
      { name: "بستاشيو", price: "25" },
      { name: "آيس كافي بوظة", price: "25" },
      { name: "كراميل", price: "25" },
      { name: "نسكافيه", price: "25" },
      { name: "كندر", price: "25" },
      { name: "سنكرز", price: "25" },
      { name: "جالكسي", price: "25" },
      { name: "مارس", price: "25" }
    ]
  },
  {
    name: "عصائر طبيعية",
    icon: "🍓",
    items: [
      { name: "ليمون ونعنع", price: "20" },
      { name: "موز وحليب", price: "22" },
      { name: "موسمي", price: "22" },
      { name: "أفوكادو عسل ومكسرات", price: "25" }
    ]
  },
  {
    name: "حلويات ساخنة",
    icon: "🥞",
    items: [
      { name: "كريب", price: "25" },
      { name: "فوتتشيني كريب", price: "30" },
      { name: "بان كيك", price: "25" },
      { name: "ميني بان كيك", price: "23" },
      { name: "براونيز", price: "15" },
      { name: "وافل أمريكي", price: "30" }
    ]
  },
  {
    name: "حلويات باردة",
    icon: "🍰",
    items: [
      { name: "تشيز كيك بلوبري", price: "20" },
      { name: "تشيز كيك نوتيلا", price: "23" },
      { name: "لوتس", price: "23" },
      { name: "بيستاشيو", price: "25" },
      { name: "موس نوتيلا", price: "25" },
      { name: "كنافة نوتيلا", price: "27" },
      { name: "سان سبستيان", price: "30" },
      { name: "ديور", price: "35" },
      { name: "لايت بنانا — Lite Banana", price: "26" }
    ]
  },
  {
    name: "خلطة 777",
    icon: "✨",
    items: [
      { name: "موهيتو مكس 777", price: "25" }
    ]
  }
];

const categoryTabs = document.querySelector("#category-tabs");
const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const searchClear = document.querySelector("#menu-search-clear");
const resultCount = document.querySelector("#menu-result-count");
const emptyState = document.querySelector("#empty-state");
const menuReset = document.querySelector("#menu-reset");
let activeCategory = "كل الأصناف";

const categoryDescriptions = {
  "مشروبات ساخنة": "اختار مشروبك المفضل من قائمة المشروبات الساخنة.",
  "آيس كافي": "قهوة باردة بطعمك المفضل.",
  "موهيتو كلاسيك": "موهيتو بارد بالنكهة اللي بتحبها.",
  "موهيتو طاقة": "موهيتو بارد من تشكيلة مشروبات الطاقة.",
  "ميلك شيك": "ميلك شيك بارد بالنكهة اللي بتختارها.",
  "عصائر طبيعية": "اختار عصيرك المفضل من تشكيلتنا.",
  "حلويات ساخنة": "حلى دافئ يكمّل قهوتك.",
  "حلويات باردة": "حلى بارد من اختيارات 777.",
  "خلطة 777": "خلطة مميزة من اختيارات 777."
};

function createCategoryTab(name, icon, count) {
  const button = document.createElement("button");
  button.className = `category-tab${name === activeCategory ? " active" : ""}`;
  button.type = "button";
  button.dataset.category = name;
  button.setAttribute("aria-pressed", String(name === activeCategory));

  const categoryIcon = document.createElement("span");
  categoryIcon.className = "category-tab-icon";
  categoryIcon.setAttribute("aria-hidden", "true");
  categoryIcon.textContent = icon;

  const label = document.createElement("span");
  label.textContent = name;

  const itemCount = document.createElement("span");
  itemCount.className = "category-tab-count";
  itemCount.textContent = new Intl.NumberFormat("ar").format(count);

  button.append(categoryIcon, label, itemCount);
  return button;
}

function renderTabs() {
  const totalItems = menuCategories.reduce((total, category) => total + category.items.length, 0);
  categoryTabs.replaceChildren(
    createCategoryTab("كل الأصناف", "✦", totalItems),
    ...menuCategories.map(({ name, icon, items }) => createCategoryTab(name, icon, items.length))
  );
}

function updateCategoryTabs() {
  for (const button of categoryTabs.querySelectorAll("[data-category]")) {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

function matchesSearch(text, query) {
  return text.toLocaleLowerCase("ar").includes(query.toLocaleLowerCase("ar"));
}

function renderMenu() {
  const query = searchInput.value.trim();
  const categories = menuCategories
    .filter(({ name }) => activeCategory === "كل الأصناف" || activeCategory === name)
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        matchesSearch(`${category.name} ${item.name}`, query)
      )
    }))
    .filter(({ items }) => items.length > 0);
  const visibleItems = categories.reduce((total, category) => total + category.items.length, 0);
  resultCount.textContent = `عدد الأصناف: ${new Intl.NumberFormat("ar").format(visibleItems)}`;
  searchClear.hidden = query.length === 0;

  menuGrid.replaceChildren(...categories.map((category, index) => {
    const section = document.createElement("section");
    section.className = "menu-category-section";
    section.style.animationDelay = `${Math.min(index * 45, 270)}ms`;
    const heading = document.createElement("div");
    heading.className = "menu-card-head";

    const title = document.createElement("h3");
    title.textContent = category.name;
    const icon = document.createElement("span");
    icon.className = "menu-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = category.icon;
    const count = document.createElement("span");
    count.className = "menu-card-count";
    count.textContent = `${new Intl.NumberFormat("ar").format(category.items.length)} صنف`;
    heading.append(title, count, icon);

    const list = document.createElement("div");
    list.className = "menu-items";
    for (const [itemIndex, item] of category.items.entries()) {
      const card = document.createElement("article");
      card.className = "menu-item-card";

      const image = document.createElement("div");
      image.className = `menu-product-image menu-product-image-${index % 5}`;
      image.setAttribute("aria-hidden", "true");
      const imageIcon = document.createElement("span");
      imageIcon.className = "menu-product-icon";
      imageIcon.textContent = category.icon;
      const imageCaption = document.createElement("span");
      imageCaption.className = "menu-product-image-caption";
      imageCaption.textContent = "صورة الصنف";
      image.append(imageIcon, imageCaption);

      const details = document.createElement("div");
      details.className = "menu-item-details";
      const meta = document.createElement("div");
      meta.className = "menu-item-meta";
      const name = document.createElement("span");
      name.className = "menu-item-name";
      name.textContent = item.name;
      const price = document.createElement("span");
      price.className = `menu-item-price${item.noPrice ? " no-price" : ""}`;
      price.textContent = item.noPrice ? item.price : `${item.price} ₪`;
      meta.append(name, price);

      const description = document.createElement("p");
      description.className = "menu-item-description";
      description.textContent = item.description || categoryDescriptions[category.name];
      details.append(meta, description);
      card.append(image, details);
      card.style.animationDelay = `${Math.min(itemIndex * 25, 200)}ms`;
      list.append(card);
    }

    section.append(heading, list);
    return section;
  }));
  emptyState.hidden = categories.length > 0;
}

if (categoryTabs && menuGrid && searchInput && searchClear && resultCount && emptyState && menuReset) {
  categoryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    updateCategoryTabs();
    renderMenu();
  });
  searchInput.addEventListener("input", renderMenu);
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    renderMenu();
    searchInput.focus();
  });
  menuReset.addEventListener("click", () => {
    activeCategory = "كل الأصناف";
    searchInput.value = "";
    updateCategoryTabs();
    renderMenu();
    searchInput.focus();
  });
  renderTabs();
  renderMenu();
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
  });
  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "فتح القائمة");
    }
  });
}

const introScreen = document.querySelector("#intro-screen");
if (introScreen) {
  window.setTimeout(() => introScreen.remove(), 2000);
}
