// src/components/NameBadge.tsx
const base = import.meta.env.BASE_URL;

type Props = {
  name: string;
  title?: string;
  left: string;   // e.g. "assets/me.jpg"
  right: string;  // e.g. "assets/logo.png"
  min?: number;   // min px for circles
  max?: number;   // max px for circles
};

function CircleImg({
  src,
  alt,
  min = 72,
  max = 148,
}: {
  src: string;
  alt?: string;
  min?: number;
  max?: number;
}) {
  const dim = `clamp(${min}px, 13vw, ${max}px)`;
  return (
    <img
      src={`${base}${src}`}
      alt={alt ?? ""}
      style={{ width: dim, height: dim }}
      className="rounded-full object-cover ring-2 ring-neutral-800 bg-neutral-900 shrink-0"
      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
    />
  );
}

export default function NameBadge({
  name,
  title,
  left,
  right,
  min = 72,
  max = 148,
}: Props) {
  return (
    <div className="flex items-center gap-3 sm:gap-6 flex-nowrap min-w-0 [container-type:inline-size]">
      {/* Left portrait */}
      <CircleImg src={left} alt={name} min={min} max={max} />

      {/* Center stack: wraps on small screens, single line on xl+ */}
      <div className="flex-1 min-w-0 px-2 text-center overflow-visible [container-type:inline-size]">
        <div
          className="font-extrabold leading-tight whitespace-normal xl:whitespace-nowrap break-words"
          // Container-query units let this scale with available width.
          // Max size trimmed so it fits on one line at desktop.
          style={{ fontSize: "clamp(1rem, 6cqi, 2rem)" }}
        >
          {name.replaceAll("De La Paz", "De\u00A0La\u00A0Paz")}
        </div>

        {title && (
          <div
            className="text-neutral-400 mt-1 leading-snug break-words"
            style={{ fontSize: "clamp(0.85rem, 2.8cqi, 1.125rem)" }}
          >
            {title}
          </div>
        )}
      </div>

      {/* Right logo — hide on very narrow screens to avoid crowding */}
      <div className="max-[600px]:hidden">
        <CircleImg src={right} alt="" min={min} max={max} />
      </div>
    </div>
  );
}
