// src/pages/SIPPriorArt.tsx
import { sip } from "@/data/profile";

export default function SIPPriorArt() {
  const links = sip.links ?? [];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Prior Art</h2>

      {links.length === 0 ? (
        <p className="text-neutral-400">
          No links listed. Add prior-art references to <code>sip.links</code> in <code>data/profile.ts</code>.
        </p>
      ) : (
        <ul className="list-disc pl-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener"
                className="underline text-neutral-300 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
