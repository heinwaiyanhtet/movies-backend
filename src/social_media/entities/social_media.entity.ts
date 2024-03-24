import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SocialMedia {
    @Field()
    iconLink: string;

    @Field()
    name: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
