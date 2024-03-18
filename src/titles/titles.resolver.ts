import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TitlesService } from './titles.service';
import { Title } from './entities/title.entity';
import { CreateTitleInput } from './dto/create-title.input';
import { UpdateTitleInput } from './dto/update-title.input';

@Resolver(() => Title)
export class TitlesResolver {
  constructor(private readonly titlesService: TitlesService) {}

  @Mutation(() => Title)
  createTitle(@Args('createTitleInput') createTitleInput: CreateTitleInput) {
    return this.titlesService.create(createTitleInput);
  }

  @Query(() => [Title], { name: 'titles' })
  findAll() {
    return this.titlesService.findAll();
  }

  @Query(() => Title, { name: 'title' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.titlesService.findOne(id);
  }

  @Mutation(() => Title)
  updateTitle(@Args('updateTitleInput') updateTitleInput: UpdateTitleInput) {
    return this.titlesService.update(updateTitleInput.id, updateTitleInput);
  }

  @Mutation(() => Title)
  removeTitle(@Args('id', { type: () => Int }) id: number) {
    return this.titlesService.remove(id);
  }
}
