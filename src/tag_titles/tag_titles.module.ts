import { Module } from '@nestjs/common';
import { TagTitlesService } from './tag_titles.service';
import { TagTitlesResolver } from './tag_titles.resolver';

@Module({
  providers: [TagTitlesResolver, TagTitlesService],
})
export class TagTitlesModule {}
