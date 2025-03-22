import { getCarById, now } from "@/lib/repository";

export const revalidate = 10;

export async function GET() {
  const cars = await Promise.all([getCarById(1), getCarById(2), getCarById(3)]);
  return new Response(
    JSON.stringify({
      "Page render time": now(),
      cars,
      "What we actually observe": [
        "rm -rf .next/cache/ && npm run build && npm run start",
        "✅ After 10 sedonds, the page render time is changed.",
        "✅ After 10 sedonds, no other times are changed.",
        "✅ The page is loaded with all cache times matching current time.",
        "✅ Refreshing the page doesn't change the cache times.",
        "✅ After 60 seconds, the ID cache times change.",
        "❌ After 60 seconds, the full dataset cache times remain the same. The time for the full dataset changed.",
        "❌ After 60 seconds, we do not observe the getAllCars log in the console. We observe 3 such logs.",
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
}
