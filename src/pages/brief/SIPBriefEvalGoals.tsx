import React from "react";
import { evalChecklist, goals } from "@/data/sipEvalGoals";

export default function SIPBriefEvalGoals() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900">Evaluation Criteria — Checklist</h2>
        <ul className="mt-3 space-y-2 text-neutral-800">
          {evalChecklist.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full border border-neutral-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-neutral-900">Goals & Tasks — Dependency Plan</h2>
        <div className="mt-4 space-y-6">
          {goals.map((g, gi) => (
            <article key={gi} className="rounded-xl border p-4">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-2 list-disc pl-6">
                {g.tasks.map((t, ti) => <li key={ti}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
