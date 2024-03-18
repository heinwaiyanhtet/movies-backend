import { Test, TestingModule } from '@nestjs/testing';
import { TitlesCreditsResolver } from './titles_credits.resolver';
import { TitlesCreditsService } from './titles_credits.service';

describe('TitlesCreditsResolver', () => {
  let resolver: TitlesCreditsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TitlesCreditsResolver, TitlesCreditsService],
    }).compile();

    resolver = module.get<TitlesCreditsResolver>(TitlesCreditsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
