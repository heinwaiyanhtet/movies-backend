import { Module } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { TitlesResolver } from './titles.resolver';

@Module({
  providers: [TitlesResolver, TitlesService],
})
export class TitlesModule {}
