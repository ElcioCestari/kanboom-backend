import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateColumnDto {
  @IsNotEmpty()
  @IsMongoId()
  boardId: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
