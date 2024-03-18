import { Test, TestingModule } from '@nestjs/testing';
import { TagTitlesService } from './tag_titles.service';

describe('TagTitlesService', () => {
  let service: TagTitlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagTitlesService],
    }).compile();

    service = module.get<TagTitlesService>(TagTitlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
