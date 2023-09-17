import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() data: CategoryDTO) {
    return this.categoryService.create(data);
  }

  @Get()
  async findCategories() {
    return this.categoryService.findCategories();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: CategoryDTO) {
    try {
      return this.categoryService.update(id, data);
    } catch (err) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
  }

  @Delete(':id')
  async erase(@Param('id') id: string) {
    try {
      return this.categoryService.erase(id);
    } catch (err) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
  }

  @Get(':id')
  async findCategory(@Param('id') id: string) {
    try {
      const category = await this.categoryService.findCategory(id);
      if (!category) {
        throw new NotFoundException(`Category with id ${id} not found`);
      }
      return category;
    } catch (err) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
  }
}
