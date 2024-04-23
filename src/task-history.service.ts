import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskHistory } from './schemas/task-history.schema';


@Injectable()
export class TaskHistoryService {
  constructor(
    @InjectModel(TaskHistory.name) private taskHistoryModel: Model<TaskHistory>,
  ) {}

  async logHistory(history): Promise<TaskHistory> {
    const createdHistory = new this.taskHistoryModel(history);
    return createdHistory.save();
  }

}
