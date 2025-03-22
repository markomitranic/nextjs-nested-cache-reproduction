import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";

export const dynamic = "force-static";

export default async function StaticPage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page with force-static:</h1>
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
    </div>
  );
}
