import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SocialMedia {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
