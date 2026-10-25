const STEP_COUNT = 8;
const STORAGE_KEY = "visaweg_done";

// Читаем из браузера список выполненных шагов
function loadDone() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return saved;
  } catch (e) {
    // если хранилище недоступно, начинаем с пустого списка
  }
  return [];
}

// Сохраняем список выполненных шагов в браузер
function saveDone(done) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  } catch (e) {
    // не страшно, просто прогресс не сохранится
  }
}

// Показываем счётчик вида "3 / 8"
function updateProgress(done) {
  document.getElementById("progress").textContent = `${done.length} / ${STEP_COUNT}`;
}

// Создаём список шагов с галочками
function buildChecklist() {
  const list = document.getElementById("steps");
  let done = loadDone();

  for (let i = 1; i <= STEP_COUNT; i++) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const box = document.createElement("input");
    const text = document.createElement("span");

    box.type = "checkbox";
    box.checked = done.includes(i);
    text.dataset.i18n = `step_${i}`;
    item.classList.toggle("done", box.checked);

    box.addEventListener("change", () => {
      done = done.filter((n) => n !== i);
      if (box.checked) done.push(i);
      saveDone(done);
      updateProgress(done);
      item.classList.toggle("done", box.checked);
    });

    label.append(box, text);
    item.append(label);
    list.append(item);
  }
  updateProgress(done);
}

buildChecklist();
