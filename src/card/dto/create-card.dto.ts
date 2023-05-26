import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsMongoId()
  column: string;
}
