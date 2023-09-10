import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(data: CategoryDTO): Promise<{
        id: number;
        name: string;
        createdAt: Date;
    }>;
    findCategories(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
    }[]>;
    update(id: string, data: CategoryDTO): Promise<{
        id: number;
        name: string;
        createdAt: Date;
    }>;
    erase(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
    }>;
    findCategory(id: string): Promise<{
        Task: {
            id: number;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: number;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
    }>;
}
