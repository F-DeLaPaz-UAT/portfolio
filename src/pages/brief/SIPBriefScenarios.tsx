// src/pages/brief/SIPBriefScenarios.tsx
export default function SIPBriefScenarios() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Usage Scenarios</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Individual creator:</strong> the first session builds the baseline profile
          and a concept description; plotting happens later in the pipeline. Subsequent sessions
          are shorter and require fewer prompts because style and priorities are already known.
        </li>
        <li>
          <strong>Education:</strong> each student’s profile follows the work across a term,
          so concept sketches improve over time. Instructors get consistent concept pages that
          speed feedback.
        </li>
        <li>
          <strong>Patent figure prep:</strong> capture the concept, generate blueprint-style
          line drawings, export plot-ready vectors (SVG + EBB/GRBL), and produce an editable
          vector/PDF set for a patent professional to finalize.
        </li>
      </ul>
    </>
  );
}
