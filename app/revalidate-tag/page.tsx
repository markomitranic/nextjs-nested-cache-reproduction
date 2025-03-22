import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";
import {
  RevalidateCarsButton,
  RevalidateDatasetButton,
} from "./RevalidateButton";

export const dynamic = "force-dynamic";

export default async function RevalidatePage() {
  return (
    <div>
      <Link href="/">👈 Back to home</Link>
      <h1>Page with a revalidateTag button:</h1>
      <RevalidateCarsButton /> <RevalidateDatasetButton />
      <DataShowcase />
      <p>---</p>
      <p>What we actually observe:</p>
      <p>$ rm -rf .next/cache/ && npm run build && npm run start</p>
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
      <p>
        ✅ After pressing the revalidate IDs button, the ID cache times change.
      </p>
      <p>
        ❌ After pressing the revalidate IDs button, the full dataset cache
        times remain the same.
      </p>
      <p>
        ✅ After pressing the revalidate dataset button, the full dataset cache
        times remain the same.{" "}
        <span style={{ color: "green" }}>
          Because the time comes from the L1 ID cache, which is not revalidated.
        </span>
      </p>
      <p>
        ✅ After pressing the revalidate dataset button, the ID cache times
        remain the same.
        <span style={{ color: "green" }}>
          Because the time comes from the L1 ID cache, which is not revalidated.
        </span>
      </p>
    </div>
  );
}
