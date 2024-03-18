import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Title {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
