// src/pages/brief/SIPBriefLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

const railLink =
  "block px-3 py-2 rounded-md text-sm whitespace-nowrap";
const railActive = "bg-neutral-800 text-white";
const railIdle = "text-neutral-300 hover:text-white hover:bg-neutral-800";

// Build asset URL under /mindscribe/
const asset = (p: string) => `${import.meta.env.BASE_URL}assets/sip/${p}`;

export default function SIPBriefLayout() {
  const tabs = [
    { to: "title",       label: "Title & Overview" },
    { to: "field",       label: "Technical Field" },
    { to: "background",  label: "Background" },
    { to: "figures",     label: "Prototype Images" },
    { to: "project",     label: "Project Description" },
    { to: "innovation",  label: "Innovation Claim" },
    { to: "scenarios",   label: "Usage Scenarios" },
    { to: "pdf",         label: "Brief PDF" }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-[220px,1fr]">
      <aside className="md:sticky md:top-4 h-fit">
        <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pr-2">
          {tabs.map(t => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                `${railLink} ${isActive ? railActive : railIdle}`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="min-w-0">
        {/* Tighter card padding; normalize list spacing via prose utilities */}
        <div className="rounded-2xl bg-white text-neutral-900 shadow p-6 md:p-8 prose prose-neutral max-w-none prose-h1:mt-0 prose-h2:mt-0 prose-ul:my-3 prose-li:my-1">
          <Outlet context={{ asset }} />
        </div>
      </main>
    </div>
  );
}
