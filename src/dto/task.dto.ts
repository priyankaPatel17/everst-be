import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsArray()
  history?: any[]

  @IsOptional()
  status? : string;

}

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title?: string;

  @IsNotEmpty()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsArray()
  history?: any[]

  @IsOptional()
  status? : string;

}