import { CreateTitleInput } from './create-title.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTitleInput extends PartialType(CreateTitleInput) {
  @Field(() => Int)
  id: number;
}
