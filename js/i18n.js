const SUPPORTED = ["ru", "de", "en"];
const DEFAULT_LANG = "ru";

// Определяем язык: сохранённый выбор, затем язык браузера, затем по умолчанию
function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (SUPPORTED.includes(saved)) return saved;
  } catch (e) {
    // localStorage может быть недоступен, это не страшно
  }
  const browser = (navigator.language || "").slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
}

// Загружаем файл с текстами нужного языка
async function loadDictionary(lang) {
  const response = await fetch(`content/${lang}.json`);
  if (!response.ok) {
    throw new Error(`Cannot load ${lang}.json (${response.status})`);
  }
  return response.json();
}

// Подставляем тексты во все элементы с атрибутом data-i18n
function applyTranslations(dictionary, lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = dictionary[element.dataset.i18n];
    if (text !== undefined) {
      element.textContent = text;
    }
  });
  document.title = dictionary.meta_title || document.title;
  document.documentElement.lang = lang;
}

async function setLanguage(lang) {
  try {
    const dictionary = await loadDictionary(lang);
    applyTranslations(dictionary, lang);
    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error(error);
  }
}

// Запуск: кнопки переключения и начальный язык
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(getInitialLang());
