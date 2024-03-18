import { Injectable } from '@nestjs/common';
import { CreateSocialMediaInput } from './dto/create-social_media.input';
import { UpdateSocialMediaInput } from './dto/update-social_media.input';

@Injectable()
export class SocialMediaService {
  create(createSocialMediaInput: CreateSocialMediaInput) {
    return 'This action adds a new socialMedia';
  }

  findAll() {
    return `This action returns all socialMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialMedia`;
  }

  update(id: number, updateSocialMediaInput: UpdateSocialMediaInput) {
    return `This action updates a #${id} socialMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialMedia`;
  }
}
