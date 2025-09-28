// src/data/profile.ts

// Ensures assets work both in dev (/) and on GitHub Pages (/mindscribe/).
const base = import.meta.env.BASE_URL; // includes trailing slash

export const branding = {
  productFull: "DaVinci MindScribe: An Adaptive AI Concept Sketch Machine",
  productShort: "DaVinci MindScribe",
  productSlug: "mindscribe"
};

export const site = {
  name: "Mad Tinker’s Workshop",
  email: "Mad.Tinkers.Workshop@outlook.com"
};

export const degreeObjectives: Record<string, string[]> = {
  "Digital Maker and Fabrication": [
    "Using digital and physical tools, engineer and build prototypes that technology patents are then applied for.",
    "Build physical products while demonstrating technique and safety competency across commonly accepted prototyping devices, maker tools and techniques.",
    "Produce products that balance form and function while reflecting current and future trends in design and human factors.",
    "Demonstrate the ability to evaluate material and build technique options during the creation of products and their prototypes.",
    "Demonstrate the ability to effectively implement embedded systems and fundamental electronics into product builds.",
    "Place prototypes and builds within the Agile and MVP development frameworks."
  ],
  "Artificial Intelligence": [
    "Create and integrate cognitive artificial intelligence into applications.",
    "Create and evolve natural language processing systems.",
    "Demonstrate proficiency in designing and developing machine learning systems using industry approaches and patterns.",
    "Design and employ deep learning systems using best practices and conventions.",
    "Demonstrate a deep understanding of neural networks and their role in creating intelligent systems.",
    "Design, create, or integrate reinforcement learning, large language models, and genetic algorithms in intelligent software."
  ],
  "Robotics Engineering": [
    "Design and complete robotic and embedded systems solutions that address real-world situations and challenges.",
    "Demonstrate embedded microprocessor system and circuit skills.",
    "Develop mechanical control systems by implementing transducers, actuators, feedback, vision and sensing systems, and other mechanical systems into robotic platforms.",
    "Examine and assess a variety of applications within the field of robotics.",
    "Model, analyze, and design systems or processes that integrate hardware and software to control autonomous mechanical systems.",
    "Implement artificial intelligence and data systems into robotic platforms."
  ]
};

/* ===========================
   SIP: DaVinci MindScribe
   =========================== */
export const sip = {
  title: branding.productFull,
  innovationClaim:
    "Da Vinci MindScribe is the first adaptive AI invention partner. It profiles how inventors think, guides them through dynamic Q&A, generates a structured 'sketch brief,' and physically draws the concept with robotic precision.",
  description: `Every year, countless inventions die because they can't be sketched. 
Traditional design tools assume artistic skill, AI generators miss technical intent, 
and patent offices require visuals that non-artists can't easily provide.

MindScribe bridges this gap. Today's MVP combines user profiling, adaptive Q&A, 
AI-generated Da Vinci-style sketches, and robotic plotting into a single pipeline. 
Long-term, it expands into adaptive learning, multi-material outputs, and classroom + patent integration.

Domains: AI, Robotics, Human–Computer Interaction, Digital Fabrication. 
Skills include user profiling, generative AI, vectorization, robotic motion control, 
and embedded system integration.`,
  // External references stay here
  links: [
    { label: "Vizcom Docs", href: "https://docs.vizcom.ai/render-mode" },
    { label: "Adobe Firefly", href: "https://www.adobe.com/products/firefly.html" },
    { label: "AxiDraw Info", href: "https://axidraw.com" }
  ],
  // Deliverables shown under “Visuals and Docs” (images inline, PDFs listed there too)
  // Prefix with BASE_URL so they work on GitHub Pages and locally.
  assets: [
    { label: "XY Plotter Sketch",     href: `${base}assets/sip/plotter.png` },
    { label: "Aquatic Drone Concept", href: `${base}assets/sip/drone.png` },
    { label: "Timeline Graphic",      href: `${base}assets/sip/timeline.png` },
    { label: "Pitch Deck (PDF)",      href: `${base}assets/sip/DaVinci_MindScribe_Pitch_Deck.pdf` }
  ],
  // New routed brief root
  briefUrl: "/sip/brief"
};

/* ===========================
   Projects
   =========================== */
export const projects = [
  {
    title: "Autonomous Police Vehicle",
    summary:
      "Arduino TX/RX build for a small police vehicle. Separate transmitter and receiver circuits, with live demo.",
    tags: ["Arduino", "RF", "Tinkercad", "Robotics"],
    links: [
      { label: "TX circuit (Tinkercad)", href: "https://www.tinkercad.com/things/gAvnrMciux0-autonomous-police-vehicle-tx" },
      { label: "RX circuit (Tinkercad)", href: "https://www.tinkercad.com/things/bn5LKfUfl9n-autonomous-police-vehicle-rx" },
      { label: "YouTube demo", href: "https://youtu.be/53AOH-mF-OY" }
    ],
    videoId: "53AOH-mF-OY"
  },

  {
    title: "Bridge of Eternal Essences",
    summary:
      "Interactive site that nudges the visitor’s mood using an ε-greedy bandit and a weighted, non-repeating lexicon. Typewriter UI, ambient audio, and a short 3-choice loop.",
    tags: ["Web", "AI-ish", "UX"],
    links: [
      { label: "Live site", href: "https://f-delapaz-uat.github.io/The-Bridge-of-Eternal-Ascent/" }
    ],
    codeSamples: [
      {
        label: "ε-greedy bandit (tier picker)",
        lang: "js",
        code: `const bandit = { eps: 0.15, arms: { negative:{n:0,r:0}, neutral:{n:0,r:0}, positive:{n:0,r:0} } };
const armValue = t => { const a = bandit.arms[t]; return a.n ? a.r / a.n : 0.5; };

function chooseArm(exclude = new Set()) {
  if (Math.random() < bandit.eps) {
    const cand = ["negative","neutral","positive"].filter(t => !exclude.has(t));
    return cand[Math.floor(Math.random() * cand.length)];
  }
  return ["negative","neutral","positive"]
    .filter(t => !exclude.has(t))
    .sort((a,b) => armValue(b) - armValue(a))[0] || "positive";
}

function updateBandit(tier, reward) {
  const a = bandit.arms[tier];
  a.n += 1; a.r += reward;
}`
      },
      {
        label: "Round choices (tier rules + unique picks)",
        lang: "js",
        code: `function tiersForRound(r){
  const chosen = new Set(), picks = [];
  for (let i = 0; i < 3; i++) { const t = chooseArm(chosen); chosen.add(t); picks.push(t); }
  if (r < 3 && !picks.includes("negative")) picks[0] = "negative";        // early diagnostic
  if (r >= 6 && picks.filter(x => x === "positive").length < 2) picks[1] = "positive"; // late uplift
  return picks;
}

function pickUniqueFromTier(tier, excludeSet, minScore = null){
  const base = LEX.words[tier] || [];
  let pool = base.filter(w => !seenWords.has(w.word));
  if (minScore !== null) pool = pool.filter(w => w.score >= minScore);
  pool = pool.filter(w => !excludeSet.has(w.word));
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

async function showChoices(){
  await clearConsolePause(120);
  controls.innerHTML = "";
  const tiers = tiersForRound(round);
  const roundPicked = new Set(), shown = [];

  for (const t of tiers){
    const last = metrics._lastScore || 0;
    const minS = (t === "negative" && last <= -3) ? -2 : null; // avoid very dark back-to-back
    let pick = pickUniqueFromTier(t, roundPicked, minS);
    if (!pick) { // graceful fallback if a tier empties
      if (t === "negative") pick = pickUniqueFromTier("neutral", roundPicked) || pickUniqueFromTier("positive", roundPicked);
      else if (t === "neutral") pick = pickUniqueFromTier("positive", roundPicked) || pickUniqueFromTier("negative");
      else pick = pickUniqueFromTier("positive", roundPicked);
    }
    if (pick) { roundPicked.add(pick.word); shown.push(pick); }
  }

  shown.forEach(({ word, score }) => {
    const btn = document.createElement("button");
    btn.className = "btn stage-blue"; // varies by round in app
    btn.textContent = word;
    btn.onclick = () => handleChoice({ word, score });
    controls.appendChild(btn);
    requestAnimationFrame(() => btn.classList.add("show"));
  });
}`
      },
      {
        label: "Weighted, non-repeating messages",
        lang: "js",
        code: `function takeRandomFrom(bucket, fallback){
  if (!bucket.length) bucket.push(...fallback);
  const i = Math.floor(Math.random() * bucket.length);
  return bucket.splice(i, 1)[0];
}

function weightedPop(bucket, fallback){
  if (!bucket.length) bucket.push(...fallback.map(o => ({ text:o.text, weight:o.weight || 1 })));
  let total = bucket.reduce((s, o) => s + (o.weight || 1), 0);
  let r = Math.random() * total, i = 0;
  while (i < bucket.length) { r -= (bucket[i].weight || 1); if (r <= 0) break; i++; }
  const chosen = bucket.splice(Math.min(i, bucket.length - 1), 1)[0];
  return chosen.text;
}`
      }
    ]
  },

  {
    title: "TinkerCode (C++ Mini BASIC)",
    summary:
      "Interactive BASIC-style interpreter with REPL, file I/O, autosave thread, CSV viewer, templates, and sample programs.",
    tags: ["C++", "Interpreter", "REPL"],
    links: [
      { label: "Cheat Sheet (PDF)", href: `${base}assets/tinkercode/TinkerCode-Cheat-Sheet.pdf` },
      { label: "Windows ZIP (no install)", href: `${base}assets/tinkercode/tinkercode-win64.zip` },
      { label: "Demo video (MP4)", href: `${base}assets/tinkercode/Tinkercode.mp4` }
    ],
    codeSamples: [
      {
        label: "Lexer: tokens and keywords (excerpt)",
        lang: "cpp",
        code: `enum class TokType { End, Number, String, Ident, Plus, Minus, Star, Slash, Caret,
LParen, RParen, Comma, Semicolon, Hash, Equal, Less, Greater, Le, Ge, Ne,
K_LET, K_PRINT, K_INPUT, K_IF, K_THEN, K_GOTO, K_FOR, K_TO, K_STEP, K_NEXT,
K_GOSUB, K_RETURN, K_REM, K_END, K_STOP, K_OPENOUT, K_OPENAPP, K_OPENIN,
K_PRINTSH, K_LINEINPUTSH, K_EOF, K_CLOSE, K_RANDOMIZE, K_CLS };

Token next(){
  skipws(); if(i>=n) return {TokType::End,"",0.0,i};
  int p=i; char c=s[i];
  if (isdigit((unsigned char)c) || (c=='.'&&i+1<n&&isdigit((unsigned char)s[i+1]))){
    int st=i; bool dot=(c=='.'); ++i;
    while(i<n&&(isdigit((unsigned char)s[i])||(!dot&&s[i]=='.'))){ dot|=s[i]=='.'; ++i; }
    return {TokType::Number, s.substr(st,i-st), stod(s.substr(st,i-st)), p};
  }
  if (c=='"'){ ++i; int st=i; while(i<n&&s[i]!='"') ++i; string lit=s.substr(st,i-st); if(i<n)++i; return {TokType::String,lit,0.0,p}; }
  if (isalpha((unsigned char)c) || c=='_'){
    int st=i; ++i; while(i<n&&(isalnum((unsigned char)s[i])||s[i]=='_'||s[i]=='$')) ++i;
    string id=s.substr(st,i-st), up=upper(id);
    if(up=="PRINT"&&i<n&&s[i]=='#'){++i; return {TokType::K_PRINTSH,"PRINT#",0.0,p};}
    if(up=="LINEINPUT"&&i<n&&s[i]=='#'){++i; return {TokType::K_LINEINPUTSH,"LINEINPUT#",0.0,p};}
    if(up=="LET")return{TokType::K_LET,id,0.0,p}; if(up=="PRINT")return{TokType::K_PRINT,id,0.0,p};
    if(up=="INPUT")return{TokType::K_INPUT,id,0.0,p}; if(up=="IF")return{TokType::K_IF,id,0.0,p};
    if(up=="THEN")return{TokType::K_THEN,id,0.0,p}; ifup=="GOTO")return{TokType::K_GOTO,id,0.0,p};
    ifup=="FOR")return{TokType::K_FOR,id,0.0,p};   ifup=="TO")return{TokType::K_TO,id,0.0,p};
    ifup=="STEP")return{TokType::K_STEP,id,0.0,p}; ifup=="NEXT")return{TokType::K_NEXT,id,0.0,p};
    ifup=="GOSUB")return{TokType::K_GOSUB,id,0.0,p}; ifup=="RETURN")return{TokType::K_RETURN,id,0.0,p};
    ifup=="REM")return{TokType::K_REM,id,0.0,p};   ifup=="END")return{TokType::K_END,id,0.0,p};
    ifup=="STOP")return{TokType::K_STOP,id,0.0,p}; ifup=="OPENOUT")return{TokType::K_OPENOUT,id,0.0,p};
    ifup=="OPENAPP")return{TokType::K_OPENAPP,id,0.0,p}; ifup=="OPENIN")return{TokType::K_OPENIN,id,0.0,p};
    ifup=="EOF")return{TokType::K_EOF,id,0.0,p};   ifup=="CLOSE")return{TokType::K_CLOSE,id,0.0,p};
    ifup=="RANDOMIZE")return{TokType::K_RANDOMIZE,id,0.0,p}; ifup=="CLS"||up=="CLEAR"||up=="CLR")return{TokType::K_CLS,id,0.0,p};
    return {TokType::Ident,id,0.0,p};
  }
  ++i; switch(c){ case '+':return{TokType::Plus,"+",0.0,p}; case '-':return{TokType::Minus,"-",0.0,p};
  case '*':return{TokType::Star,"*",0.0,p}; case '/':return{TokType::Slash,"/",0.0,p}; case '^':return{TokType::Caret,"^",0.0,p};
  case '(':return{TokType::LParen,"(",0.0,p}; case ')':return{TokType::RParen,")",0.0,p}; case ',':return{TokType::Comma,",",0.0,p};
  case ';':return{TokType::Semicolon,";",0.0,p}; case '#':return{TokType::Hash,"#",0.0,p}; case '=':return{TokType::Equal,"=",0.0,p};
  case '<': if(i<n&&s[i]=='='){++i;return{TokType::Le,"<=",0.0,p};} if(i<n&&s[i]=='>'){++i;return{TokType::Ne,"<>",0.0,p};}
            return{TokType::Less,"<",0.0,p};
  case '>': if(i<n&&s[i]=='='){++i;return{TokType::Ge,">=",0.0,p};} return{TokType::Greater,">",0.0,p}; }
  return {TokType::End,"",0.0,p};
}`
      },
      {
        label: "Parser: statements (excerpt)",
        lang: "cpp",
        code: `unique_ptr<Stmt> parseStmt(){
  if (match(TokType::K_REM))   return make_unique<RemStmt>();
  if (match(TokType::K_END) || match(TokType::K_STOP)) return make_unique<EndStmt>();
  if (match(TokType::K_RETURN)) return make_unique<ReturnStmt>();
  if (match(TokType::K_GOTO)){ int L=int(need(TokType::Number,"line").num); return make_unique<GotoStmt>(L); }
  if (match(TokType::K_GOSUB)){int L=int(need(TokType::Number,"line").num); return make_unique<GosubStmt>(L);}

  if (match(TokType::K_LET) || peek().t==TokType::Ident){
    string v = need(TokType::Ident,"var").lex; need(TokType::Equal,"'='");
    auto e = parseRelational(); return make_unique<LetStmt>(v, std::move(e));
  }
  if (match(TokType::K_PRINT)){
    vector<unique_ptr<Expr>> xs; xs.push_back(parseExprAllowString());
    while (match(TokType::Comma) || match(TokType::Semicolon)) xs.push_back(parseExprAllowString());
    return make_unique<PrintStmt>(std::move(xs));
  }
  if (match(TokType::K_INPUT)){
    optional<string> pr; if (peek().t==TokType::String){ pr=peek().lex; ++i; need(TokType::Semicolon,"';'"); }
    string v = need(TokType::Ident,"var").lex; return make_unique<InputStmt>(pr, v);
  }
  if (match(TokType::K_IF)){
    auto cond = parseRelational(); need(TokType::K_THEN,"THEN");
    int L = int(need(TokType::Number,"line").num); return make_unique<IfGotoStmt>(std::move(cond), L);
  }
  // ... FOR/NEXT, OPEN/PRINT#/LINEINPUT#/CLOSE, RANDOMIZE, CLS ...
  if (peek().t==TokType::End) return make_unique<RemStmt>();
  throw ParseError("Unknown statement");
}`
      },
      {
        label: "VM: run loop + autosave (excerpt)",
        lang: "cpp",
        code: `static void run_program(Context& ctx){
  ctx.pc=0; ctx.halted=false;
  while (!ctx.halted && ctx.pc < ctx.prog.size()){
    auto &pair = ctx.prog[ctx.pc]; ctx.pc++;
    try { pair.second->exec(ctx); }
    catch (const RuntimeError& e){
      cout << term::red << "Runtime error at line " << pair.first << ": " << e.what() << term::reset << "\\n";
      return;
    }
  }
}

class Autosaver {
  thread t_; atomic<bool> run_{false}; mutex m_; string lastNote_; int heartbeat_=0;
public:
  ~Autosaver(){ stop(); }
  void start(){ if(run_.exchange(true)) return;
    t_ = thread([this]{ while(run_){
      { lock_guard<mutex> lk(m_); heartbeat_++; ofstream out("autosave.txt");
        if(out){ out << "heartbeat="<<heartbeat_<<"\\n" << "note="<<lastNote_<<"\\n"; } }
      this_thread::sleep_for(chrono::milliseconds(900));
    }});
  }
  void stop(){ if(!run_.exchange(false)) return; if(t_.joinable()) t_.join(); }
  void setNote(string s){ lock_guard<mutex> lk(m_); lastNote_ = std::move(s); }
};`
      }
    ]
  },

  {
    title: "Lumber Cut Optimizer",
    summary: "Greedy kerf-aware cut planner with printable BOM and assignments.",
    tags: ["Web", "Shop Math", "Greedy"],
    links: [
      { label: "Live demo", href: `${base}assets/lumber-optimizer/index.html` }
    ]
  }
];

// add more projects here later
