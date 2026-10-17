import { sikka } from "@/sikka/config";
import { A } from "@/sikka/Prose";

/** The support email as a link, or a placeholder until one is set. */
export default function Support({ subject }: { subject?: string }) {
  if (!sikka.supportEmail) {
    return (
      <span className="text-neutral-400">the support email (coming soon)</span>
    );
  }
  const href = `mailto:${sikka.supportEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <A href={href}>{sikka.supportEmail}</A>;
}
