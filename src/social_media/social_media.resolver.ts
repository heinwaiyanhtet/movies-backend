import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SocialMediaService } from './social_media.service';
import { SocialMedia } from './entities/social_media.entity';
import { CreateSocialMediaInput } from './dto/create-social_media.input';
import { UpdateSocialMediaInput } from './dto/update-social_media.input';

@Resolver(() => SocialMedia)
export class SocialMediaResolver {
  constructor(private readonly socialMediaService: SocialMediaService) {}

  @Mutation(() => SocialMedia)
  createSocialMedia(@Args('createSocialMediaInput') createSocialMediaInput: CreateSocialMediaInput) {
    return this.socialMediaService.create(createSocialMediaInput);
  }

  @Query(() => [SocialMedia], { name: 'socialMedia' })
  findAll() {
    return this.socialMediaService.findAll();
  }

  @Query(() => SocialMedia, { name: 'socialMedia' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.socialMediaService.findOne(id);
  }

  @Mutation(() => SocialMedia)
  updateSocialMedia(@Args('updateSocialMediaInput') updateSocialMediaInput: UpdateSocialMediaInput) {
    return this.socialMediaService.update(updateSocialMediaInput.id, updateSocialMediaInput);
  }

  @Mutation(() => SocialMedia)
  removeSocialMedia(@Args('id', { type: () => Int }) id: number) {
    return this.socialMediaService.remove(id);
  }
}
