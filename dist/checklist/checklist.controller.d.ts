import { ChecklistService } from './checklist.service';
import { ChecklistDTO } from './checklist.dto';
export declare class ChecklistController {
    private readonly checklistService;
    constructor(checklistService: ChecklistService);
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
