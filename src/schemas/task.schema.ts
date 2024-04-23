import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TaskHistory } from './task-history.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ type: [TaskHistory] }) // Embed TaskHistory schema
  history: TaskHistory[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);