import { releases } from "@/sikka/changelog";
import { PageTitle } from "@/sikka/Prose";

const groups = [
  { key: "added", label: "New" },
  { key: "improved", label: "Improved" },
  { key: "fixed", label: "Fixed" },
] as const;

export default function Changelog() {
  return (
    <>
      <PageTitle sub="What changed in each version of Sikka. Your version is in Settings → About.">
        What's new
      </PageTitle>
      <div className="space-y-8">
        {releases.map((r) => (
          <section
            key={r.version}
            id={`v${r.version}`}
            className="border border-neutral-800 rounded-lg p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold">
                {r.version}{" "}
                <span className="text-neutral-400 font-normal text-lg">
                  · {r.title}
                </span>
              </h2>
              <span className="text-sm text-neutral-500">{r.date}</span>
            </div>
            {groups.map(({ key, label }) => {
              const items = r[key];
              if (!items?.length) return null;
              return (
                <div key={key} className="mt-5">
                  <h3 className="text-xs uppercase tracking-wider text-neutral-500">
                    {label}
                  </h3>
                  <ul className="mt-2 space-y-2 text-neutral-300 leading-relaxed list-disc pl-5 marker:text-neutral-600">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        ))}
      </div>
    </>
  );
}
