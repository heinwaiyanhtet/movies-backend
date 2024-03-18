import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTitleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
