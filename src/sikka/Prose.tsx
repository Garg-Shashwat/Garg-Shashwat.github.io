import type { ReactNode } from "react";

/** Text building blocks for the Sikka pages, in the site's dark style. */

export function PageTitle({
  children,
  sub,
}: {
  children: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {children}
      </h1>
      {sub && <p className="mt-3 text-neutral-400">{sub}</p>}
    </header>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-xl md:text-2xl font-semibold">{children}</h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-neutral-300 leading-relaxed">{children}</p>;
}

export function List({
  items,
  ordered,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`mt-3 space-y-2 text-neutral-300 leading-relaxed pl-5 ${
        ordered ? "list-decimal" : "list-disc"
      } marker:text-neutral-600`}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 border border-neutral-800 rounded-lg p-5 text-neutral-300 leading-relaxed bg-neutral-950">
      {children}
    </div>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-white transition"
    >
      {children}
    </a>
  );
}
