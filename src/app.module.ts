import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AppController } from './app.controller';
import { AuthService } from './auth.service';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy } from './local.strategy';
import { UserSchema } from './schemas/user.schema';
import { TaskSchema } from './schemas/task.schema';
import { TaskHistorySchema } from './schemas/task-history.schema';
import { UsersService } from './users/users.service';
import { TasksService } from './tasks/tasks.service';
import { TaskHistoryModule } from './task-history.module';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TaskController } from './task.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TaskHistoryInterceptor } from './tasks/task-history.interceptor';


@Module({
  controllers: [AuthController, UserController, TaskController],
  providers: [AuthService, LocalStrategy, TasksService, UsersService, JwtService,{
    provide: APP_INTERCEPTOR,
    useClass: TaskHistoryInterceptor,
  }],
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Everst'), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]), MongooseModule.forFeature([{ name: 'TaskHistory', schema: TaskHistorySchema }]), TaskHistoryModule, PassportModule],
})
export class AppModule { }


