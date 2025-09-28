// src/pages/brief/SIPBriefPDF.tsx
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

type Ctx = { asset: (p: string) => string };

// Prevent double-open in React 18 StrictMode (dev only)
let openedOnce = false;

export default function SIPBriefPDF() {
  const { asset } = useOutletContext<Ctx>();
  const href = asset("SIP_Brief.pdf");

  useEffect(() => {
    if (!openedOnce) {
      openedOnce = true;
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }, [href]);

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-neutral-900">SIP Brief (PDF)</h2>
      <p className="text-sm text-neutral-600">
        The brief should have opened in a new tab. If your browser blocked it,{" "}
        <a href={href} target="_blank" rel="noreferrer" className="underline">
          click here
        </a>.
      </p>
    </div>
  );
}
