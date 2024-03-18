import { Module } from '@nestjs/common';
import { SocialMediaService } from './social_media.service';
import { SocialMediaResolver } from './social_media.resolver';

@Module({
  providers: [SocialMediaResolver, SocialMediaService],
})
export class SocialMediaModule {}
