import { getCarById } from "./repository";

export async function DataShowcase() {
  const cars = await Promise.all([getCarById(1), getCarById(2), getCarById(3)]);

  return (
    <div>
      <p>
        The first number is the mm:ss when the full dataset was cached.
        <br />
        The second number is the mm:ss when the car was cached.
      </p>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.allCarsReadTime} - {car.carReadTime} | {car.name}
          </li>
        ))}
      </ul>
      <p>
        Because the full dataset is cached for 1h, we expect the first number to
        never change, while the second number should change every 60s.
      </p>
    </div>
  );
}
