// src/pages/Contact.tsx
import Page from "@/components/Page";
import { site } from "@/data/profile";

export default function Contact() {
  // build absolute thank-you URL (works with /mindscribe/)
  const nextUrl = typeof window !== "undefined"
    ? new URL(`${import.meta.env.BASE_URL}contact/sent`, window.location.origin).toString()
    : "";

  return (
    <Page title="Contact" lead={`Messages go to ${site.email}.`}>
      <form
        className="space-y-3 max-w-md"
        action={`https://formsubmit.co/${site.email}`}
        method="POST"
      >
        {/* FormSubmit controls */}
        <input type="hidden" name="_subject" value="Website inquiry" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <input name="name" required className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800" placeholder="Your name" />
        <input name="email" type="email" required className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800" placeholder="Email" />
        <textarea name="message" required rows={6} className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800" placeholder="Message" />
        <button type="submit" className="px-4 py-2 rounded bg-white text-neutral-900 font-medium">Send</button>
      </form>

      <p className="text-xs text-neutral-400 mt-3">
        First submit triggers a verification email from FormSubmit. Approve once, then messages land in your inbox.
      </p>
    </Page>
  );
}
