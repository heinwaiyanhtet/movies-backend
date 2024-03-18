import { Injectable } from '@nestjs/common';
import { CreateTitlesCreditInput } from './dto/create-titles_credit.input';
import { UpdateTitlesCreditInput } from './dto/update-titles_credit.input';

@Injectable()
export class TitlesCreditsService {
  create(createTitlesCreditInput: CreateTitlesCreditInput) {
    return 'This action adds a new titlesCredit';
  }

  findAll() {
    return `This action returns all titlesCredits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} titlesCredit`;
  }

  update(id: number, updateTitlesCreditInput: UpdateTitlesCreditInput) {
    return `This action updates a #${id} titlesCredit`;
  }

  remove(id: number) {
    return `This action removes a #${id} titlesCredit`;
  }
}
