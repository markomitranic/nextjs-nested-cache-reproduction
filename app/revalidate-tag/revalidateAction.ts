"use server";

import { revalidateTag } from "next/cache";

export async function revalidateCarIds() {
  revalidateTag("carIdsTag");
}

export async function revalidateFullDataset() {
  revalidateTag("fullDatasetTag");
}