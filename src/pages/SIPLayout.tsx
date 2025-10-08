// src/pages/SIPLayout.tsx
import Page from "@/components/Page";
import { branding } from "@/data/profile";
import { NavLink, Outlet } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";

const base = "block px-3 py-2 rounded-md text-sm whitespace-nowrap";
const active = "bg-neutral-800 text-white";
const idle = "text-neutral-300 hover:text-white hover:bg-neutral-800";

export default function SIPLayout() {
  useTitle(`SIP: ${branding.productShort}`);

  const tabs = [
    { to: "overview",  label: "Overview" },
    { to: "visuals",   label: "Visuals & Docs" },
    { to: "prior-art", label: "Prior Art" },
	{ to: "eval",      label: "Eval & Goals" },
    { to: "brief",     label: "SIP Brief" }
  ];

  return (
    <Page title={`SIP: ${branding.productShort}`}>
      <div className="grid gap-6 md:grid-cols-[220px,1fr]">
        <aside className="md:sticky md:top-4 h-fit">
          <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pr-2">
            {tabs.map(t => (
              <NavLink
                key={t.to}
                to={t.to}
                className={({ isActive }) => `${base} ${isActive ? active : idle}`}
              >
                {t.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </Page>
  );
}
