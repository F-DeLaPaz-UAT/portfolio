import Page from "@/components/Page";
import { degreeObjectives } from "@/data/profile";
import { useTitle } from "@/lib/useTitle"; 

export default function Boards() {
	useTitle("Boards: Degree Objectives");
  return (
    <Page title="Boards" lead="Major objectives from the UAT catalog.">
      <div className="space-y-8">
        {Object.entries(degreeObjectives).map(([degree, goals]) => (
          <section key={degree} className="border border-neutral-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold">{degree}</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-neutral-200">
              {goals.map((g, i) => <li key={i}>{g}</li>)}
            </ol>
          </section>
        ))}
      </div>
    </Page>
  );
}
