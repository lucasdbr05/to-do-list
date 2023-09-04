import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { ChecklistDTO } from './checklist.dto';

@Controller('checklist')
export class ChecklistController {
  constructor(private readonly checklistService: ChecklistService) {}

  @Post()
  async create(@Body() data: ChecklistDTO) {
    return this.checklistService.create(data);
  }

  @Get()
  async findAll() {
    return this.checklistService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ChecklistDTO) {
    return this.checklistService.update(id, data);
  }

  @Delete(':id')
  async erase(@Param('id') id: string) {
    return this.checklistService.erase(id);
  }
}
