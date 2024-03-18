import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaResolver } from './social_media.resolver';
import { SocialMediaService } from './social_media.service';

describe('SocialMediaResolver', () => {
  let resolver: SocialMediaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialMediaResolver, SocialMediaService],
    }).compile();

    resolver = module.get<SocialMediaResolver>(SocialMediaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
