import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function for generating UUIDs

import { Task, TaskDocument } from '../task.model';
import { InjectModel } from '@nestjs/mongoose';
import { TaskHistory, TaskHistoryDocument } from '../task-history.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>, @InjectModel(TaskHistory.name) private taskHistoryModel: Model<TaskHistoryDocument>) {}

  
  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);
    return createdTask.save();
  }

  async attachHistory(task: Task): Promise<Task> {
    const createdTask = new this.taskHistoryModel(task);
    return createdTask.save();
  }


  async update(id: string, task: Task): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

}

