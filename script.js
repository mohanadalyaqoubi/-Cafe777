const menuCategories = [
  {
    name: "مشروبات ساخنة",
    icon: "☕",
    items: [
      { name: "شاي", price: "8", image: "assets/menu/tea.png" },
      { name: "قهوة — صغير", price: "10", image: "assets/menu/coffee-small.png" },
      { name: "قهوة — كبير", price: "12", image: "assets/menu/coffee.png" },
      { name: "نسكافيه", price: "12", image: "assets/menu/nescafe.png" },
      { name: "نسكافيه بالحليب", price: "15", image: "assets/menu/nescafe-milk.png" },
      { name: "قهوة إسبريسو — صغير", price: "12", image: "assets/menu/espresso-small.png" },
      { name: "قهوة إسبريسو — كبير", price: "15", image: "assets/menu/espresso-large.png" },
      { name: "كابتشينو", price: "18", image: "assets/menu/cappuccino.png" },
      { name: "كافي لاتيه", price: "20", image: "assets/menu/cafe-latte-new.png" },
      { name: "كافي نوتيلا", price: "22", image: "assets/menu/cafe-nutella.png" },
      { name: "سبانش لاتيه", price: "22", image: "assets/menu/hot-spanish-latte.png" },
      { name: "فلات وايت", price: "22", image: "assets/menu/flat-white.png" },
      { name: "زهورات", price: "8", image: "assets/menu/herbal-tea-new.png" },
      { name: "سحلب", price: "15", image: "assets/menu/sahlab.png" },
      { name: "هوت نوتيلا", price: "20", image: "assets/menu/hot-nutella.png" },
      { name: "هوت لوتس", price: "22", image: "assets/menu/hot-lotus.png" },
      { name: "ميكاتو", price: "15", image: "assets/menu/macchiato.png" },
      { name: "أمريكانو", price: "15", image: "assets/menu/americano.png", imagePosition: "68% center" }
    ]
  },
  {
    name: "آيس كافي",
    icon: "🧊",
    items: [
      { name: "آيس لاتيه", price: "22", image: "assets/menu/iced-latte.png" },
      { name: "آيس سبانش لاتيه", price: "25", image: "assets/menu/iced-spanish-latte.png" },
      { name: "آيس نوتيلا", price: "25", image: "assets/menu/iced-nutella.png" },
      { name: "آيس كراميل لاتيه", price: "25", image: "assets/menu/iced-caramel-latte.png" },
      { name: "آيس كراميل ميكاتو", price: "23", image: "assets/menu/iced-caramel-macchiato.png" },
      { name: "آيس أمريكانو", price: "16", image: "assets/menu/iced-americano.png" }
    ]
  },
  {
    name: "موهيتو كلاسيك",
    icon: "🍋",
    items: [
      { name: "موهيتو فلورا", price: "20", image: "assets/menu/mojito-flora.png" },
      { name: "موهيتو حمضيات", price: "20", image: "assets/menu/mojito-citrus.png" },
      { name: "موهيتو أناناس", price: "20", image: "assets/menu/mojito-pineapple.png" },
      { name: "موهيتو كراميل", price: "20", image: "assets/menu/mojito-caramel.png" },
      { name: "موهيتو بلو بري", price: "20", image: "assets/menu/mojito-blueberry.png" },
      { name: "نكهات أخرى", price: "20", image: "assets/menu/mojito-classic-new.png" }
    ]
  },
  {
    name: "موهيتو طاقة",
    icon: "⚡",
    items: [
      { name: "موهيتو طاقة فلورا", price: "25", image: "assets/menu/mojito-energy-flora.png" },
      { name: "موهيتو طاقة حمضيات", price: "25", image: "assets/menu/mojito-energy-new.png" },
      { name: "موهيتو طاقة أناناس", price: "25", image: "assets/menu/mojito-energy-new.png" },
      { name: "موهيتو طاقة كراميل", price: "25", image: "assets/menu/mojito-energy-new.png" },
      { name: "موهيتو طاقة بلو بري", price: "25", image: "assets/menu/mojito-energy-new.png" },
      { name: "موهيتو طاقة — نكهات أخرى", price: "25", image: "assets/menu/mojito-energy-new.png" }
    ]
  },
  {
    name: "ميلك شيك",
    icon: "🥤",
    items: [
      { name: "فانيلا", price: "20", image: "assets/menu/milkshake-vanilla.png" },
      { name: "شوكولاتة", price: "20", image: "assets/menu/milkshake-chocolate.png" },
      { name: "نوتيلا", price: "25", image: "assets/menu/milkshake-nutella.png" },
      { name: "لوتس", price: "25", image: "assets/menu/milkshake-lotus.png" },
      { name: "بستاشيو", price: "25", image: "assets/menu/milkshake-pistachio.png" },
      { name: "آيس كوفي بوظة", price: "25", image: "assets/menu/iced-coffee.png" },
      { name: "كراميل", price: "25", image: "assets/menu/iced-caramel-coffee-icecream.png" },
      { name: "نسكافيه", price: "25", image: "assets/menu/iced-coffee-nescafe-icecream.png" },
      { name: "كندر", price: "25", image: "assets/menu/iced-coffee-kinder-icecream.png" },
      { name: "سنكرز", price: "25", image: "assets/menu/iced-coffee-snickers-icecream.png" },
      { name: "جالكسي", price: "25", image: "assets/menu/iced-coffee-galaxy-icecream.png" },
      { name: "مارس", price: "25", image: "assets/menu/iced-coffee-mars-icecream.png" }
    ]
  },
  {
    name: "عصائر طبيعية",
    icon: "🍓",
    items: [
      { name: "ليمون ونعنع", price: "20", image: "assets/menu/juice-lemon-mint.png" },
      { name: "موز وحليب", price: "22", image: "assets/menu/juice-banana-milk.png" },
      { name: "موسمي", price: "22", image: "assets/menu/juice-seasonal.png" },
      { name: "أفوكادو عسل ومكسرات", price: "25", image: "assets/menu/juice-avocado-honey-nuts.png" }
    ]
  },
  {
    name: "حلويات ساخنة",
    icon: "🥞",
    items: [
      { name: "كريب", price: "25", image: "assets/menu/dessert-crepe.png" },
      { name: "فوتتشيني كريب", price: "30", image: "assets/menu/dessert-fettuccine-crepe.png" },
      { name: "بان كيك", price: "25", image: "assets/menu/dessert-pancake.png" },
      { name: "ميني بان كيك", price: "23", image: "assets/menu/dessert-mini-pancake.png" },
      { name: "براونيز", price: "25", image: "assets/menu/dessert-brownies.png" },
      { name: "وافل أمريكي", price: "30", image: "assets/menu/dessert-american-waffle.png" }
    ]
  },
  {
    name: "حلويات باردة",
    icon: "🍰",
    items: [
      { name: "تشيز كيك بلوبري", price: "20", image: "assets/menu/cheesecake-blueberry.png" },
      { name: "تشيز كيك نوتيلا", price: "23", image: "assets/menu/cheesecake-nutella.png" },
      { name: "لوتس", price: "23", image: "assets/menu/cheesecake-lotus.png" },
      { name: "بيستاشيو", price: "25", image: "assets/menu/cheesecake-pistachio.png" },
      { name: "موس نوتيلا", price: "25", image: "assets/menu/mousse-cake.png" },
      { name: "كنافة نوتيلا", price: "27", image: "assets/menu/kunafa-nutella.png" },
      { name: "سان سبستيان", price: "30", image: "assets/menu/san-sebastian.png" },
      { name: "ديور", price: "35", image: "assets/menu/dior-cake.png" },
      { name: "لايت بنانا — Lite Banana", price: "30", image: "assets/menu/light-banana.png" }
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

      let image;
      if (item.image) {
        image = document.createElement("img");
        image.className = "menu-product-image menu-product-photo";
        image.src = item.image.replace(/\.png$/i, ".jpg");
        image.alt = item.name;
        image.loading = "eager";
        image.decoding = "async";
        if (item.imagePosition) image.style.objectPosition = item.imagePosition;
      } else {
        image = document.createElement("div");
        image.className = `menu-product-image menu-product-image-${index % 5}`;
        image.setAttribute("aria-hidden", "true");
        const imageIcon = document.createElement("span");
        imageIcon.className = "menu-product-icon";
        imageIcon.textContent = category.icon;
        image.append(imageIcon);
      }

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

      details.append(meta);
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
