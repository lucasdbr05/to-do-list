import { Module } from '@nestjs/common';
import { ChecklistModule } from './checklist/checklist.module';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ChecklistModule, TaskModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
