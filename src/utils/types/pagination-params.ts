import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationParams {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit: number;
}
