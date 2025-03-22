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
    </div>
  );
}
