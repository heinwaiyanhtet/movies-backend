import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

// Define enum for statusType
export enum StatusType {
  BANNED = 'banned',
  TEMP_BANNED = 'temBanned',
  DELETE = 'delete',
  EXPIRE = 'Epire', // Note: Corrected typo from "Epire" to "Expire"
}

registerEnumType(StatusType, {
  name: 'StatusType',
});

@ObjectType()
export class Title {
  
    @Field(() => String)
    id: string;

    @Field({ nullable: true })
    keywords?: string;

    @Field({ nullable: true })
    titleEn?: string;

    @Field({ nullable: true })
    titleMm?: string;

    @Field(() => Boolean, { nullable: true })
    status?: boolean;

    @Field(() => StatusType, { nullable: true })
    statusType?: StatusType;

    @Field(() => Int, { nullable: true })
    viewCount?: number;

    @Field({ nullable: true })
    streamingUrl?: string;

    @Field({ nullable: true })
    downloadUrl?: string;

    @Field(() => Int)
    sorting: number;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;

}
