import Page from "@/components/Page";
import { projects } from "@/data/profile";
import { useTitle } from "@/lib/useTitle";

export default function Projects() {
  useTitle("Projects");

  return (
    <Page title="Projects" lead="Selected builds and experiments.">
      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg border border-neutral-800 p-4">
            <header className="mb-2">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              {p.summary ? <p className="text-neutral-300 mt-1">{p.summary}</p> : null}
              {p.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </header>

            {p.links?.length ? (
              <div className="mt-3 flex flex-wrap gap-4">
                {p.links.map((l: { label: string; href: string }) => {
                  const isDownload = /\.(exe|zip)$/i.test(l.href);
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      className="underline text-neutral-300 hover:text-white"
                      rel="noopener"
                      {...(isDownload ? { download: true } : {})}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            ) : null}

            {p.codeSamples?.length ? (
              <section className="mt-4 space-y-3">
                {p.codeSamples.map(
                  (cs: { label?: string; lang?: string; code: string }, idx: number) => (
                    <details
                      key={idx}
                      className="rounded-md border border-neutral-800 bg-neutral-950 overflow-hidden"
                    >
                      <summary className="cursor-pointer select-none px-3 py-2 text-sm text-neutral-300 hover:text-white">
                        {cs.label || `Code sample ${idx + 1}`}
                      </summary>
                      <pre className="overflow-x-auto p-3 text-sm">
                        <code className={`language-${cs.lang ?? "text"}`}>{cs.code}</code>
                      </pre>
                    </details>
                  )
                )}
              </section>
            ) : null}
          </article>
        ))}
      </div>
    </Page>
  );
}
