type Props = { title: string; lead?: string; children?: React.ReactNode };
export default function Page({ title, lead, children }: Props) {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {lead && <p className="text-neutral-300">{lead}</p>}
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}
