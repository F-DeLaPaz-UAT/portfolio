// src/pages/brief/SIPBriefFigures.tsx
import { useOutletContext } from "react-router-dom";

type Ctx = { asset: (p: string) => string };

export default function SIPBriefFigures() {
  const { asset } = useOutletContext<Ctx>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-900">Prototype Images</h2>

      <Figure
        src={asset("base-profile.png")}
        caption="Figure 1. Base Profile — baseline profile questionnaire screenshot."
      />

      <Figure
        src={asset("20q.png")}
        caption="Figure 2. 20 Q — adaptive interview run."
      />

    </div>
  );
}

function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="border rounded-2xl p-4 bg-white shadow-sm">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={src} className="w-full rounded-xl" />
      <figcaption className="mt-2 text-sm text-neutral-600">{caption}</figcaption>
    </figure>
  );
}
