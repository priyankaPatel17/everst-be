import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
  
  @Prop()
  username: string;

  @Prop()
  password: string;

}

export const UserModel = SchemaFactory.createForClass(User);