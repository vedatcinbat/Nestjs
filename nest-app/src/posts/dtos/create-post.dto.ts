// create-post.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional() // This field is optional
  @IsString()
  imageUrl?: string;
}
