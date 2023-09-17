import { TaskService } from './task.service';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
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
}
