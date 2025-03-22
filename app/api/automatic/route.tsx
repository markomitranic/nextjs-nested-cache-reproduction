import { getCarById } from "@/lib/repository";

export async function GET() {
  const cars = await Promise.all([getCarById(1), getCarById(2), getCarById(3)]);
  return Response.json({ cars });
}
