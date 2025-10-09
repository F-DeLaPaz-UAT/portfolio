export const evalChecklist: string[] = [
  "NLP extracts a starting creative profile from first answers",
  "Follow-up questions are generated from that profile (not fixed)",
  "Later questions adapt based on earlier answers",
  "Profile saved to structured JSON/params",
  "Profile → on-screen da Vinci–style line sketch",
  "Sketches are original (not copies of da Vinci)",
  "Multiple sketch variations from one profile",
  "User can tweak a setting (line width/detail/scale) before finish",
  "Simple, intuitive GUI for non-technical users",
  "New user reaches first sketch under 60 minutes (target drops over time)",
  "Guided end-to-end flow, no dead ends",
  "Full demo runs without freezing/crashing",
];

export type Goal = { title: string; tasks: string[] };

export const goals: Goal[] = [
  {
    title: "Goal 1: Build an AI system that creates a user profile with NLP",
    tasks: ["Select NLP tool/framework","Prototype profile extraction","Persist JSON profile"],
  },
  {
    title: "Goal 2: Design adaptive, guided Q&A",
    tasks: ["Branching logic based on profile","Test adaptive behavior","Integrate logic into GUI"],
  },
  {
    title: "Goal 3: Generate da Vinci–style sketch previews",
    tasks: ["Research line-art/blueprint approaches","Pipeline: profile → sketch","Validate originality"],
  },
  {
    title: "Goal 4: Provide a user-friendly GUI",
    tasks: ["Mockups (sliders, buttons, preview)","Working GUI prototype","Connect GUI ↔ Q&A ↔ Sketch","Usability tests"],
  },
  {
    title: "Goal 5: Deliver a working demo in under 60 minutes",
    tasks: ["Trial demos + time logs","Step-by-step demo guide","Debug bottlenecks"],
  },
];
