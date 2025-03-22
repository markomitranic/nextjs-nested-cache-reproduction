import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const revalidate = 10;

export default async function RevalidatePage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page that revalidates every 10s:</h1>
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
    </div>
  );
}
