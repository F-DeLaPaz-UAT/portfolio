// src/pages/brief/SIPBriefTitle.tsx
export default function SIPBriefTitle() {
  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">
          DaVinci MindScribe: An Adaptive AI Concept Sketch Machine
        </h1>
        <p className="text-sm text-neutral-600">Francisco De La Paz</p>
      </div>

      <p className="text-neutral-800">
        MindScribe closes the gap between vague intent and a clean physical sketch. The system learns how the user
        thinks, builds a baseline profile, asks targeted questions to fill missing details, generates a concept image,
        and ultimately plots blueprint-style line work. Each session feeds the profile so results come faster and land
        closer to the user’s style.
      </p>
    </div>
  );
}
