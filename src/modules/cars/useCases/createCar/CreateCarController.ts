import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from '@modules/cars/useCases/createCar/CreateCarUseCase';

class CreateCarController {
  async handle(request:Request, response:Response):Promise<Response> {
    const {
      name,
      description,
      daily_rate,
      fine_amount,
      brand,
      category_id,
      license_plate,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      daily_rate,
      fine_amount,
      brand,
      category_id,
      license_plate,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
