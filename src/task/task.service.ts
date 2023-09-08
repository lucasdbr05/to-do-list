import { Injectable } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDTO) {
    const taskExists = await this.prisma.task.findFirst({
      where: {
        name: data.name,
        categoryId: data.categoryId,
      },
    });
    if (taskExists) {
      throw new Error('Task already exists');
    }
    return await this.prisma.task.create({
      data,
    });
  }

  async findAllTasks() {
    return this.prisma.task.findMany();
  }

  async findTask(id: string) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!taskExists) {
      throw new Error("Task doesn't exists");
    }
    return taskExists;
  }

  async update(id: string, data: UpdateTaskDTO) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!taskExists) {
      throw new Error("Task doesn't exist");
    }

    return await this.prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  }

  async erase(id: string) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!taskExists) {
      throw new Error("Task doesn't exist");
    }

    return await this.prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
