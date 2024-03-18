import { Test, TestingModule } from '@nestjs/testing';
import { TitlesResolver } from './titles.resolver';
import { TitlesService } from './titles.service';

describe('TitlesResolver', () => {
  let resolver: TitlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TitlesResolver, TitlesService],
    }).compile();

    resolver = module.get<TitlesResolver>(TitlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
