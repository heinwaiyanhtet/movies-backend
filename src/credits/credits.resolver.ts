import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreditsService } from './credits.service';
import { Credit } from './entities/credit.entity';
import { CreateCreditInput } from './dto/create-credit.input';
import { UpdateCreditInput } from './dto/update-credit.input';

@Resolver(() => Credit)
export class CreditsResolver {
  constructor(private readonly creditsService: CreditsService) {}

  @Mutation(() => Credit)
  createCredit(@Args('createCreditInput') createCreditInput: CreateCreditInput) {
    return this.creditsService.create(createCreditInput);
  }

  @Query(() => [Credit], { name: 'credits' })
  findAll() {
    return this.creditsService.findAll();
  }

  @Query(() => Credit, { name: 'credit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.creditsService.findOne(id);
  }

  @Mutation(() => Credit)
  updateCredit(@Args('updateCreditInput') updateCreditInput: UpdateCreditInput) {
    return this.creditsService.update(updateCreditInput.id, updateCreditInput);
  }

  @Mutation(() => Credit)
  removeCredit(@Args('id', { type: () => Int }) id: number) {
    return this.creditsService.remove(id);
  }
}
