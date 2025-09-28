// src/pages/SIPVisuals.tsx
import { sip } from "@/data/profile";

const isImg = (u: string) => /\.(png|jpe?g|svg|gif|webp)$/i.test(u);

export default function SIPVisuals() {
  const assets = sip.assets ?? [];
  const imgs = assets.filter(a => isImg(a.href));
  const docs = assets.filter(a => !isImg(a.href)); // PDFs, etc.

  return (
    <section className="space-y-8">
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {imgs.map(a => {
          const isTimeline = /timeline/i.test(a.label);
          return (
            <figure
              key={a.href}
              className={isTimeline ? "md:col-span-2 text-center" : "text-center"}
            >
              <img
                src={a.href}
                alt={a.label}
                className={
                  isTimeline
                    ? // Big, centered timeline (~80% width)
                      "mx-auto w-4/5 h-auto rounded-lg"
                    : // Normal figures
                      "mx-auto w-full max-w-md h-auto rounded-lg"
                }
              />
              <figcaption className="text-sm italic text-neutral-400 mt-2">
                {a.label}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Documents (e.g., Pitch Deck PDF) */}
      {docs.length > 0 && (
        <div>
          <h3 className="text-base font-semibold mb-2">Documents</h3>
          <ul className="list-disc pl-6">
            {docs.map(d => (
              <li key={d.href}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener"
                  className="underline text-neutral-300 hover:text-white"
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
