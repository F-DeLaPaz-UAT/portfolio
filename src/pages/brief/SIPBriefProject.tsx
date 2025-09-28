// src/pages/brief/SIPBriefProject.tsx
export default function SIPBriefProject() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Project Description</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Baseline profile:</strong> quick signals on domain, visual style,
          level of abstraction, novelty tolerance, and preferred materials or mechanisms.
        </li>
        <li>
          <strong>Adaptive interview:</strong> 12–20 branching questions covering
          purpose, power source, scale hints, constraints, and key components.
        </li>
        <li>
          <strong>Image generation:</strong> monochrome, line-first concept tuned
          for legibility.
        </li>
        <li>
          <strong>Vectorization:</strong> centerline tracing with plot-friendly
          simplification, corner rounding, and hatch spacing for technical pens
          (future stage).
        </li>
        <li>
          <strong>Robotic plotting:</strong> SVG to EBB/GRBL for plotters (future stage).
        </li>
        <li>
          <strong>Learning loop:</strong> approvals, quick ratings, and small edits
          update the profile so future sessions ask fewer questions and land closer
          to the user’s style.
        </li>
      </ul>

    </>
  );
}
