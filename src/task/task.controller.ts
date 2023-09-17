import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  NotFoundException, // Import NotFoundException from '@nestjs/common'
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
    if (id == 'activity')
      return await this.taskService.getTasksByDoneorActive();
    try {
      const task = await this.taskService.findTask(id);
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found`);
      }
      return task;
    } catch (err) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDTO) {
    try {
      const task = await this.taskService.update(id, data);
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found`);
      }
      return task;
    } catch (err) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  @Delete(':id')
  async erase(@Param('id') id: string) {
    if (id == 'delete-done') return await this.taskService.deleteDone();
    try {
      const task = await this.taskService.erase(id);
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found`);
      }
      return task;
    } catch (err) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  @Delete('delete-done')
  async deleteDone() {
    return await this.taskService.deleteDone();
  }

  @Get('activity')
  async getTaskByActivity() {
    try {
      const tasks = await this.getTaskByActivity();
      return tasks;
    } catch (err) {
      throw new Error('Filter of tasks has failed');
    }
  }
}
