import { Type } from 'class-transformer';
import { IsPositive } from 'class-validator';

export class FindByIdDto {
  @IsPositive()
  @Type(() => Number)
  public id: number;
}
