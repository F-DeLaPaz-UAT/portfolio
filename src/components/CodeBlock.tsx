type Props = { code: string; lang?: string; className?: string };
export default function CodeBlock({ code, lang, className }: Props) {
  return (
    <pre className={`mt-2 p-3 rounded bg-neutral-900 border border-neutral-800 overflow-x-auto text-sm ${className || ""}`}>
      <code className={`language-${lang || "text"}`}>{code}</code>
    </pre>
  );
}
