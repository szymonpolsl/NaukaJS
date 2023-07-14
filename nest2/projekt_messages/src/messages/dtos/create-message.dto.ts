import { IsString } from 'class-validator';

export class createMassageDto {
  @IsString()
  content: string;
}
