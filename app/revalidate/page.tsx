import { DataShowcase } from "@/lib/DataShowcase";
import { now } from "@/lib/repository";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const revalidate = 10;

export default async function RevalidatePage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page that revalidates every 10s:</h1>
      <p>Last render time: {now()}</p>
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
      <p>$ rm -rf .next/cache/ && npm run build && npm run start</p>
      <p>✅ After 10 seconds, the page render time is changed.</p>
      <p>✅ After 10 seconds, no other times are changed.</p>
      <p>✅ The page is loaded with all cache times matching current time.</p>
      <p>✅ Refreshing the page doesn't change the cache times.</p>
      <p>✅ After 60 seconds, the ID cache times change.</p>
      <p>
        ❌ After 60 seconds, the full dataset cache times remain the same.{" "}
        <span style={{ color: "red" }}>
          The time for the full dataset changed.
        </span>
      </p>
      <p>
        ❌ After 60 seconds, we do not observe the getAllCars log in the
        console. <span style={{ color: "red" }}>We observe 3 such logs.</span>
      </p>
    </div>
  );
}
