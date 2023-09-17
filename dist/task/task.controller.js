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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(data) {
        return this.taskService.create(data);
    }
    async findAllTasks() {
        return this.taskService.findAllTasks();
    }
    async findTask(id) {
        if (id == 'activity')
            return await this.taskService.getTasksByDoneorActive();
        try {
            const task = await this.taskService.findTask(id);
            if (!task) {
                throw new common_1.NotFoundException(`Task with id ${id} not found`);
            }
            return task;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
    }
    async update(id, data) {
        try {
            const task = await this.taskService.update(id, data);
            if (!task) {
                throw new common_1.NotFoundException(`Task with id ${id} not found`);
            }
            return task;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
    }
    async erase(id) {
        try {
            const task = await this.taskService.erase(id);
            if (!task) {
                throw new common_1.NotFoundException(`Task with id ${id} not found`);
            }
            return task;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
    }
    async deleteDone() {
        return this.taskService.deleteDone();
    }
    async getTaskByActivity() {
        try {
            const tasks = await this.getTaskByActivity();
            return tasks;
        }
        catch (err) {
            throw new Error('Filter of tasks has failed');
        }
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAllTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findTask", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "erase", null);
__decorate([
    (0, common_1.Delete)('delete-done'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteDone", null);
__decorate([
    (0, common_1.Get)('activity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskByActivity", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map