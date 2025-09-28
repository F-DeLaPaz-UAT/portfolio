// src/pages/SIP.tsx
import Page from "@/components/Page";
import { sip, branding } from "@/data/profile";
import { useTitle } from "@/lib/useTitle";

type Asset = { label: string; href: string };

const isImage = (href: string) => /\.(png|jpe?g|svg|gif|webp)$/i.test(href);

export default function SIP() {
  useTitle(`SIP: ${branding.productFull}`);

  const assetList: Asset[] = sip.assets ?? [];
  const imageAssets = assetList.filter(a => isImage(a.href));
  const nonImageAssets = assetList.filter(a => !isImage(a.href)); // PDFs, etc.

  // Prefer named images if present
  const plotter = imageAssets.find(a => /plotter/i.test(a.label));
  const drone = imageAssets.find(a => /drone/i.test(a.label));
  const timeline = imageAssets.find(a => /timeline/i.test(a.label));

  // Any other images not covered above
  const otherImages = imageAssets.filter(
    a => a !== plotter && a !== drone && a !== timeline
  );

  return (
    <Page
      title={`SIP: ${sip.title}`}
      lead="Project description, innovation claim, and visuals."
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Innovation Claim</h2>
        <p>{sip.innovationClaim}</p>

        <h2 className="text-lg font-semibold mt-6">Project Description</h2>
        <p className="whitespace-pre-line">{sip.description}</p>

        {/* Visuals and Docs */}
        <h2 className="text-lg font-semibold mt-6">Visuals and Docs</h2>

        {(plotter || drone) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
            {plotter && (
              <figure className="text-center">
                <img
                  src={plotter.href}
                  alt={plotter.label}
                  className="mx-auto w-full max-w-md h-auto rounded-lg"
                />
                <figcaption className="text-sm italic text-neutral-400 mt-2">
                  {plotter.label}
                </figcaption>
              </figure>
            )}
            {drone && (
              <figure className="text-center">
                <img
                  src={drone.href}
                  alt={drone.label}
                  className="mx-auto w-full max-w-md h-auto rounded-lg"
                />
                <figcaption className="text-sm italic text-neutral-400 mt-2">
                  {drone.label}
                </figcaption>
              </figure>
            )}
          </div>
        )}

        {timeline && (
          <figure className="text-center my-6">
            <img
              src={timeline.href}
              alt={timeline.label}
              className="mx-auto max-w-3xl h-auto"
            />
            <figcaption className="text-sm italic text-neutral-400 mt-2">
              {timeline.label}
            </figcaption>
          </figure>
        )}

        {otherImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
            {otherImages.map(img => (
              <figure key={img.href} className="text-center">
                <img
                  src={img.href}
                  alt={img.label}
                  className="mx-auto w-full max-w-md h-auto rounded-lg"
                />
                <figcaption className="text-sm italic text-neutral-400 mt-2">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Non-image deliverables (e.g., PDFs) shown under Visuals */}
        {nonImageAssets.length > 0 && (
          <>
            <h3 className="text-base font-semibold mt-2">Documents</h3>
            <ul className="list-disc pl-6">
              {nonImageAssets.map(a => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener"
                    className="underline text-neutral-300 hover:text-white"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Removed the old "SIP Brief" button/link block */}
      </section>
    </Page>
  );
}
