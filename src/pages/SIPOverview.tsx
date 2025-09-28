import { sip } from "@/data/profile";

export default function SIPOverview() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Innovation Claim</h2>
      <p>{sip.innovationClaim}</p>

      <h2 className="text-lg font-semibold mt-6">Project Description</h2>
      <p className="whitespace-pre-line">{sip.description}</p>
      {/* Overview is text-only. Visuals live in the Visuals & Docs tab. */}
    </section>
  );
}
