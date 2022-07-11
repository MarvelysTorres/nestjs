import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly status: number;
}

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}
