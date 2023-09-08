import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: CreateTaskDTO) {
    return this.taskService.create(data);
  }

  @Get()
  async findAllTasks() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  async findTask(@Param('id') id: string) {
    return this.taskService.findTask(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDTO) {
    return this.taskService.update(id, data);
  }

  @Delete('id')
  async erase(@Param('id') id: string) {
    return this.taskService.erase(id);
  }

  @Delete('delete-done')
  async deleteDone() {
    return this.taskService.deleteDone();
  }
}
