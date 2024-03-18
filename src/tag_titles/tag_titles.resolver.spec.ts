import { Test, TestingModule } from '@nestjs/testing';
import { TagTitlesResolver } from './tag_titles.resolver';
import { TagTitlesService } from './tag_titles.service';

describe('TagTitlesResolver', () => {
  let resolver: TagTitlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagTitlesResolver, TagTitlesService],
    }).compile();

    resolver = module.get<TagTitlesResolver>(TagTitlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
