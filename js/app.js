(function () {
  const TOTAL = QUIZ_QUESTIONS.length;
  let currentQuestion = 0;
  let answers = new Array(TOTAL).fill(null);

  const sections = {
    landing: document.getElementById("landing"),
    quiz: document.getElementById("quiz"),
    results: document.getElementById("results")
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
    resultContent: document.getElementById("result-content")
  };

  function showSection(name) {
    Object.values(sections).forEach((s) => s.classList.remove("active"));
    sections[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    const q = QUIZ_QUESTIONS[currentQuestion];
    const progress = ((currentQuestion + 1) / TOTAL) * 100;

    els.progressFill.style.width = `${progress}%`;
    els.questionCounter.textContent = `Question ${currentQuestion + 1} of ${TOTAL}`;
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
    els.nextBtn.textContent = currentQuestion === TOTAL - 1 ? "See My Results" : "Next";
  }

  function selectOption(index) {
    answers[currentQuestion] = index;
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
    els.nextBtn.disabled = false;
  }

  function startQuiz() {
    currentQuestion = 0;
    answers = new Array(TOTAL).fill(null);
    showSection("quiz");
    renderQuestion();
  }

  function nextQuestion() {
    if (answers[currentQuestion] === null) return;

    if (currentQuestion < TOTAL - 1) {
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
    const scores = calculateScores(answers);
    const archetype = resolveArchetype(scores);
    const dimensions = getDimensionPercentages(scores);
    const { code } = getDimensionCode(scores);

    els.resultContent.innerHTML = buildResultHTML(archetype, dimensions, code);
    showSection("results");

    const hash = btoa(JSON.stringify({ a: archetype.id, c: code }));
    history.replaceState(null, "", `#result=${hash}`);
  }

  function buildResultHTML(archetype, dimensions, code) {
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

    return `
      <div class="result-hero" style="background: linear-gradient(135deg, ${archetype.color}, var(--royal-blue))">
        <div class="result-icon">${archetype.icon}</div>
        <h2 class="result-name">${archetype.name}</h2>
        <p class="result-tagline">${archetype.tagline}</p>
        <span class="result-code">${code}</span>
      </div>

      <div class="card result-section">
        <h3>Who You Are</h3>
        <p>${archetype.description}</p>
      </div>

      <div class="card result-section">
        <h3>Your "Quiet Confusion" Trap</h3>
        <div class="trap-box">
          <p>${archetype.quietConfusion}</p>
        </div>
      </div>

      <div class="card result-section">
        <h3>Your Dimension Profile</h3>
        <div class="dimension-bars">${dimBars}</div>
      </div>

      <div class="card result-section">
        <h3>Best-Fit Futures</h3>
        <div class="futures-list">${futures}</div>
      </div>

      <div class="card result-section">
        <h3>Stage 1: What To Do Next</h3>
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
          <p>Use these phrases when talking to family about your strengths:</p>
          <ul class="vocab-list">${vocab}</ul>
        </div>
      </div>`;
  }

  function retakeQuiz() {
    history.replaceState(null, "", window.location.pathname);
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

      els.resultContent.innerHTML = buildResultHTML(archetype, [
        { label: "Internal Alignment", left: "Internal", right: "External", percent: 50 },
        { label: "Problem-Solving", left: "Structured", right: "Adaptive", percent: 50 },
        { label: "Core Driver", left: "Curiosity", right: "Security", percent: 50 },
        { label: "Execution", left: "People", right: "Process", percent: 50 }
      ], data.c);
      showSection("results");
    } catch {
      /* invalid hash */
    }
  }

  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  document.getElementById("prev-btn").addEventListener("click", prevQuestion);
  document.getElementById("retake-btn").addEventListener("click", retakeQuiz);
  document.getElementById("share-btn").addEventListener("click", shareResults);

  loadFromHash();
})();
