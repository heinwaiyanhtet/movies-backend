import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TagTitle {
    @Field(() => String)
    titleId: string;

    @Field(() => String)
    tagId: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
