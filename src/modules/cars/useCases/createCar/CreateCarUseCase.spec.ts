import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new card", async () => {
    const car = await createCarUseCase.execute({
      name: "car test",
      description: "a car test",
      daily_rate: 50,
      license_plate: "1h234",
      brand: "brand test",
      fine_amount: 60,
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists licence plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "a car test",
        daily_rate: 50,
        license_plate: "ABC-1234",
        brand: "brand test",
        fine_amount: 60,
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "a car test",
        daily_rate: 50,
        license_plate: "ABC-1234",
        brand: "brand test",
        fine_amount: 60,
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car1",
      description: "a car test",
      daily_rate: 50,
      license_plate: "ABC-1234",
      brand: "brand test",
      fine_amount: 60,
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
