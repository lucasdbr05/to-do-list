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
exports.ChecklistService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let ChecklistService = class ChecklistService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
    async update(id, data) {
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
    async erase(id) {
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
};
exports.ChecklistService = ChecklistService;
exports.ChecklistService = ChecklistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ChecklistService);
//# sourceMappingURL=checklist.service.js.map