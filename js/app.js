(function () {
  let quizMode = "student";
  let activeQuestions = QUIZ_QUESTIONS;
  let currentQuestion = 0;
  let answers = [];

  let profile = { age: null, gender: null };
  let parentProfile = { role: null, parentAge: null, childGender: null, childAge: null };

  const sections = {
    landing: document.getElementById("landing"),
    profile: document.getElementById("profile"),
    parentProfile: document.getElementById("parent-profile"),
    quiz: document.getElementById("quiz"),
    results: document.getElementById("results"),
    about: document.getElementById("about"),
    contact: document.getElementById("contact")
  };

  const sectionIds = {
    landing: "landing",
    profile: "profile",
    parentProfile: "parent-profile",
    quiz: "quiz",
    results: "results",
    about: "about",
    contact: "contact"
  };

  const els = {
    progressFill: document.getElementById("progress-fill"),
    questionCounter: document.getElementById("question-counter"),
    categoryBadge: document.getElementById("category-badge"),
    categoryLabel: document.getElementById("category-label"),
    questionText: document.getElementById("question-text"),
    optionsList: document.getElementById("options-list"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    resultContent: document.getElementById("result-content"),
    ageSelect: document.getElementById("age-select"),
    genderOptions: document.getElementById("gender-options"),
    profileContinueBtn: document.getElementById("profile-continue-btn"),
    parentRoleOptions: document.getElementById("parent-role-options"),
    parentAgeSelect: document.getElementById("parent-age-select"),
    childGenderOptions: document.getElementById("child-gender-options"),
    childAgeSelect: document.getElementById("child-age-select"),
    parentProfileContinueBtn: document.getElementById("parent-profile-continue-btn")
  };

  function getTotal() {
    return activeQuestions.length;
  }

  function showSection(name) {
    const pageId = sectionIds[name];
    if (!pageId || !sections[name]) {
      console.error("Unknown section:", name);
      return;
    }
    if (typeof window.showInfoPage === "function") {
      window.showInfoPage(pageId);
      return;
    }
    Object.values(sections).forEach((s) => {
      if (s) s.classList.remove("active");
    });
    sections[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    const total = getTotal();
    const q = activeQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / total) * 100;

    els.progressFill.style.width = `${progress}%`;
    els.questionCounter.textContent = `Question ${currentQuestion + 1} of ${total}`;
    els.categoryBadge.textContent = q.category;
    els.categoryLabel.textContent = q.category;
    els.questionText.textContent = q.scenario;

    els.optionsList.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn" + (answers[currentQuestion] === i ? " selected" : "");
      btn.type = "button";
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span>${opt.label}`;
      btn.addEventListener("click", () => selectOption(i));
      els.optionsList.appendChild(btn);
    });

    els.prevBtn.disabled = currentQuestion === 0;
    els.nextBtn.disabled = answers[currentQuestion] === null;
    els.nextBtn.textContent = currentQuestion === total - 1
      ? (quizMode === "parent" ? "See Child's Results" : "See My Results")
      : "Next";
  }

  function selectOption(index) {
    answers[currentQuestion] = index;
    document.querySelectorAll("#options-list .option-btn").forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
    els.nextBtn.disabled = false;
  }

  function updateProfileContinue() {
    els.profileContinueBtn.disabled = !els.ageSelect.value || !profile.gender;
  }

  function selectGender(value) {
    profile.gender = value;
    els.genderOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.gender === value);
    });
    updateProfileContinue();
  }

  function showStudentProfile() {
    quizMode = "student";
    showSection("profile");
    updateProfileContinue();
  }

  function resetProfile() {
    profile = { age: null, gender: null };
    els.ageSelect.value = "";
    els.genderOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    els.profileContinueBtn.disabled = true;
  }

  function updateParentProfileContinue() {
    const ready = parentProfile.role
      && els.parentAgeSelect.value
      && parentProfile.childGender
      && els.childAgeSelect.value;
    els.parentProfileContinueBtn.disabled = !ready;
  }

  function selectParentRole(value) {
    parentProfile.role = value;
    els.parentRoleOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.role === value);
    });
    updateParentProfileContinue();
  }

  function selectChildGender(value) {
    parentProfile.childGender = value;
    els.childGenderOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.gender === value);
    });
    updateParentProfileContinue();
  }

  function showParentProfile() {
    quizMode = "parent";
    showSection("parentProfile");
    updateParentProfileContinue();
  }

  function resetParentProfile() {
    parentProfile = { role: null, parentAge: null, childGender: null, childAge: null };
    els.parentAgeSelect.value = "";
    els.childAgeSelect.value = "";
    els.parentRoleOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    els.childGenderOptions.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    els.parentProfileContinueBtn.disabled = true;
  }

  function startQuiz() {
    if (quizMode === "parent") {
      parentProfile.parentAge = els.parentAgeSelect.value;
      parentProfile.childAge = els.childAgeSelect.value;
      activeQuestions = PARENT_QUIZ_QUESTIONS;
    } else {
      profile.age = els.ageSelect.value;
      activeQuestions = QUIZ_QUESTIONS;
    }

    currentQuestion = 0;
    answers = new Array(getTotal()).fill(null);
    showSection("quiz");
    renderQuestion();
  }

  function nextQuestion() {
    if (answers[currentQuestion] === null) return;

    if (currentQuestion < getTotal() - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  }

  function showResults() {
    const scores = calculateScores(answers, activeQuestions);
    const archetype = resolveArchetype(scores);
    const dimensions = getDimensionPercentages(scores);
    const { code } = getDimensionCode(scores);

    els.resultContent.innerHTML = buildResultHTML(archetype, dimensions, code, quizMode === "parent");
    showSection("results");

    const hash = btoa(JSON.stringify({ a: archetype.id, c: code, p: quizMode === "parent" ? 1 : 0 }));
    history.replaceState(null, "", `#result=${hash}`);
  }

  function buildResultHTML(archetype, dimensions, code, isParent) {
    const dimBars = dimensions.map((d) => {
      const fillColor = d.percent >= 50 ? "var(--royal-blue)" : "var(--teal)";
      const displayPercent = d.percent >= 50 ? d.percent : 100 - d.percent;
      const dominant = d.percent >= 50 ? d.left : d.right;

      return `
        <div class="dimension-item">
          <label>
            <span class="dim-title">${d.label}</span>
            <span>${dominant} (${displayPercent}%)</span>
          </label>
          <div class="dim-bar">
            <div class="dim-bar-fill" style="width: ${displayPercent}%; background: ${fillColor}"></div>
          </div>
        </div>`;
    }).join("");

    const futures = archetype.futures.map((f) => `<span class="future-tag">${f}</span>`).join("");
    const mentors = archetype.mentors.map((m) => `
      <div class="mentor-item">
        <strong>${m.name}</strong>
        <p>${m.story}</p>
      </div>`).join("");
    const vocab = archetype.vocabulary.map((v) => `<li>${v}</li>`).join("");

    const whoTitle = isParent ? "Who Your Child May Be" : "Who You Are";
    const trapTitle = isParent ? "Your Child's \"Quiet Confusion\" Trap" : "Your \"Quiet Confusion\" Trap";
    const profileTitle = isParent ? "Your Child's Dimension Profile" : "Your Dimension Profile";
    const futuresTitle = isParent ? "Best-Fit Futures for Your Child" : "Best-Fit Futures";
    const nextTitle = isParent ? "Stage 1: What To Encourage Next" : "Stage 1: What To Do Next";
    const vocabIntro = isParent
      ? "Use these phrases when talking to your child about their strengths:"
      : "Use these phrases when talking to family about your strengths:";

    return `
      <div class="result-hero" style="background: linear-gradient(135deg, ${archetype.color}, var(--royal-blue))">
        <div class="result-icon">${archetype.icon}</div>
        <h2 class="result-name">${archetype.name}</h2>
        <p class="result-tagline">${archetype.tagline}</p>
        <span class="result-code">${code}</span>
      </div>

      <div class="card result-section">
        <h3>${whoTitle}</h3>
        <p>${archetype.description}</p>
      </div>

      <div class="card result-section">
        <h3>${trapTitle}</h3>
        <div class="trap-box">
          <p>${archetype.quietConfusion}</p>
        </div>
      </div>

      <div class="card result-section">
        <h3>${profileTitle}</h3>
        <div class="dimension-bars">${dimBars}</div>
      </div>

      <div class="card result-section">
        <h3>${futuresTitle}</h3>
        <div class="futures-list">${futures}</div>
      </div>

      <div class="card result-section">
        <h3>${nextTitle}</h3>
        <div class="action-card">
          <h4>Action A — The "Micro-Dose" Project</h4>
          <p>${archetype.microProject}</p>
        </div>
        <div class="action-card">
          <h4>Action B — The "Secret Mentor" Read</h4>
          ${mentors}
        </div>
        <div class="action-card">
          <h4>Action C — The "Alternative Vocabulary" List</h4>
          <p>${vocabIntro}</p>
          <ul class="vocab-list">${vocab}</ul>
        </div>
      </div>`;
  }

  function retakeQuiz() {
    history.replaceState(null, "", window.location.pathname);
    resetProfile();
    resetParentProfile();
    quizMode = "student";
    activeQuestions = QUIZ_QUESTIONS;
    showSection("landing");
  }

  function shareResults() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById("share-btn");
      const original = btn.textContent;
      btn.textContent = "Link Copied!";
      setTimeout(() => { btn.textContent = original; }, 2000);
    });
  }

  function loadFromHash() {
    const hash = window.location.hash;
    if (!hash.startsWith("#result=")) return;

    try {
      const data = JSON.parse(atob(hash.slice(8)));
      const archetype = ARCHETYPES[data.a];
      if (!archetype) return;

      const isParent = data.p === 1;
      els.resultContent.innerHTML = buildResultHTML(archetype, [
        { label: "Internal Alignment", left: "Internal", right: "External", percent: 50 },
        { label: "Problem-Solving", left: "Structured", right: "Adaptive", percent: 50 },
        { label: "Core Driver", left: "Curiosity", right: "Security", percent: 50 },
        { label: "Execution", left: "People", right: "Process", percent: 50 }
      ], data.c, isParent);
      showSection("results");
    } catch {
      /* invalid hash */
    }
  }

  function bindClick(id, handler) {
    const el = document.getElementById(id);
    if (!el) {
      console.error("Missing element:", id);
      return;
    }
    el.addEventListener("click", handler);
  }

  function bindOptionButtons(container, handler) {
    if (!container) return;
    container.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handler(btn));
    });
  }

  function initApp() {
    bindClick("start-btn", showStudentProfile);
    bindClick("parent-start-btn", showParentProfile);
    bindClick("profile-back-btn", () => showSection("landing"));
    bindClick("parent-profile-back-btn", () => showSection("landing"));
    bindClick("profile-continue-btn", startQuiz);
    bindClick("parent-profile-continue-btn", startQuiz);
    bindClick("next-btn", nextQuestion);
    bindClick("prev-btn", prevQuestion);
    bindClick("retake-btn", retakeQuiz);
    bindClick("share-btn", shareResults);

    if (els.ageSelect) els.ageSelect.addEventListener("change", updateProfileContinue);
    if (els.parentAgeSelect) els.parentAgeSelect.addEventListener("change", updateParentProfileContinue);
    if (els.childAgeSelect) els.childAgeSelect.addEventListener("change", updateParentProfileContinue);

    bindOptionButtons(els.genderOptions, (btn) => selectGender(btn.dataset.gender));
    bindOptionButtons(els.parentRoleOptions, (btn) => selectParentRole(btn.dataset.role));
    bindOptionButtons(els.childGenderOptions, (btn) => selectChildGender(btn.dataset.gender));

    document.addEventListener("click", (e) => {
      const actionBtn = e.target.closest("[data-action]");
      if (!actionBtn) return;
      const action = actionBtn.dataset.action;
      if (action === "student") showStudentProfile();
      if (action === "parent") showParentProfile();
    });

    loadFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
