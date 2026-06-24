const ARCHETYPES = {
  builder: {
    id: "builder",
    code: "I-A-C-T",
    name: "The Autonomous Builder",
    tagline: "Individualist · Creative · Risk-Tolerant",
    icon: "◆",
    color: "#A67437",
    description: "You are deeply stifled by traditional South Asian academic rote-learning. You want to create things from scratch and forge your own path.",
    parentDescription: "Your child may feel deeply stifled by traditional South Asian rote-learning. They likely want to create things from scratch and forge their own path rather than follow a preset track.",
    quietConfusion: "You are likely passing your exams but feel completely detached, often experiencing high anxiety because you feel like the \"black sheep\" of the family.",
    parentQuietConfusion: "Your child may be passing exams but seem detached or anxious—especially if they feel like the \"black sheep\" when their true interests do not match family expectations.",
    futures: ["Entrepreneurship", "Visual communication", "Creative direction", "Media production", "Independent design studios"],
    microProject: "Don't change your major yet. This weekend, spend 2 hours creating a small poster series or storyboard for a short film idea just to see how it feels to make something original.",
    parentMicroProject: "Before pushing a major change, suggest a low-stakes creative experiment this weekend—a short poster series or storyboard for a film idea—so you can see how your child engages when making something original.",
    vocabulary: [
      "visual storytelling and communication design",
      "creative direction and problem-solving",
      "innovation and independent creative practice"
    ],
    mentors: [
      { name: "Abdur Rahman Chughtai", story: "Pakistani painter who rejected colonial academic formulas and built a distinctive visual language—proof that forging your own creative path can earn lasting respect." },
      { name: "Kamal-ol-Molk", story: "Persian master who modernized traditional painting on his own terms, training a generation while staying true to independent artistic vision." },
      { name: "Khushal Khan Khattak", story: "Pashtun poet-warrior from the Afghanistan–Pakistan frontier who expressed fierce individual identity and creative voice outside court conventions." }
    ]
  },
  catalyst: {
    id: "catalyst",
    code: "I-A-C-H",
    name: "The Empathetic Catalyst",
    tagline: "Human-Centric · Adaptable · Cause-Driven",
    icon: "◇",
    color: "#15B6C8",
    description: "You are driven by human connection and social impact. You hate raw data or cold, bureaucratic systems and thrive when helping real people.",
    parentDescription: "Your child is likely driven by human connection and social impact. They may struggle with raw data or cold bureaucratic systems and come alive when helping real people.",
    quietConfusion: "You are often pushed toward medicine because \"it helps people,\" but you actually hate the sterile, hyper-competitive nature of hospital and medical school environments.",
    parentQuietConfusion: "You may be steering your child toward medicine because \"it helps people,\" but they might actually dread the sterile, hyper-competitive nature of hospital and medical school environments.",
    futures: ["Psychology", "Human resources", "Development sector / NGOs", "Public policy", "Counseling"],
    microProject: "Volunteer for 2 hours at a community helpline or mentor one younger student this week. Notice how you feel when someone genuinely benefits from your presence.",
    parentMicroProject: "Encourage your child to volunteer for 2 hours at a community helpline or mentor a younger student this week. Notice whether their energy lifts when someone genuinely benefits from their presence.",
    vocabulary: [
      "human-centered design and community impact",
      "behavioral science and social development",
      "organizational psychology and people strategy"
    ],
    mentors: [
      { name: "Abdul Sattar Edhi", story: "Pakistani humanitarian who devoted his life to serving strangers—showing that deep empathy and social impact need not follow a medical or bureaucratic career." },
      { name: "Khan Abdul Ghaffar Khan", story: "Pashtun reformer from the Pakistan–Afghanistan frontier who mobilized communities through nonviolence and education rather than competition or status." },
      { name: "Saadi Shirazi", story: "Persian poet whose works teach compassion, justice, and human dignity—a model of turning empathy into lasting cultural influence." }
    ]
  },
  architect: {
    id: "architect",
    code: "I-S-C-T",
    name: "The Analytical Architect",
    tagline: "Systematic · Fact-Driven · Stability-Seeking",
    icon: "▣",
    color: "#03318C",
    description: "You genuinely love data, logic, and puzzles. You thrive in structured environments where hard work equals predictable results.",
    parentDescription: "Your child may genuinely love data, logic, and puzzles. They often thrive in structured environments where hard work leads to predictable, measurable results.",
    quietConfusion: "Even though you are a good fit for fields like architecture, finance, or research, your confusion stems from where you apply your logical mind. You might be studying engineering because of your parents, when your true passion is urban planning, economics, or museum research.",
    parentQuietConfusion: "Your child may suit architecture, finance, or research, but their confusion can come from where to apply a logical mind—they might be studying engineering to please you when urban planning, economics, or museum research excites them more.",
    futures: ["Urban planning", "Financial analytics", "Research science", "Architecture"],
    microProject: "Take a free 2-hour intro session on architectural drawing, economic case studies, or museum research online. See which type of logical problem genuinely excites you.",
    parentMicroProject: "Offer your child a free 2-hour intro to architectural drawing, economic case studies, or museum research online. Watch which type of logical problem genuinely excites them.",
    vocabulary: [
      "research analysis and structured inquiry",
      "quantitative research and financial planning",
      "architectural thinking and systematic design"
    ],
    mentors: [
      { name: "Al-Biruni", story: "Scholar who worked in Ghazni (Afghanistan) and across the region, combining rigorous measurement, astronomy, and systematic inquiry decades ahead of his time." },
      { name: "Dr. Abdus Salam", story: "Pakistani physicist who pursued theoretical research with mathematical precision—showing how analytical minds can reshape science from South Asia." },
      { name: "Omar Khayyam", story: "Persian mathematician and astronomer who solved complex geometric problems and reformed the calendar through logic, structure, and evidence." }
    ]
  },
  harmonizer: {
    id: "harmonizer",
    code: "E-S-S-T",
    name: "The Harmonizing Executor",
    tagline: "Structured · Collective · Detail-Oriented",
    icon: "◎",
    color: "#B3C391",
    description: "You value stability, family alignment, and order. You are comfortable working within established institutions and bringing people together.",
    parentDescription: "Your child likely values stability, family alignment, and order. They may feel most comfortable within established institutions and bringing people together.",
    quietConfusion: "You get paralyzed by conflict. You want to make your parents happy, but you are terrified that you don't have the \"brilliance\" to survive hyper-competitive fields like corporate law or surgery.",
    parentQuietConfusion: "Your child may freeze in conflict. They often want to please you but fear they lack the \"brilliance\" to survive hyper-competitive fields like corporate law or surgery.",
    futures: ["Project management", "Corporate administration", "Supply chain logistics", "Public sector administration"],
    microProject: "Organize a small study group or family event this week. Notice how your natural planning skills create calm and structure for everyone around you.",
    parentMicroProject: "Encourage your child to organize a small study group or family event this week. Notice how their natural planning creates calm and structure for everyone around them.",
    vocabulary: [
      "project management and operational excellence",
      "institutional administration and process optimization",
      "supply chain and organizational coordination"
    ],
    mentors: [
      { name: "Cyrus the Great", story: "Persian ruler who built stable institutions across diverse peoples—governance through order, coordination, and long-term administrative vision." },
      { name: "Ahmad Shah Durrani", story: "Founder of modern Afghanistan who unified tribal groups into a functioning state through diplomacy, structure, and steady leadership." },
      { name: "Muhammad Ali Jinnah", story: "Pakistani statesman who assembled institutions and consensus under pressure—proof that careful execution and family-of-nation alignment can change history." }
    ]
  }
};

function calculateScores(answers, questions) {
  const scores = { I: 0, E: 0, S: 0, A: 0, C: 0, Sec: 0, H: 0, T: 0 };

  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[optionIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  return scores;
}

function getDimensionCode(scores) {
  const dim1 = scores.I >= scores.E ? "I" : "E";
  const dim2 = scores.S >= scores.A ? "S" : "A";
  const dim3 = scores.C >= scores.Sec ? "C" : "S";
  const dim4 = scores.H >= scores.T ? "H" : "T";

  return { code: `${dim1}-${dim2}-${dim3}-${dim4}`, dimensions: { dim1, dim2, dim3, dim4 }, scores };
}

const ARCHETYPE_CODES = {
  builder: "I-A-C-T",
  catalyst: "I-A-C-H",
  architect: "I-S-C-T",
  harmonizer: "E-S-S-T"
};

function resolveArchetype(scores) {
  const { dimensions } = getDimensionCode(scores);
  const actual = [dimensions.dim1, dimensions.dim2, dimensions.dim3, dimensions.dim4];
  const actualCode = actual.join("-");

  const exact = Object.entries(ARCHETYPE_CODES).find(([, code]) => code === actualCode);
  if (exact) return ARCHETYPES[exact[0]];

  let bestId = "harmonizer";
  let bestDistance = Infinity;

  Object.entries(ARCHETYPE_CODES).forEach(([id, code]) => {
    const target = code.split("-");
    const distance = target.reduce((sum, letter, index) => sum + (letter !== actual[index] ? 1 : 0), 0);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = id;
    }
  });

  return ARCHETYPES[bestId];
}

function getDimensionPercentages(scores) {
  const total1 = scores.I + scores.E || 1;
  const total2 = scores.S + scores.A || 1;
  const total3 = scores.C + scores.Sec || 1;
  const total4 = scores.H + scores.T || 1;

  return [
    { label: "Internal Alignment", left: "Internal", right: "External", percent: Math.round((scores.I / total1) * 100) },
    { label: "Problem-Solving", left: "Structured", right: "Adaptive", percent: Math.round((scores.S / total2) * 100) },
    { label: "Core Driver", left: "Curiosity", right: "Security", percent: Math.round((scores.C / total3) * 100) },
    { label: "Execution", left: "People", right: "Process", percent: Math.round((scores.H / total4) * 100) }
  ];
}
