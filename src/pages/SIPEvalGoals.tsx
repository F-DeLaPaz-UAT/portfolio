import React from "react";

const evalChecklist = [
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

const goals = [
  { title: "Goal 1: Build an AI system that creates a user profile with NLP",
    tasks: ["Select NLP tool/framework","Prototype profile extraction","Persist JSON profile"] },
  { title: "Goal 2: Design adaptive, guided Q&A",
    tasks: ["Branching logic based on profile","Test adaptive behavior","Integrate logic into GUI"] },
  { title: "Goal 3: Generate da Vinci–style sketch previews",
    tasks: ["Research line-art/blueprint approaches","Pipeline: profile → sketch","Validate originality"] },
  { title: "Goal 4: Provide a user-friendly GUI",
    tasks: ["Mockups (sliders, buttons, preview)","Working GUI prototype","Connect GUI ↔ Q&A ↔ Sketch","Usability tests"] },
  { title: "Goal 5: Deliver a working demo in under 60 minutes",
    tasks: ["Trial demos + time logs","Step-by-step demo guide","Debug bottlenecks"] },
];

export default function SIPEvalGoals() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">SIP — Evaluation & Goals</h1>
        <p className="mt-2 text-sm text-gray-500">
          DaVinci MindScribe evaluator checklist and dependency-planned goals.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Evaluation Criteria — Checklist</h2>
        <ul className="mt-4 space-y-3">
          {evalChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-4 w-4 flex-none rounded-full border" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Goals & Tasks — Dependency Plan</h2>
        <p className="mt-2 text-sm text-gray-500">
          Hybrid Scrum/Kanban + CPM: parallelize where safe, respect the critical path where required.
        </p>
        <div className="mt-6 space-y-8">
          {goals.map((g, gi) => (
            <article key={gi} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                {g.tasks.map((t, ti) => <li key={ti}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <figure className="mt-8 rounded-2xl border p-5 text-sm">
          <figcaption className="font-semibold">Dependency Flow</figcaption>
          <pre className="mt-2 whitespace-pre-wrap">
{`Goal 1 → Goal 2 → Goal 3
   ↑
Goal 4 (parallel; connects to 2 & 3)
   ↓
Goal 5 (final demo)`}
          </pre>
        </figure>
      </section>
    </main>
  );
}
