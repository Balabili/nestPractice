import { Cat } from '../interface/cat.interface';
import { IsString, IsInt } from '_class-validator@0.9.1@class-validator';

export class CreateCatDto implements Cat {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
}