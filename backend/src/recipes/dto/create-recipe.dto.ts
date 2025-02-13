import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  cookingTime?: number;

  @IsOptional()
  @IsString({ each: true }) // Tableau de chaînes
  ingredients?: string[];
}
