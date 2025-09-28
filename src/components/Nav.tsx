// src/components/Nav.tsx
import { NavLink, Link } from "react-router-dom";
import { site, branding } from "@/data/profile";

const linkBase = "px-3 py-2 rounded-md text-sm";
const active = "bg-neutral-800 text-white";
const idle = "text-neutral-300 hover:text-white hover:bg-neutral-800";

export default function Nav() {
  const items = [
    { to: "/", label: "Home", end: true },
    { to: "/sip", label: "SIP", title: branding.productFull }, // short label, full hover text
    { to: "/boards", label: "Boards" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-6">
        <Link to="/" className="font-semibold text-lg">{site.name}</Link>
        <nav className="flex gap-1">
          {items.map(i => (
            <NavLink
              key={i.to}
              to={i.to}
              end={i.end as any}
              className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
              title={i.title}
            >
              {i.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
