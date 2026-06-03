(() => {
  const BACKEND_URL = window.CODOLOGIA_BACKEND_URL || "";
  const COURSE_ORDER = [
    "Олимпиадная математика",
    "Математика на 5",
    "Junior",
    "Middle 1",
    "Middle 2",
    "GameLab",
    "Middle 3",
    "High",
    "Уверенный пользователь ПК",
    "3D-графика и моделирование в Blender",
    "WEB-разработка",
    "WEB-разработка, второй уровень",
    "PythonSTART",
    "Разработка мобильных приложений на языке JAVA",
    "Python, уровень 2",
    "Программирование на языке Python / базовый уровень",
    "Разработка игр в среде Unity и C#",
    "Minecraft / Java (в разработке)"
  ];

  const COURSES = [
    { title: "Олимпиадная математика", sheetTitle: "Олимпиадная математика", minAge: 7, maxAge: 12, theme: "theme-math", mark: "ОМ", posterLine: "ОЛИМПИАДНАЯ МАТЕМАТИКА", posterAge: "с 1 по 6 класс", desc: "Логика, нестандартные задачи и олимпиадное мышление для школьников.", why: "Подходит детям, которым интересны математические задачи и развитие логики.", learns: ["логические задачи", "олимпиадные методы", "математическое мышление"], interestKeys: ["math_olympiad"], skillKeys: ["math_logic"], keywords: ["математика", "логика", "олимпиад", "задачи"] },
    { title: "Математика на 5", sheetTitle: "Математика на 5", minAge: 9, maxAge: 12, theme: "theme-math5", mark: "5", posterLine: "РЕПЕТИТОР ПО ШКОЛЬНОЙ ПРОГРАММЕ", posterAge: "с 3 по 5 класс", desc: "Подтягивание школьной математики и уверенное решение задач по программе.", why: "Подходит, если нужен уверенный результат по школьной математике.", learns: ["школьная программа", "решение задач", "системная практика"], interestKeys: ["math_help"], skillKeys: ["math_logic"], keywords: ["математика", "школьная", "программа", "задачи"] },
    { title: "Junior", sheetTitle: "Junior", minAge: 7, maxAge: 8, theme: "theme-junior", mark: "J", posterLine: "ФУНДАМЕНТАЛЬНАЯ ПРОГРАММА", posterAge: "7–8 лет", desc: "Визуальное программирование, логика, алгоритмы и первые IT-проекты.", why: "Подходит для младших школьников как мягкий старт в IT без перегрузки.", learns: ["логика и алгоритмы", "первые визуальные проекты", "простое программирование без перегрузки"], interestKeys: ["Scratch"], skillKeys: ["scratch"], keywords: ["scratch", "игры", "алгоритмы", "логика", "визуальное"] },
    { title: "Middle 1", sheetTitle: "Middle 1", minAge: 8, maxAge: 10, theme: "theme-middle1", mark: "M1", posterLine: "ФУНДАМЕНТАЛЬНАЯ ПРОГРАММА", posterAge: "8–10 лет", desc: "Развитие цифровых навыков, логики и первых серьёзных проектов.", why: "Подходит детям, которые уже готовы к более серьёзным IT-задачам.", learns: ["проектный старт", "цифровые навыки", "развитие логики"], interestKeys: ["Scratch", "Компьютерная грамотность"], skillKeys: ["scratch", "computer_basics"], keywords: ["scratch", "компьютер", "пк", "логика"] },
    { title: "Middle 2", sheetTitle: "Middle 2", minAge: 9, maxAge: 10, theme: "theme-middle2", mark: "M2", posterLine: "ФУНДАМЕНТАЛЬНАЯ ПРОГРАММА", posterAge: "9–10 лет", desc: "Переход к более сложным проектам и IT-инструментам.", why: "Подходит детям, которым уже нужен шаг к программированию и проектной работе.", learns: ["более сложные IT-задачи", "переход к программированию", "проектная работа"], interestKeys: ["Python"], skillKeys: ["python"], keywords: ["python", "алгоритмы", "игры"] },
    { title: "GameLab", sheetTitle: "Кодология GameLab", minAge: 9, maxAge: 12, theme: "theme-gamelab", mark: "GAME", posterLine: "ЛЕТНЯЯ СТУДИЯ РАЗРАБОТКИ ИГР", posterAge: "9–12 лет", desc: "Летний интенсив: концепция игры, мир, персонажи, программирование и тестирование.", why: "Подходит детям, которым нравятся игры, визуальные инструменты и быстрый практический результат.", learns: ["создание персонажей и объектов в Tinkercad и Inkscape", "разработка мира и игровых уровней в Cospaces и Construct", "визуальное кодирование, тестирование и презентация игры"], interestKeys: ["Игры для компьютера", "3D"], skillKeys: ["3d"], keywords: ["gamelab", "летняя", "игры", "3d", "интенсив"], startModes: ["summer2026", "nearest"] },
    { title: "Middle 3", sheetTitle: "Middle 3", minAge: 10, maxAge: 11, theme: "theme-middle3", mark: "M3", posterLine: "ФУНДАМЕНТАЛЬНАЯ ПРОГРАММА", posterAge: "10–11 лет", desc: "Игры, приложения, графика и серьёзные проекты.", why: "Подходит как предпрофильный этап перед более узкими направлениями.", learns: ["серьёзные IT-проекты", "переход к коду", "подготовка к профильным направлениям"], interestKeys: ["Игры для компьютера", "Приложения", "Python"], skillKeys: ["python", "javascript"], keywords: ["unity", "python", "javascript", "игры", "приложения"] },
    { title: "High", sheetTitle: "High", minAge: 11, maxAge: 12, theme: "theme-high", mark: "HIGH", posterLine: "ФУНДАМЕНТАЛЬНАЯ ПРОГРАММА", posterAge: "11–12 лет", desc: "Нейросети, приложения, сайты, дизайн и современные IT-направления.", why: "Подходит старшим ребятам для выбора направления и следующего шага.", learns: ["знакомство с современными IT-направлениями", "проба разных цифровых профессий", "осознанный выбор следующего шага"], interestKeys: ["Нейросети", "Сайты", "Приложения", "Компьютерная грамотность"], skillKeys: ["ai", "html_css", "javascript", "vue"], keywords: ["нейросети", "дизайн", "сайты", "приложения"] },
    { title: "Уверенный пользователь ПК", sheetTitle: "Уверенный пользователь ПК", minAge: 11, maxAge: 16, theme: "theme-pc", mark: "ПК", posterLine: "УВЕРЕННЫЙ ПОЛЬЗОВАТЕЛЬ", posterAge: "ПК · с 11 лет", desc: "Работа с файлами, папками, браузером, документами, таблицами и презентациями.", why: "Подходит, если ребёнку важно уверенно пользоваться компьютером для учёбы и задач каждый день.", learns: ["работа с файлами и папками", "документы, таблицы и презентации", "уверенная работа за компьютером"], interestKeys: ["Компьютерная грамотность"], skillKeys: ["computer_basics"], keywords: ["компьютер", "файлы", "папки", "word", "excel", "документы", "презентации"] },
    { title: "3D-графика и моделирование в Blender", sheetTitle: "3D-графика и моделирование в Blender", minAge: 11, maxAge: 16, theme: "theme-blender", mark: "3D", posterLine: "КОМПЬЮТЕРНАЯ ГРАФИКА", posterAge: "с 12 лет", desc: "3D-моделирование, сцены, анимация, текстуры и визуальные проекты.", why: "Подходит детям, которым нравится графика, визуал и создание объёмных объектов.", learns: ["3D-моделирование", "анимация и сцены", "визуальные проекты"], interestKeys: ["3D", "Blender"], skillKeys: ["blender", "3d"], keywords: ["blender", "3d", "модели", "анимация", "графика", "персонажи"] },
    { title: "WEB-разработка", sheetTitle: "WEB-разработка", minAge: 12, maxAge: 16, theme: "theme-web1", mark: "</>", posterLine: "WEB-РАЗРАБОТКА", posterAge: "с 12 лет", desc: "HTML/CSS, основы JavaScript и создание сайтов.", why: "Подходит детям, которым интересны сайты, интерфейсы и вёрстка.", learns: ["создание сайтов", "вёрстка и оформление страниц", "первые интерактивные элементы"], interestKeys: ["Сайты"], skillKeys: ["html_css", "javascript"], keywords: ["html/css", "javascript", "сайты", "вёрстка", "интерфейс"] },
    { title: "WEB-разработка, второй уровень", sheetTitle: "WEB-разработка, второй уровень", minAge: 12, maxAge: 16, theme: "theme-web2", mark: "{}", posterLine: "WEB-РАЗРАБОТКА", posterAge: "второй уровень", desc: "Современные веб-приложения, компоненты, API и более сложная frontend-разработка.", why: "Подходит тем, кто уже пробовал сайты и JavaScript.", learns: ["современная frontend-разработка", "компоненты и API", "сложные веб-проекты"], interestKeys: ["Сайты"], skillKeys: ["javascript", "vue"], keywords: ["vue", "api", "javascript", "frontend", "веб"] },
    { title: "PythonSTART", sheetTitle: "Python START", minAge: 12, maxAge: 16, theme: "theme-python1", mark: "PY", posterLine: "ПРОГРАММИРОВАНИЕ НА ЯЗЫКЕ", posterAge: "с 12 лет", desc: "Переменные, циклы, игры и первые проекты на Python.", why: "Подходит как первый серьёзный язык программирования.", learns: ["основы Python", "переменные, условия и циклы", "первые программы и игры"], interestKeys: ["Python"], skillKeys: ["python"], keywords: ["python", "боты", "логика", "программы", "игры"] },
    { title: "Разработка мобильных приложений на языке JAVA", sheetTitle: "Разработка мобильных приложений на языке JAVA", minAge: 13, maxAge: 16, theme: "theme-java", mark: "JAVA", posterLine: "ПРОГРАММИРОВАНИЕ НА ЯЗЫКЕ", posterAge: "JAVA · с 13 лет", desc: "Создание мобильных приложений, интерфейсов и основ Java.", why: "Подходит детям, которым интересны приложения на телефоне и логика программирования.", learns: ["создание мобильных приложений", "интерфейсы для мобильных приложений", "основы Java"], interestKeys: ["Приложения", "Игры для телефона"], skillKeys: ["java", "android"], keywords: ["java", "приложения", "мобильные", "android"] },
    { title: "Python, уровень 2", sheetTitle: "Python, уровень 2", minAge: 13, maxAge: 16, theme: "theme-python2", mark: "π", posterLine: "ПРОГРАММИРОВАНИЕ НА ЯЗЫКЕ", posterAge: "с 13 лет", desc: "Игры с графикой, приложения, окна и основы нейросетей.", why: "Подходит детям, которые уже знакомы с Python.", learns: ["более сложный Python", "графика и окна", "переход к серьёзным проектам"], interestKeys: ["Python", "Нейросети"], skillKeys: ["python"], keywords: ["python", "нейросети", "программы", "боты", "графика"] },
    { title: "Программирование на языке Python / базовый уровень", sheetTitle: "Программирование на языке Python / базовый уровень", minAge: 13, maxAge: 16, theme: "theme-pythonExpress", mark: "⚡", posterLine: "ЛЕТНИЙ ЭКСПРЕСС-КУРС", posterAge: "36 академических часов", desc: "Летний экспресс-курс 36 академических часов: полный старт в Python.", why: "Подходит ребятам с 13 лет, которым нужен интенсивный и результативный старт в программировании.", learns: ["основы Python", "переменные, условия и циклы", "функции, алгоритмы и собственные проекты"], interestKeys: ["Python"], skillKeys: ["python"], keywords: ["python", "экспресс", "летний", "базовый", "переменные", "циклы", "функции", "algorithms"] },
    { title: "Разработка игр в среде Unity и C#", sheetTitle: "Разработка игр в среде Unity и C#", minAge: 14, maxAge: 16, theme: "theme-unity", mark: "U", posterLine: "РАЗРАБОТКА ИГР", posterAge: "с 14 лет", desc: "Создание собственных игр, персонажей, уровней и игровой логики.", why: "Подходит детям, которые хотят не просто играть, а самостоятельно создавать игры и игровые механики.", learns: ["создание игр", "работа с персонажами и уровнями", "логика игры и C#"], interestKeys: ["Игры для компьютера", "Unity"], skillKeys: ["unity"], keywords: ["unity", "игры", "3d-игры", "персонажи", "c#"] },
    { title: "Minecraft / Java (в разработке)", sheetTitle: "Minecraft / Java (в разработке)", minAge: 12, maxAge: 16, theme: "theme-minecraftDraft", mark: "MC", posterLine: "КУРС В РАЗРАБОТКЕ", posterAge: "12–16 лет", desc: "Курс нацелен на создание дополнений к игре через Java и 3D-моделирование.", why: "Подходит и новичкам с блочным программированием, и ребятам, которые уже знакомы с кодом.", learns: ["код на Java", "блочное программирование с возможностью вставки Java-кода", "3D-редактор и игровые дополнения"], interestKeys: ["Minecraft"], skillKeys: ["java", "3d"], keywords: ["minecraft", "java", "моды", "блочное", "3d", "игры"], posterExtra: "creeper" }
  ];

  const els = {
    resultRoot: document.getElementById("resultRoot"),
    form: document.getElementById("quizForm"),
    studyHistorySelect: document.getElementById("studyHistory"),
    codologiaCoursesWrapper: document.getElementById("codologiaCoursesWrapper"),
    codologiaCoursesList: document.getElementById("codologiaCoursesList"),
    pickedCourses: document.getElementById("pickedCourses"),
    otherSchoolWrapper: document.getElementById("otherSchoolWrapper"),
    pfdoSelect: document.getElementById("pfdo"),
    pfdoCommentWrap: document.getElementById("pfdoCommentWrap"),
    submitBtn: document.getElementById("submitBtn"),
  };

  let availableCourses = [];

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value);
  }

  function setCheckedValues(name, values) {
    const set = new Set(Array.isArray(values) ? values.map(String) : []);
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => { input.checked = set.has(input.value); });
  }

  function getSelectedCodologiaCourses() {
    return Array.from(document.querySelectorAll(".codologia-course-checkbox:checked")).map((el) => el.value);
  }

  function collectFormData() {
    return {
      parentName: document.getElementById("parentName")?.value || "",
      phone: document.getElementById("phone")?.value || "",
      email: document.getElementById("email")?.value || "",
      vk: document.getElementById("vk")?.value || "",
      childName: document.getElementById("childName")?.value || "",
      birthDate: document.getElementById("birthDate")?.value || "",
      grade: document.getElementById("grade")?.value || "",
      startMode: document.getElementById("startMode")?.value || "nearest",
      branch: document.getElementById("branch")?.value || "",
      studyHistory: document.getElementById("studyHistory")?.value || "",
      codologiaCourses: getSelectedCodologiaCourses(),
      otherSchoolName: document.getElementById("otherSchoolName")?.value || "",
      otherSchoolCourses: document.getElementById("otherSchoolCourses")?.value || "",
      skills: getCheckedValues("skills"),
      interests: getCheckedValues("interests"),
      plan: document.getElementById("plan")?.value || "",
      pfdo: document.getElementById("pfdo")?.value || "",
      pfdoComment: document.getElementById("pfdoComment")?.value || "",
      wishes: document.getElementById("wishes")?.value || "",
      consent: document.getElementById("consent")?.checked || false
    };
  }

  function getLearningReferenceDate(data) {
    const startMode = String(data.startMode || "nearest");
    if (startMode === "summer2026" || startMode === "summerPython1") return new Date("2026-06-01T00:00:00");
    if (startMode === "summerPython2") return new Date("2026-08-01T00:00:00");
    if (startMode === "autumn2026") return new Date("2026-09-01T00:00:00");
    return new Date();
  }

  function calcAgeAt(date, referenceDate) {
    if (!date) return NaN;
    const birth = new Date(date);
    const ref = referenceDate ? new Date(referenceDate) : new Date();
    if (Number.isNaN(birth.getTime()) || Number.isNaN(ref.getTime())) return NaN;
    let age = ref.getFullYear() - birth.getFullYear();
    const month = ref.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && ref.getDate() < birth.getDate())) age--;
    return age;
  }

  function buildGradeWarning(age, gradeValue) {
    const match = String(gradeValue || "").match(/\d+/);
    if (!match || Number.isNaN(age)) return "";
    const grade = Number(match[0]);
    const ranges = { 1: [6, 8], 2: [7, 9], 3: [8, 10], 4: [9, 11], 5: [10, 12], 6: [11, 13], 7: [12, 14], 8: [13, 15], 9: [14, 16], 10: [15, 17], 11: [16, 18] };
    const range = ranges[grade];
    if (!range) return "";
    const [minAge, maxAge] = range;
    if (age < minAge || age > maxAge) return `Класс нужно указывать на момент начала обучения: для ${grade}-го класса обычно ориентируются на возраст ${minAge}–${maxAge} лет, а сейчас получается ${age}.`;
    return "";
  }

  function normalizeCourseName(value) {
    return String(value || "").trim().toLowerCase().replace(/ё/g, "е").replace(/[\s]+/g, " ").replace(/[.,/()[\]{}\-–—:;!?'"«»]/g, "").trim();
  }

  function buildTakenCourseSet(data) {
    const set = new Set();
    (Array.isArray(data?.codologiaCourses) ? data.codologiaCourses : []).forEach((item) => set.add(normalizeCourseName(item)));
    return set;
  }

  function courseWasAlreadyTaken(course, takenSet) {
    if (!course || !takenSet || !takenSet.size) return false;
    const variants = [course.title, course.sheetTitle].filter(Boolean);
    return variants.some((value) => takenSet.has(normalizeCourseName(value)));
  }

  function courseBlockedByHigherPassedCourse(candidateCourse, passedCourses) {
    const candidateTitle = String(candidateCourse.title || "").trim();
    const chains = [
      ["Junior", "Middle 1", "Middle 2", "Middle 3", "High"],
      ["Программирование на языке Python / базовый уровень", "PythonSTART", "Python, уровень 2"],
      ["WEB-разработка", "WEB-разработка, второй уровень"]
    ];
    for (const chain of chains) {
      const candidateIndex = chain.findIndex((name) => normalizeCourseName(name) === normalizeCourseName(candidateTitle));
      if (candidateIndex === -1) continue;
      for (const passed of passedCourses || []) {
        const passedIndex = chain.findIndex((name) => normalizeCourseName(name) === normalizeCourseName(passed));
        if (passedIndex === -1) continue;
        if (passedIndex > candidateIndex) return true;
      }
    }
    return false;
  }

  function buildRecommendations(data, age) {
    const interests = new Set((data.interests || []).map(String));
    const skills = new Set((data.skills || []).map(String));
    const takenSet = buildTakenCourseSet(data);
    const startMode = String(data.startMode || "nearest").toLowerCase();
    const wishes = String(data.wishes || "").toLowerCase();
    const plan = String(data.plan || "").toLowerCase();
    const studyHistory = String(data.studyHistory || "").toLowerCase();

    const eligible = COURSES.filter((course) => {
      if (Number.isNaN(age) || age < course.minAge || age > course.maxAge) return false;
      if (Array.isArray(course.startModes) && course.startModes.length && !course.startModes.includes(startMode)) return false;
      if (courseWasAlreadyTaken(course, takenSet)) return false;
      if (courseBlockedByHigherPassedCourse(course, data.codologiaCourses || [])) return false;
      return true;
    });

    const ranked = [];
    for (const course of eligible) {
      const matchedInterest = (course.interestKeys || []).some((i) => interests.has(i));
      if (!matchedInterest) continue; // interest is mandatory

      let score = 0;
      const matchedNotes = [];
      const centerAge = (course.minAge + course.maxAge) / 2;
      score += Math.max(0, 12 - Math.abs(age - centerAge) * 2);

      if ((course.skillKeys || []).some((skill) => skills.has(skill))) {
        score += 4;
        matchedNotes.push("имеющиеся навыки помогут быстрее включиться в курс");
      }

      if (course.title === "Математика на 5" && interests.has("math_help")) {
        score += 8;
        matchedNotes.push("ребёнку нужна помощь по математике");
      }

      if (course.title === "Олимпиадная математика" && interests.has("math_olympiad")) {
        score += 8;
        matchedNotes.push("ребёнку нравятся логические и олимпиадные задачи");
      }

      if (course.title === "GameLab" && startMode === "summer2026") {
        score += 5;
        matchedNotes.push("подходит под летний формат");
      }

      if (course.title === "Программирование на языке Python / базовый уровень" && plan.includes("экспресс")) {
        score += 4;
        matchedNotes.push("подходит под выбранный формат экспресс-обучения");
      }

      if (studyHistory === "codologia") score += 1;
      if (wishes.includes("unity") && course.title.includes("Unity")) score += 2;
      if (wishes.includes("blender") && course.title.includes("Blender")) score += 2;
      if (wishes.includes("python") && course.title.toLowerCase().includes("python")) score += 2;
      if (wishes.includes("сайт") && course.title.includes("WEB")) score += 2;
      if (wishes.includes("игр") && /unity|gamelab/i.test(course.title)) score += 2;

      if (!matchedNotes.length) matchedNotes.push("интерес совпадает с направлением курса");

      ranked.push({
        title: course.title,
        sheetTitle: course.sheetTitle || course.title,
        description: course.desc,
        why: course.why,
        ageRange: `${course.minAge}–${course.maxAge} лет`,
        score,
        learns: course.learns || [],
        matchedNotes: matchedNotes.slice(0, 4),
        posterLine: course.posterLine || "ПРОГРАММА",
        posterAge: course.posterAge || `${course.minAge}–${course.maxAge} лет`,
        posterTheme: course.theme || "default",
        posterMark: course.mark || "★",
        posterExtra: course.posterExtra || "",
        theme: course.theme || "default"
      });
    }

    ranked.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "ru"));
    return ranked.slice(0, 3);
  }

  function renderCodologiaCourses() {
    els.codologiaCoursesList.innerHTML = "";
    const fragment = document.createDocumentFragment();
    availableCourses.forEach((course) => {
      const label = document.createElement("label");
      label.className = "multi-option";
      label.innerHTML = `
        <input type="checkbox" name="codologiaCourses" value="${escapeHtml(course.value)}" class="codologia-course-checkbox">
        <span>${escapeHtml(course.label)}</span>
      `;
      fragment.appendChild(label);
    });
    els.codologiaCoursesList.appendChild(fragment);
    updatePickedCourses();
  }

  function updatePickedCourses() {
    const selected = getSelectedCodologiaCourses();
    if (!selected.length) {
      els.pickedCourses.innerHTML = "Пока ничего не выбрано";
      return;
    }
    els.pickedCourses.innerHTML = `<strong>Выбрано:</strong> ${selected.map(escapeHtml).join(", ")}`;
  }

  function toggleConditionalBlocks() {
    const studyValue = els.studyHistorySelect.value;
    els.codologiaCoursesWrapper.classList.toggle("hidden", studyValue !== "codologia");
    els.otherSchoolWrapper.classList.toggle("hidden", studyValue !== "other");
    const pfdoValue = els.pfdoSelect.value;
    els.pfdoCommentWrap.classList.toggle("hidden", pfdoValue !== "Свой вариант");
  }

  function setLoading(isLoading) {
    els.submitBtn.disabled = isLoading;
    els.submitBtn.textContent = isLoading ? "Подбираем курс…" : "Подобрать курс";
  }

  function attachResultHandlers() {
    const retryBtn = document.getElementById("retryBtn");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        els.resultRoot.innerHTML = "";
        setCheckedValues("skills", []);
        setCheckedValues("interests", []);
        document.querySelectorAll(".codologia-course-checkbox").forEach((input) => { input.checked = false; });
        toggleConditionalBlocks();
        updatePickedCourses();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    document.querySelectorAll(".js-toggle-details").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const panel = document.getElementById(targetId);
        if (!panel) return;
        const willOpen = panel.classList.contains("hidden");
        panel.classList.toggle("hidden", !willOpen);
        btn.textContent = willOpen ? "Скрыть" : "Подробнее…";
      });
    });
  }

  function renderResult(response) {
    if (!response) {
      els.resultRoot.innerHTML = `
        <div class="result-card">
          <div class="result-headline">Нет ответа</div>
          <h2 class="result-title">Сервер не вернул результат</h2>
        </div>
      `;
      return;
    }

    if (response.errorMessage) {
      els.resultRoot.innerHTML = `
        <div class="result-card">
          <div class="result-headline">Ошибка подбора</div>
          <h2 class="result-title">${escapeHtml(response.errorMessage)}</h2>
          <p class="result-subtitle">${escapeHtml(response.details || "")}</p>
          <div class="result-actions footer">
            <a href="tel:${escapeHtml(response.phoneTel || "")}" class="link-button secondary">Позвонить</a>
          </div>
        </div>
      `;
      attachResultHandlers();
      return;
    }

    const recommendations = Array.isArray(response.recommendations) ? response.recommendations : [];
    let cardsHtml = "";

    if (!recommendations.length) {
      cardsHtml = `
        <div class="result-warn">
          ${escapeHtml(response.noRecommendationsMessage || "Подходящих новых курсов не найдено. Менеджер поможет подобрать следующий шаг.")}
        </div>
      `;
    } else {
      recommendations.forEach((course, index) => {
        const theme = escapeHtml(course.theme || "default");
        const posterTheme = escapeHtml(course.posterTheme || course.theme || "default");
        const posterLine = escapeHtml(course.posterLine || "");
        const title = escapeHtml(course.title || "");
        const posterAge = escapeHtml(course.posterAge || "");
        const description = escapeHtml(course.description || "");
        const why = escapeHtml(course.why || "");
        const learns = Array.isArray(course.learns) ? course.learns : [];
        const notes = Array.isArray(course.matchedNotes) ? course.matchedNotes : [];
        const extraId = `extra-${index}`;
        const hasCreeper = course.posterExtra === "creeper";
        const useTriangle = ["theme-middle1", "theme-middle2", "theme-middle3", "theme-high", "theme-unity"].includes(course.theme);

        cardsHtml += `
          <article class="rec-card ${theme}">
            <div class="rec-poster ${posterTheme}">
              <div class="poster-content">
                <div class="poster-badge">${posterLine}</div>
                <h3 class="poster-title">${title}</h3>
                <div class="poster-age">${posterAge}</div>
              </div>
              <div class="poster-mark">${escapeHtml(course.posterMark || "★")}</div>
              ${hasCreeper ? '<div class="poster-creeper"></div>' : ""}
              ${useTriangle ? '<div class="poster-triangle poster-triangle-a"></div><div class="poster-triangle poster-triangle-b"></div>' : ""}
              <div class="poster-deco bottom"></div>
              <div class="poster-deco small"></div>
            </div>

            <div class="rec-summary">${description}</div>

            <div class="rec-body">
              <div class="rec-block">
                <strong>Почему подходит:</strong><br>
                ${why}
              </div>

              <div id="${extraId}" class="rec-extra hidden">
                <div class="rec-block">
                  <strong>Что изучают:</strong>
                  <ul class="rec-list">
                    ${learns.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </div>

                <div class="rec-block">
                  <strong>Почему рекомендован:</strong>
                  <ul class="rec-list">
                    ${notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </div>
              </div>

              <div class="rec-actions compact">
                <button type="button" class="mini-btn secondary-btn js-toggle-details" data-target="${extraId}">Подробнее…</button>
                <a href="tel:${escapeHtml(response.phoneTel || "")}" class="mini-btn primary-btn">Записаться ${escapeHtml(response.phoneText || "")}</a>
              </div>
            </div>
          </article>
        `;
      });
    }

    els.resultRoot.innerHTML = `
      <div class="result-card">
        <div class="result-headline">Результаты подбора</div>
        <h2 class="result-title">Рекомендуемые курсы</h2>
        <p class="result-subtitle">
          Возраст ребёнка на момент начала обучения: <strong>${escapeHtml(response.age)}</strong>
        </p>

        ${response.ageWarning ? `<div class="result-warn">${escapeHtml(response.ageWarning)}</div>` : ""}
        ${response.gradeWarning ? `<div class="result-warn">${escapeHtml(response.gradeWarning)}</div>` : ""}
        ${!recommendations.length && response.noRecommendationsMessage ? `<div class="result-warn">${escapeHtml(response.noRecommendationsMessage)}</div>` : ""}

        <div class="rec-grid">${cardsHtml}</div>

        <div class="result-actions footer">
          <button type="button" class="link-button secondary" id="retryBtn">Пройти ещё раз</button>
        </div>
      </div>
    `;

    attachResultHandlers();
    setTimeout(() => { els.resultRoot.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100);
  }

  function flattenForTransport(data) {
    const payload = {};
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value) || (value && typeof value === "object")) {
        payload[key] = JSON.stringify(value);
      } else if (typeof value === "boolean") {
        payload[key] = value ? "true" : "false";
      } else {
        payload[key] = String(value ?? "");
      }
    }
    return payload;
  }

  async function sendToBackend(payload) {
  if (!BACKEND_URL || /PASTE_YOUR_APPS_SCRIPT_WEB_APP_EXEC_URL_HERE/.test(BACKEND_URL)) return;

  try {
    const body = new URLSearchParams(flattenForTransport(payload)).toString();

    await fetch(BACKEND_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body
    });

    console.log("Форма отправлена");
  } catch (err) {
    console.error(err);
  }
}

  async function submitQuiz() {
    const data = collectFormData();
    if (!data.consent) {
      alert("Нужно поставить согласие на обработку персональных данных.");
      return;
    }

    const referenceDate = getLearningReferenceDate(data);
    const age = calcAgeAt(data.birthDate, referenceDate);
    const gradeWarning = buildGradeWarning(age, data.grade);
    const ageWarning = !Number.isNaN(age) && age > 16 ? "Курсы Кодологии рассчитаны на детей до 16 лет на момент начала обучения." : "";
    const recommendations = buildRecommendations(data, age);
    const noRecommendationsMessage = !recommendations.length ? "Подходящих новых рекомендаций не найдено. Менеджер поможет подобрать следующий шаг." : "";

    const response = {
      age: Number.isNaN(age) ? "не удалось определить" : age,
      recommendations,
      ageWarning,
      gradeWarning,
      noRecommendationsMessage,
      phoneText: "+7 (8172) 704-323",
      phoneTel: "+78172704323",
    };

    renderResult(response);
    setLoading(true);
    await sendToBackend({
      ...data,
      age: Number.isNaN(age) ? "" : age,
      referenceDate: referenceDate.toISOString(),
      ageWarning,
      gradeWarning,
      recommendations: recommendations.map((course) => course.sheetTitle || course.title || ""),
      pageSource: "github-pages"
    });
    setLoading(false);
  }

  function initApp() {
    document.addEventListener("change", (e) => {
      if (e.target.classList.contains("codologia-course-checkbox")) updatePickedCourses();
    });

    els.studyHistorySelect.addEventListener("change", toggleConditionalBlocks);
    els.pfdoSelect.addEventListener("change", toggleConditionalBlocks);
    els.form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitQuiz();
    });

    availableCourses = COURSE_ORDER.map((title) => {
      const course = COURSES.find((c) => c.title === title);
      return { value: course ? course.title : title, label: title };
    });

    renderCodologiaCourses();
    toggleConditionalBlocks();
    els.resultRoot.innerHTML = "";
  }

  initApp();
})();
