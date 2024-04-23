// task-history.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskHistoryService } from './task-history.service';
import { TaskHistory, TaskHistorySchema } from './schemas/task-history.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TaskHistory.name, schema: TaskHistorySchema }])],
  providers: [TaskHistoryService],
  exports: [TaskHistoryService], // Make service available for injection
})
export class TaskHistoryModule {}
  