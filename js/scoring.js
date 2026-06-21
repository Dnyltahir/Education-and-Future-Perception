const ARCHETYPES = {
  builder: {
    id: "builder",
    code: "I-A-C-T",
    name: "The Autonomous Builder",
    tagline: "Individualist · Creative · Risk-Tolerant",
    icon: "◆",
    color: "#A67437",
    description: "You are deeply stifled by traditional South Asian academic rote-learning. You want to create things from scratch and forge your own path.",
    quietConfusion: "You are likely passing your exams but feel completely detached, often experiencing high anxiety because you feel like the \"black sheep\" of the family.",
    futures: ["Entrepreneurship", "Visual communication", "Creative direction", "Media production", "Independent design studios"],
    microProject: "Don't change your major yet. This weekend, spend 2 hours creating a small poster series or storyboard for a short film idea just to see how it feels to make something original.",
    vocabulary: [
      "visual storytelling and communication design",
      "creative direction and problem-solving",
      "innovation and independent creative practice"
    ],
    mentors: [
      { name: "From Lahore to the Design Studio", story: "A student who built a portfolio in secret during O-Levels, then showed parents real client work instead of arguing from passion alone." },
      { name: "The Designer Who Chose Visual Arts", story: "Someone from Mumbai who studied commerce for two years, then pivoted to visual communication with a portfolio that spoke louder than their degree." },
      { name: "The Dhaka Creator", story: "A young filmmaker who turned a theatre hobby into a respected creative practice while keeping family peace through gradual, evidence-based conversations." }
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
    quietConfusion: "You are often pushed toward medicine because \"it helps people,\" but you actually hate the sterile, hyper-competitive nature of hospital and medical school environments.",
    futures: ["Psychology", "Human resources", "Development sector / NGOs", "Public policy", "Counseling"],
    microProject: "Volunteer for 2 hours at a community helpline or mentor one younger student this week. Notice how you feel when someone genuinely benefits from your presence.",
    vocabulary: [
      "human-centered design and community impact",
      "behavioral science and social development",
      "organizational psychology and people strategy"
    ],
    mentors: [
      { name: "Beyond the White Coat", story: "A Karachi student who wanted to help people but chose psychology over medicine—and now runs a school counseling program." },
      { name: "The Policy Maker", story: "Someone from Islamabad who studied social sciences despite family pressure, now shaping education policy at a think tank." },
      { name: "The HR Innovator", story: "A graduate from Dhaka who turned empathy into a career in organizational development at a major firm." }
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
    quietConfusion: "Even though you are a good fit for fields like architecture, finance, or research, your confusion stems from where you apply your logical mind. You might be studying engineering because of your parents, when your true passion is urban planning, economics, or museum research.",
    futures: ["Urban planning", "Financial analytics", "Research science", "Architecture"],
    microProject: "Take a free 2-hour intro session on architectural drawing, economic case studies, or museum research online. See which type of logical problem genuinely excites you.",
    vocabulary: [
      "research analysis and structured inquiry",
      "quantitative research and financial planning",
      "architectural thinking and systematic design"
    ],
    mentors: [
      { name: "The Urban Planner", story: "An engineering student from Lahore who discovered city planning through a summer internship and now shapes public spaces with family support." },
      { name: "The Research Mind", story: "Someone from Delhi who chose research science over corporate medicine, building a career in environmental field studies." },
      { name: "The Finance Analyst", story: "A student from Karachi who redirected analytical skills toward financial economics with family support through salary transparency." }
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
    quietConfusion: "You get paralyzed by conflict. You want to make your parents happy, but you are terrified that you don't have the \"brilliance\" to survive hyper-competitive fields like corporate law or surgery.",
    futures: ["Project management", "Corporate administration", "Supply chain logistics", "Public sector administration"],
    microProject: "Organize a small study group or family event this week. Notice how your natural planning skills create calm and structure for everyone around you.",
    vocabulary: [
      "project management and operational excellence",
      "institutional administration and process optimization",
      "supply chain and organizational coordination"
    ],
    mentors: [
      { name: "The Steady Leader", story: "A student from Lahore who chose project management over medicine, proving to family that leadership roles carry equal prestige." },
      { name: "The Administrator", story: "Someone from Mumbai who found fulfillment in corporate operations, balancing family expectations with genuine aptitude." },
      { name: "The Consultant", story: "A graduate from Islamabad who built a career in management consultancy by framing it as a stable, globally respected profession." }
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

function resolveArchetype(scores) {
  const { code, dimensions } = getDimensionCode(scores);
  const { dim1, dim2, dim3, dim4 } = dimensions;

  if (dim2 === "A" && dim3 === "C" && dim4 === "T") return ARCHETYPES.builder;
  if (dim2 === "A" && dim4 === "H") return ARCHETYPES.catalyst;
  if (dim2 === "S" && dim4 === "T" && dim1 === "I") return ARCHETYPES.architect;
  if (dim1 === "E" && dim2 === "S") return ARCHETYPES.harmonizer;

  if (dim2 === "A" && dim1 === "I") return ARCHETYPES.builder;
  if (dim4 === "H") return ARCHETYPES.catalyst;
  if (dim4 === "T" && dim2 === "S") return ARCHETYPES.architect;
  return ARCHETYPES.harmonizer;
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
