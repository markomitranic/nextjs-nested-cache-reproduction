import { unstable_cache } from "next/cache";
import data from "./classic-cars.json";

/**
 * Get a car by its ID
 * 
 * This is the LEVEL 1 cache.
 * 
 * The full dataset is very large, which results in expenive read,
 * so we wish to cache only the result of each individual ID and minimal data.
 */
export async function getCarById(id: number) {
    const cachedCarById = unstable_cache(async (id: number) => {
        const allCars = await getAllCars();
        const found = allCars.items.find((car) => car.id === id);
        if (!found) throw new Error(`Car with id ${id} not found`);
        
        return {
          id: found.id,
          name: `${found.make} ${found.model}`,
          allCarsReadTime: allCars.allCarsReadTime,
          carReadTime: now(),
        };
    }, ["getCarById"], { revalidate: 60, tags: ["carIdsTag"] });

  return cachedCarById(id);
}

/**
 * Get all cars from the database
 * 
 * This is the LEVEL 2 cache.
 * 
 * We don't want the API called every time someone needs a new ID.
 * We imagine reading this data from a slow remote API is 
 * veeery expensive, so we cache the full dataset for a long time.
 */
async function getAllCars() {
  const cachedAllCars = unstable_cache(async () => {
    return {
      items: data.classic_cars,
      allCarsReadTime: now(),
    };
  }, ["getAllCars"], { revalidate: 3600, tags: ["fullDatasetTag"] });

  return cachedAllCars();
}


function now(): string {
  const date = new Date();
  // mm:ss
  return `${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
}