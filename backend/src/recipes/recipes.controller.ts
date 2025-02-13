import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    Put, 
    Delete, 
    ParseIntPipe 
  } from '@nestjs/common';
  import { RecipesService } from './recipes.service';
  import { Recipe } from './entities/recipe.entity';
  import { CreateRecipeDto } from './dto/create-recipe.dto';
  import { UpdateRecipeDto } from './dto/update-recipe.dto';
  
  @Controller('recipes')
  export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}
  
    @Get()
    getAll(): Promise<Recipe[]> {
      return this.recipesService.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Promise<Recipe> {
      return this.recipesService.findOne(id);
    }
  
    @Post()
    create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
      return this.recipesService.create(createRecipeDto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateRecipeDto: UpdateRecipeDto
    ): Promise<Recipe> {
      return this.recipesService.update(id, updateRecipeDto);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.recipesService.delete(id);
    }
  }
  