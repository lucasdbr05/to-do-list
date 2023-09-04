import { ChecklistDTO } from './checklist.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class ChecklistService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ChecklistDTO): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    update(id: string, data: ChecklistDTO): Promise<{
        id: number;
        name: string;
    }>;
    erase(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
