import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DynamicPage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page with force-dynamic:</h1>
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
    </div>
  );
}
