import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSocialMediaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
