import Link from "next/link";

export function StudioNav({ active }: { active: "home" | "roam" }) {
  return (
    <header className="studio-nav studio-wrap">
      <Link href="/" className="studio-wordmark">
        More Data
      </Link>
      <nav aria-label="Apps">
        <Link href="/here">HERE</Link>
        <Link href="/roam" aria-current={active === "roam" ? "page" : undefined}>Roam</Link>
      </nav>
    </header>
  );
}
