import { Injectable } from '@nestjs/common';
import { CreateTagTitleInput } from './dto/create-tag_title.input';
import { UpdateTagTitleInput } from './dto/update-tag_title.input';

@Injectable()
export class TagTitlesService {
  create(createTagTitleInput: CreateTagTitleInput) {
    return 'This action adds a new tagTitle';
  }

  findAll() {
    return `This action returns all tagTitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagTitle`;
  }

  update(id: number, updateTagTitleInput: UpdateTagTitleInput) {
    return `This action updates a #${id} tagTitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagTitle`;
  }
}
