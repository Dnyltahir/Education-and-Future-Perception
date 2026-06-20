const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Autonomy vs. Compliance",
    scenario: "You receive your final grades. You got an 'A' in a subject you find incredibly boring, and a 'C' in a subject you are deeply passionate about but struggled with. What is your honest, unfiltered emotional reaction?",
    options: [
      { label: "Pure relief. The 'A' keeps my parents happy and keeps the peace at home; that's all that really matters right now.", scores: { E: 1 } },
      { label: "Deep frustration. I don't care about the 'A' in that boring class; I'm genuinely upset that I couldn't master the subject I actually care about.", scores: { I: 1 } }
    ]
  },
  {
    id: 2,
    category: "Autonomy vs. Compliance",
    scenario: "You are at a family wedding, and an intrusive aunt or uncle loudly asks you in front of your parents, \"So, what are your plans for the future?\" What goes through your mind before you speak?",
    options: [
      { label: "I feel a flash of anxiety. I'll give the safest, most \"respectable\" answer (e.g., Medicine, Engineering, CSS/Civil Service) just to avoid an awkward conversation or lectures later.", scores: { E: 1 } },
      { label: "I feel annoyed or distant. I wish I could tell them what I'm actually exploring, but I know my true interests aren't considered \"prestigious\" enough for this crowd.", scores: { I: 1 } }
    ]
  },
  {
    id: 3,
    category: "Autonomy vs. Compliance",
    scenario: "You have a hidden talent or hobby (like digital art, gaming, writing, or music) that your parents view as a \"waste of time.\" If you have a spare cash allowance, how do you spend it?",
    options: [
      { label: "I spend it on books, courses, or gear to quietly improve my secret hobby when no one is watching.", scores: { I: 1 } },
      { label: "I save it or spend it on things that help me blend in socially with my peers or support my school tracking.", scores: { E: 1 } }
    ]
  },
  {
    id: 4,
    category: "Autonomy vs. Compliance",
    scenario: "Your family is discussing a social issue at dinner. You completely disagree with your parents' traditional views, and you have strong facts to prove your point. What do you do?",
    options: [
      { label: "Stay quiet, nod along, and swallow my thoughts. It's much easier to keep the peace than to handle the tension of challenging them.", scores: { E: 1 } },
      { label: "Politely bring up an alternative perspective or try to argue the logic of the situation, even if it makes the table uncomfortable.", scores: { I: 1 } }
    ]
  },
  {
    id: 5,
    category: "Autonomy vs. Compliance",
    scenario: "Which of these compliments would make you feel genuinely proudest and most understood?",
    options: [
      { label: "\"You made your family so proud today, you've secured a very stable and respectable future.\"", scores: { E: 1 } },
      { label: "\"Wow, the way your mind works is so unique. You built/solved that entirely in your own way.\"", scores: { I: 1 } }
    ]
  },
  {
    id: 6,
    category: "Structure vs. Adaptability",
    scenario: "You are trying to study for an important test. What does your ideal study environment look like?",
    options: [
      { label: "A strict, predictable schedule, clear textbook rubrics, past exam papers, and knowing exactly what formula will guarantee full marks.", scores: { S: 1 } },
      { label: "A fluid flow where I skip around topics based on what grabs my attention, using YouTube breakdowns, articles, and messy mind-maps.", scores: { A: 1 } }
    ]
  },
  {
    id: 7,
    category: "Structure vs. Adaptability",
    scenario: "Your laptop or phone crashes right before an online submission deadline. The standard steps to fix it aren't working. How do you handle the panic?",
    options: [
      { label: "I freak out because the \"rules\" broke. I urgently look for an authority figure, teacher, or technician to tell me the official backup procedure.", scores: { S: 1 } },
      { label: "I immediately start experimenting—googling deep Reddit threads, trying weird bypasses, or finding a creative workaround to patch it together myself.", scores: { A: 1 } }
    ]
  },
  {
    id: 8,
    category: "Structure vs. Adaptability",
    scenario: "You are playing a complex board game with friends. Halfway through, you all realize the official rulebook has a massive flaw that ruins the fun. What do you propose?",
    options: [
      { label: "We should pause, look up the official errata/clarifications online, and strictly stick to what the creators intended.", scores: { S: 1 } },
      { label: "Let's just make up a fun house-rule right now to fix it and keep the game moving creatively!", scores: { A: 1 } }
    ]
  },
  {
    id: 9,
    category: "Structure vs. Adaptability",
    scenario: "Close your eyes and imagine your life 10 years from now. Which thought brings you more peace of mind?",
    options: [
      { label: "Knowing exactly what my job title is, having a predictable monthly income, clear promotion steps, and a stable routine.", scores: { S: 1 } },
      { label: "Knowing that my life is dynamic, my day-to-day changes, and I have the freedom to switch projects or businesses when I get inspired.", scores: { A: 1 } }
    ]
  },
  {
    id: 10,
    category: "Structure vs. Adaptability",
    scenario: "A teacher gives an assignment with zero formatting guidelines, saying: \"Just show me what you know about this topic in any format you want.\" How do you feel?",
    options: [
      { label: "Stressed and lost. I prefer when teachers give exact page limits, heading rules, and font sizes so I don't lose points.", scores: { S: 1 } },
      { label: "Excited and relieved. I can make a video, a graphic poster, or write a weird essay without being boxed into a boring template.", scores: { A: 1 } }
    ]
  },
  {
    id: 11,
    category: "Curiosity vs. Security",
    scenario: "You click on a random, fascinating article online about an obscure topic (e.g., deep-sea creatures, ancient history, quantum mechanics) that has absolutely nothing to do with your school syllabus. What do you do?",
    options: [
      { label: "Read it for hours, falling down a massive rabbit hole just because learning it feels deeply satisfying.", scores: { C: 1 } },
      { label: "Close the tab after a few minutes. A voice in my head says: \"This won't help you pass your upcoming entrance exams, stop wasting time.\"", scores: { Sec: 1 } }
    ]
  },
  {
    id: 12,
    category: "Curiosity vs. Security",
    scenario: "A magical box guarantees you a comfortable middle-class salary for the rest of your life, regardless of whether you work or not. What do you do with your youth?",
    options: [
      { label: "I would still study heavily, but I'd pick a field that everyone tells me is \"financially risky\" (e.g., philosophy, fine arts, creative writing, wildlife conservation) just because I love it.", scores: { C: 1 } },
      { label: "I would use the safety net to relax, but stick to building a career in stable sectors like tech or business management because I like systems and order.", scores: { Sec: 1 } }
    ]
  },
  {
    id: 13,
    category: "Curiosity vs. Security",
    scenario: "You spent three weeks coding a small app or writing a story, but at the very end, the code breaks completely or the story falls apart. It's unfixable. Was it a waste of time?",
    options: [
      { label: "Yes, it feels like a total failure. I spent time and energy and have absolutely nothing tangible to show for it.", scores: { Sec: 1 } },
      { label: "No, not really. It was frustrating, but I actually figured out three new techniques while doing it that I didn't know before.", scores: { C: 1 } }
    ]
  },
  {
    id: 14,
    category: "Curiosity vs. Security",
    scenario: "You walk into a massive career expo. Two booths catch your eye. Which one do you walk toward first?",
    options: [
      { label: "The booth showing cutting-edge, unpredictable industries with titles like \"AI Ethics,\" \"Creative Strategy,\" or \"Alternative Energy Design.\"", scores: { C: 1 } },
      { label: "The booth hosted by a massive, highly prestigious multinational corporation or government body known for iron-clad job security and global prestige.", scores: { Sec: 1 } }
    ]
  },
  {
    id: 15,
    category: "Curiosity vs. Security",
    scenario: "What scares you most about the idea of failing an important academic milestone?",
    options: [
      { label: "The shame, the disappointment on my parents' faces, and the feeling that my economic survival is compromised.", scores: { Sec: 1 } },
      { label: "The feeling that I am stuck in a system, falling behind, and losing the time to figure out what I am actually good at.", scores: { C: 1 } }
    ]
  },
  {
    id: 16,
    category: "People vs. Process",
    scenario: "Your group project team is completely stuck. Half the group is fighting emotionally, and the actual technical data of the project is a total mess. What do you fix first?",
    options: [
      { label: "I try to fix the human dynamic—talking to people, calming the arguments, and getting everyone back on the same emotional page.", scores: { H: 1 } },
      { label: "I ignore the drama, sit down with the data, fix the technical errors myself, and hand them the working solution.", scores: { T: 1 } }
    ]
  },
  {
    id: 17,
    category: "People vs. Process",
    scenario: "If a lab offered to safely implant an elite skill into your brain instantly, which would you choose?",
    options: [
      { label: "The ability to read human emotions flawlessly, negotiate anything, and instantly understand what makes people tick.", scores: { H: 1 } },
      { label: "The ability to process complex data instantly, spot flaws in coding/systems, and reverse-engineer mechanical objects.", scores: { T: 1 } }
    ]
  },
  {
    id: 18,
    category: "People vs. Process",
    scenario: "You have 45 minutes to watch a documentary. Which topic sounds genuinely more appealing to your brain?",
    options: [
      { label: "\"The Silent Architect\" – How a single programmer designed an algorithm that runs the global banking system.", scores: { T: 1 } },
      { label: "\"The Human Condition\" – A deep look into how psychological therapy techniques healed a broken community after a crisis.", scores: { H: 1 } }
    ]
  },
  {
    id: 19,
    category: "People vs. Process",
    scenario: "Think about a time you felt completely in the zone (\"flow state\"). What were you doing?",
    options: [
      { label: "Working entirely alone in my room, completely hyper-focused on an abstract puzzle, design, code, or structured writing piece.", scores: { T: 1 } },
      { label: "Collaborating, brainstorming, mentoring, or creating an experience that directly shifted how other real people were feeling or reacting.", scores: { H: 1 } }
    ]
  },
  {
    id: 20,
    category: "People vs. Process",
    scenario: "At the very end of your life, when you look back at your professional legacy, what do you want it to stand for?",
    options: [
      { label: "\"I built or optimized robust, flawless, high-performing systems, pieces of software, or financial models that keep industries running efficiently.\"", scores: { T: 1 } },
      { label: "\"I directly impacted, healed, taught, or inspired thousands of human lives, leaving people emotionally or socially better off than I found them.\"", scores: { H: 1 } }
    ]
  }
];
