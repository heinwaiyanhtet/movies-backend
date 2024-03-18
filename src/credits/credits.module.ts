import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsResolver } from './credits.resolver';

@Module({
  providers: [CreditsResolver, CreditsService],
})
export class CreditsModule {}
