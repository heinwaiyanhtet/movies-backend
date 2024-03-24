import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Credit {
  
    @Field(() => Int)
    id: string;

    @Field({ nullable: true })
    nameEn?: string;

    @Field({ nullable: true })
    nameMm?: string;

    @Field({ nullable: true })
    keywords?: string;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;

}
