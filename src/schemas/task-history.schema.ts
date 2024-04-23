import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class TaskHistory extends Document {
  @Prop({ required: true })
  taskId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true }) 
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: string;
}

export const TaskHistorySchema = SchemaFactory.createForClass(TaskHistory);
