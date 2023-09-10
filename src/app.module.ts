import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TaskModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
