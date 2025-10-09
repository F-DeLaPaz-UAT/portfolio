// src/components/NameBadge.tsx
const base = import.meta.env.BASE_URL;

type Props = {
  name: string;
  title?: string;
  left: string;   // "assets/me.jpg"
  right: string;  // "assets/logo.png"
  min?: number;   // min px for circles
  max?: number;   // max px for circles
};

function CircleImg({
  src,
  alt,
  min = 72,
  max = 160
}: {
  src: string;
  alt?: string;
  min?: number;
  max?: number;
}) {
	const dim = `clamp(${min}px, 14vw, ${max}px)`;
	return (
    <img
      src={`${base}${src}`}
      alt={alt ?? ""}
      style={{ width: dim, height: dim }}
      className="rounded-full object-cover ring-2 ring-neutral-800 bg-neutral-900 shrink"
      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
    />
  );
}

export default function NameBadge({
  name,
  title,
  left,
  right,
  min = 88,
  max = 160
}: Props) {
  return (
     <div className="flex items-center gap-3 sm:gap-6 flex-nowrap min-w-0 [container-type:inline-size]">
      <CircleImg src={left} alt={name} min={min} max={max} />

      {/* Center stack: wraps, centers, and never shoves the right badge to a new line */}
     <div className="flex-1 min-w-0 px-2 text-center overflow-hidden [container-type:inline-size]">
        <div
  className="font-extrabold leading-tight whitespace-nowrap truncate"
  style={{ fontSize: "clamp(0.9rem, 8cqi, 2.25rem)" }} // container-based scaling
>
  {name.replaceAll("De La Paz", "De\u00A0La\u00A0Paz")}
</div>
        {title && (
          <div
            className="text-neutral-400 mt-1 leading-snug break-words"
            style={{ fontSize: "clamp(0.875rem, 3.2vw, 1.125rem)" }} // 14px..18px
          >
            {title}
          </div>
        )}
      </div>

      <CircleImg src={right} alt="" min={min} max={max} />
	  {/* Hide the right logo on very narrow widths to prevent overlap */}
      <div className="max-[520px]:hidden">
        <CircleImg src={right} alt="" min={min} max={max} />
      </div>
    </div>
  );
}
