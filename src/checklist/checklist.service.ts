import { Injectable } from '@nestjs/common';
import { ChecklistDTO } from './checklist.dto';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ChecklistService {
  constructor(private prisma: PrismaService) {}

  async create(data: ChecklistDTO) {
    const checklistExists = await this.prisma.checklist.findFirst({
      where: {
        name: data.name,
      },
    });

    if (checklistExists) {
      throw new Error('Checklist already exist!');
    }
    const checklist = await this.prisma.checklist.create({
      data,
    });
    return checklist;
  }

  async findAll() {
    return this.prisma.checklist.findMany();
  }

  async update(id: string, data: ChecklistDTO) {
    const checklistExists = await this.prisma.checklist.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!checklistExists) {
      throw new Error("Checklist doesn't exists");
    }
    return await this.prisma.checklist.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  }

  async erase(id: string) {
    const checklistExists = await this.prisma.checklist.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!checklistExists) {
      throw new Error("Checklist doesn't exists");
    }

    return await this.prisma.checklist.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
