import { Injectable } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CategoryDTO) {
    const categoryExists = await this.prisma.category.findFirst({
      where: {
        name: data.name,
      },
    });

    if (categoryExists) {
      throw new Error('Category already exists!');
    }

    return await this.prisma.category.create({
      data,
    });
  }

  async findCategories() {
    const categoryExists = await this.prisma.category.findMany();

    if (!categoryExists) {
      throw new Error("Category doesn't exist");
    }

    return categoryExists;
  }

  async update(id: string, data: CategoryDTO) {
    const categoryExists = await this.prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!categoryExists) {
      throw new Error("Category doesn't exists");
    }
    return await this.prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  }

  async erase(id: string) {
    const categoryExists = await this.prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        Task: true,
      },
    });

    if (!categoryExists) {
      throw new Error("Category doesn't exists");
    }
    await this.prisma.task.findMany({
      where: {
        categoryId: parseInt(id),
      },
    });
    return await this.prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });
  }

  async findCategory(id: string) {
    const categoryExists = await this.prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        Task: true,
      },
    });

    if (!categoryExists) {
      throw new Error('Category not found');
    }

    return categoryExists;
  }
}
