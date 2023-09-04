import { Module } from '@nestjs/common';
import { ChecklistModule } from './checklist/checklist.module';

@Module({
  imports: [ChecklistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
