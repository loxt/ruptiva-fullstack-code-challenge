import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator'

export class CarDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(150)
  name: string

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(150)
  manufacturer: string

  @IsInt()
  @IsNotEmpty()
  @MaxLength(6)
  hp: number

  @IsInt()
  @IsNotEmpty()
  @MaxLength(20)
  price: number
}
