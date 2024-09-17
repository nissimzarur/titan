import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GetGenerateRandomPhotos {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @IsInt()
  @Min(3)
  @Max(10)
  @Type(() => Number)
  numOfPhotos: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  query?: string;
}
