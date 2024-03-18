import { Module } from '@nestjs/common';
import { TitlesCreditsService } from './titles_credits.service';
import { TitlesCreditsResolver } from './titles_credits.resolver';

@Module({
  providers: [TitlesCreditsResolver, TitlesCreditsService],
})
export class TitlesCreditsModule {}
