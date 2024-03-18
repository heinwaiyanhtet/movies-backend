import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagTitlesService } from './tag_titles.service';
import { TagTitle } from './entities/tag_title.entity';
import { CreateTagTitleInput } from './dto/create-tag_title.input';
import { UpdateTagTitleInput } from './dto/update-tag_title.input';

@Resolver(() => TagTitle)
export class TagTitlesResolver {
  constructor(private readonly tagTitlesService: TagTitlesService) {}

  @Mutation(() => TagTitle)
  createTagTitle(@Args('createTagTitleInput') createTagTitleInput: CreateTagTitleInput) {
    return this.tagTitlesService.create(createTagTitleInput);
  }

  @Query(() => [TagTitle], { name: 'tagTitles' })
  findAll() {
    return this.tagTitlesService.findAll();
  }

  @Query(() => TagTitle, { name: 'tagTitle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagTitlesService.findOne(id);
  }

  @Mutation(() => TagTitle)
  updateTagTitle(@Args('updateTagTitleInput') updateTagTitleInput: UpdateTagTitleInput) {
    return this.tagTitlesService.update(updateTagTitleInput.id, updateTagTitleInput);
  }

  @Mutation(() => TagTitle)
  removeTagTitle(@Args('id', { type: () => Int }) id: number) {
    return this.tagTitlesService.remove(id);
  }
}
