"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
        return this.prisma.category.findMany();
    }
    async update(id, data) {
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
    async erase(id) {
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
    async findCategory(id) {
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
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map