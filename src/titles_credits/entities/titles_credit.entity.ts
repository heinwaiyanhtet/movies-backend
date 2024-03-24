import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TitlesCredit {
  @Field(() => String)
  titleId: string;

  @Field(() => String)
  creditsId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

