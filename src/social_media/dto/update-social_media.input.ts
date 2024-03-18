import { CreateSocialMediaInput } from './create-social_media.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialMediaInput extends PartialType(CreateSocialMediaInput) {
  @Field(() => Int)
  id: number;
}
