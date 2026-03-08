import { siteConfig } from "@/config/config";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        <div className="space-y-10">
          {experience.map((job) => (
            <div
              key={job.company + job.period}
              className="border border-neutral-800 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-neutral-400 text-sm">
                    {job.company} {job.location && `• ${job.location}`}
                  </p>
                </div>

                <span className="text-sm text-neutral-500">{job.period}</span>
              </div>

              <ul className="mt-4 text-sm text-neutral-400 list-disc list-inside space-y-1">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 border border-neutral-700 rounded-md text-sm hover:border-neutral-500 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
