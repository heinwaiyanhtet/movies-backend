import { CreateTitlesCreditInput } from './create-titles_credit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTitlesCreditInput extends PartialType(CreateTitlesCreditInput) {
  @Field(() => Int)
  id: number;
}
