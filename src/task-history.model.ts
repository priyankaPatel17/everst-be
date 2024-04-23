import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TaskHistoryDocument = TaskHistory & Document;

@Schema()
export class TaskHistory {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  userId: string;
    
}


export const TaskModel = SchemaFactory.createForClass(TaskHistory);