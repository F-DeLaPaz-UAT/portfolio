// src/pages/brief/SIPBriefBackground.tsx
export default function SIPBriefBackground() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-900">Background</h2>
      <p className="text-neutral-800">
        Ideas die because the creator can’t verbalize the concept, or draw it faithfully, or access the right tools.
        Current text-to-image systems are limited by how they were trained. The user accepts what the model returns
        and lets go of their original vision. Reviewers and teachers still demand crisp visuals.
      </p>
      <p className="text-neutral-800">
        MindScribe uses a two-way process: it learns how the user thinks, builds a baseline profile, and asks targeted
        questions to fill missing details. When intent is clear, it generates a concept image that later converts to
        machine paths for plotting, favoring blueprint-style line work that’s easy to vectorize and review.
      </p>
    </div>
  );
}
