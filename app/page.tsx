import { DataShowcase } from "@/lib/DataShowcase";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Nested Data Cache</h1>
      <p>
        This is a set of examples of how to use the nested data cache in
        Next.js.
      </p>
      <p>App Router - Pages:</p>
      <ul>
        <li>
          <Link href="/automatic">automatic render mode</Link>
        </li>
        <li>
          <Link href="/static">force-static</Link>
        </li>
        <li>
          <Link href="/dynamic">force-dynamic</Link>
        </li>
        <li>
          <Link href="/revalidate">revalidates every 10s</Link>
        </li>
        <li>
          <Link href="/revalidate-tag">with revalidateTag button</Link>
        </li>
      </ul>
      <p>App Router - API Routes:</p>
      <ul>
        <li>
          <Link href="/api/static">GET - automatic render mode</Link>
        </li>
        <li>
          <Link href="/api/static">GET - force-static</Link>
        </li>
        <li>
          <Link href="/api/dynamic">GET - force-dynamic</Link>
        </li>
        <li>
          <Link href="/api/revalidate">GET - revalidates every 10s</Link>
        </li>
      </ul>
    </div>
  );
}
