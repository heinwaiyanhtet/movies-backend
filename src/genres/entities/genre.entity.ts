import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Genre {
    @Field(() => String)
    id: string;

    @Field({ nullable: true })
    nameMm?: string;

    @Field({ nullable: true })
    nameEn?: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
