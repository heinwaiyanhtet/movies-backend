import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TagTitle {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
