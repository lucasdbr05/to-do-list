import { Module } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { ChecklistController } from './checklist.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ChecklistController],
  providers: [ChecklistService, PrismaService],
})
export class ChecklistModule {}
