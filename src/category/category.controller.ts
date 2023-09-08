import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
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
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  async erase(@Param('id') id: string) {
    return this.categoryService.erase(id);
  }

  @Get(':id')
  async findCategory(@Param('id') id: string) {
    return this.categoryService.findCategory(id);
  }
}
