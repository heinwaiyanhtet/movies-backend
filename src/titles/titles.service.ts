import { Injectable } from '@nestjs/common';
import { CreateTitleInput } from './dto/create-title.input';
import { UpdateTitleInput } from './dto/update-title.input';

@Injectable()
export class TitlesService {
  create(createTitleInput: CreateTitleInput) {
    return 'This action adds a new title';
  }

  findAll() {
    return `This action returns all titles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} title`;
  }

  update(id: number, updateTitleInput: UpdateTitleInput) {
    return `This action updates a #${id} title`;
  }

  remove(id: number) {
    return `This action removes a #${id} title`;
  }
}
