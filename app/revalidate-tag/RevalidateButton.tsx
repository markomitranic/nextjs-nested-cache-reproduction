"use client";

import { revalidateCarIds, revalidateFullDataset } from "./revalidateAction";

export function RevalidateCarsButton() {
  return (
    <button onClick={() => revalidateCarIds()}>Revalidate all car IDs</button>
  );
}

export function RevalidateDatasetButton() {
  return (
    <button onClick={() => revalidateFullDataset()}>
      Revalidate full dataset
    </button>
  );
}
