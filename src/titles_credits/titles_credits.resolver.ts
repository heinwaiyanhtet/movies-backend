import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TitlesCreditsService } from './titles_credits.service';
import { TitlesCredit } from './entities/titles_credit.entity';
import { CreateTitlesCreditInput } from './dto/create-titles_credit.input';
import { UpdateTitlesCreditInput } from './dto/update-titles_credit.input';

@Resolver(() => TitlesCredit)
export class TitlesCreditsResolver {
  constructor(private readonly titlesCreditsService: TitlesCreditsService) {}

  @Mutation(() => TitlesCredit)
  createTitlesCredit(@Args('createTitlesCreditInput') createTitlesCreditInput: CreateTitlesCreditInput) {
    return this.titlesCreditsService.create(createTitlesCreditInput);
  }

  @Query(() => [TitlesCredit], { name: 'titlesCredits' })
  findAll() {
    return this.titlesCreditsService.findAll();
  }

  @Query(() => TitlesCredit, { name: 'titlesCredit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.titlesCreditsService.findOne(id);
  }

  @Mutation(() => TitlesCredit)
  updateTitlesCredit(@Args('updateTitlesCreditInput') updateTitlesCreditInput: UpdateTitlesCreditInput) {
    return this.titlesCreditsService.update(updateTitlesCreditInput.id, updateTitlesCreditInput);
  }

  @Mutation(() => TitlesCredit)
  removeTitlesCredit(@Args('id', { type: () => Int }) id: number) {
    return this.titlesCreditsService.remove(id);
  }
}
