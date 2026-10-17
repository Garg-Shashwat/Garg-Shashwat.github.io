import { releases } from "@/sikka/changelog";
import { sikka } from "@/sikka/config";
import { A, H2, P } from "@/sikka/Prose";

const features = [
  {
    title: "Split anything",
    text: "Equally, by amounts or by shares. See who owes whom, and settle up in a tap.",
  },
  {
    title: "Groups",
    text: "Trips, flatmates, family. A group report shows what everyone spent and on what.",
  },
  {
    title: "Shared with people you choose",
    text: "Connect with family and friends on Sikka; expenses you share show up for both of you.",
  },
  {
    title: "Works offline",
    text: "Add expenses anywhere. Everything syncs across your devices when you're back online.",
  },
  {
    title: "Your own categories",
    text: "Starter categories for Indian homes, receipts, tags and a monthly report.",
  },
  {
    title: "Private by default",
    text: "No ads, no tracking. Personal expenses, categories and tags stay yours.",
  },
];

export default function Overview() {
  const latest = releases[0];
  return (
    <>
      <header className="mb-12">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Sikka</h1>
        <p className="mt-4 text-xl text-neutral-300 font-medium">
          Money between us, made simple.
        </p>
        <p className="mt-6 text-lg text-neutral-400">
          An expense tracker for families and friends: what was spent, who paid,
          who it was for, and who owes whom.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/sikka/changelog/"
            className="px-5 py-3 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition"
          >
            What's new in {latest.version}
          </a>
          <a
            href="/sikka/privacy/"
            className="px-5 py-3 border border-neutral-700 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500 transition"
          >
            Privacy
          </a>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="border border-neutral-800 rounded-lg p-6"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {f.text}
            </p>
          </div>
        ))}
      </div>

      <H2>Getting the app</H2>
      <P>
        Sikka is for Android and is being tested with family and friends before
        it comes to Google Play. Sign-up is by invitation for now.
      </P>

      <H2>More</H2>
      <P>
        <A href="/sikka/terms/">Terms of use</A> ·{" "}
        <A href="/sikka/privacy/">Privacy policy</A> ·{" "}
        <A href="/sikka/delete-account/">Delete your account</A>
      </P>
      <P>Made by {sikka.developer}.</P>
    </>
  );
}
