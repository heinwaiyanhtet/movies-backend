import { Test, TestingModule } from '@nestjs/testing';
import { TitlesCreditsService } from './titles_credits.service';

describe('TitlesCreditsService', () => {
  let service: TitlesCreditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TitlesCreditsService],
    }).compile();

    service = module.get<TitlesCreditsService>(TitlesCreditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
