import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTitlesCreditInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
