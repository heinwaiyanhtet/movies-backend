import { CreateTagTitleInput } from './create-tag_title.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTagTitleInput extends PartialType(CreateTagTitleInput) {
  @Field(() => Int)
  id: number;
}
