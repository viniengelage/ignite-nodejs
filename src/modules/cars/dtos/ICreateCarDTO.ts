import { Specification } from "../infra/typeorm/entities/Specification";

export interface ICreateCarDTO {
  id?: string;
  name: string;
  description: string;
  license_plate: string;
  daily_rate: number;
  fine_amount: number;
  brand: string;
  category_id: string;
  specifications?: Specification[];
}
