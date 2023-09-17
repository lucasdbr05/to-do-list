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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const taskExists = await this.prisma.task.findFirst({
            where: {
                name: data.name,
                categoryId: data.categoryId,
            },
        });
        const categoryExists = await this.prisma.category.findUnique({
            where: {
                id: data.categoryId,
            },
        });
        if (taskExists) {
            throw new Error('Task already exists');
        }
        if (!categoryExists) {
            throw new Error("Category doesn't exists");
        }
        return await this.prisma.task.create({
            data,
        });
    }
    async findAllTasks() {
        return this.prisma.task.findMany();
    }
    async findTask(id) {
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
    async update(id, data) {
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
    async erase(id) {
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
    async deleteDone() {
        return await this.prisma.task.deleteMany({
            where: {
                isActive: false,
            },
        });
    }
    async getTasksByDoneorActive() {
        const activerOrDone = { active: [], done: [] };
        const active = await this.prisma.task.findMany({
            where: {
                isActive: true,
            },
        });
        const done = await this.prisma.task.findMany({
            where: {
                isActive: false,
            },
        });
        active.forEach((t) => {
            activerOrDone['active'].push(t);
        });
        done.forEach((t) => {
            activerOrDone['done'].push(t);
        });
        return activerOrDone;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map