import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitlesModule } from './titles/titles.module';
import { GenresModule } from './genres/genres.module';
import { TagsModule } from './tags/tags.module';
import { SocialMediaModule } from './social_media/social_media.module';
import { TagTitlesModule } from './tag_titles/tag_titles.module';
import { CreditsModule } from './credits/credits.module';
import { TitlesCreditsModule } from './titles_credits/titles_credits.module';

@Module({
  imports: [TitlesModule, GenresModule, TagsModule, SocialMediaModule, TagTitlesModule, CreditsModule, TitlesCreditsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
