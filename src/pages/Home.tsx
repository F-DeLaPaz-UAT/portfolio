import Page from "@/components/Page";
import { Link } from "react-router-dom";
import NameBadge from "@/components/NameBadge";
import { useTitle } from "@/lib/useTitle"; 

export default function Home() {
	useTitle("Home");
  return (
    <Page title="Mad Tinker’s Workshop">
      <NameBadge
        name={'Francisco "Mad Tinker" De La Paz'}
        title="Owner and Master Tinker, Mad Tinker's Workshop"
        left="assets/me.jpg"
        right="assets/logo.png"
        size={160}
      />

      <div className="mt-6 space-y-4">
        {/* Intro two-liner */}
        <p className="text-lg">My name is Francisco "Mad Tinker" De La Paz.</p>
        <p className="text-lg">Owner and Master Tinker of Mad Tinker's Workshop.</p>

        {/* What I do and why */}
        <p>
          I'm what you call a Chaos Dancer. I thrive in situations where others normally get stressed or overwhelmed by problems. I either dance around them gracefully or grab a sledgehammer and go straight to the foundation to find solution sets. Whether you need custom hardware built, systems tested for flaws, workflows optimized, or your kid taught math tricks that actually work, I'll learn whatever I need to learn to get it done. My shop is equipped with CNC machines, foundry equipment, and all the traditional trades tools. I also code and handle human asset development when needed - problems don't stick to one category, so neither do I. I figure out what's really broken, then build something that actually works.
        </p>

        {/* Tagline */}
        <p className="italic text-neutral-300">Chaos dancer. Master tinker. Making the impossible possible.</p>

        <div className="mt-2 flex gap-3">
          <Link to="/sip" className="px-4 py-2 rounded bg-white text-neutral-900 font-medium">SIP</Link>
          <Link to="/projects" className="px-4 py-2 rounded border border-neutral-700">Projects</Link>
          <Link to="/contact" className="px-4 py-2 rounded border border-neutral-700">Contact</Link>
        </div>
      </div>
    </Page>
  );
}
