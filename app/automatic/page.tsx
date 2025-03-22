import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";

export default async function AutomaticPage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page with automatic render mode:</h1>
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
    </div>
  );
}
