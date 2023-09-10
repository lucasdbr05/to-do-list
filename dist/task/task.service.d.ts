import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTaskDTO): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    findAllTasks(): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }[]>;
    findTask(id: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    update(id: string, data: UpdateTaskDTO): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    erase(id: string): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    deleteDone(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getTasksByDoneorActive(): Promise<{
        active: any[];
        done: any[];
    }>;
}
