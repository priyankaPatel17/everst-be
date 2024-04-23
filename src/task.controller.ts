import { Body, Controller, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { TasksService } from './tasks/tasks.service';
import { Task } from './task.model';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';


@Controller('tasks')
export class TaskController {
  constructor(
    private readonly userService: UsersService, 
    private readonly taskService: TasksService, 
  ) {}

  // @Post('insert-test-user')
  // async insertTestUser(): Promise<string> {
  //   try {
  //     await this.userService.insertTestUser();
  //     return 'Test user inserted successfully';
  //   } catch (error) {
  //     return 'Error inserting test user';
  //   }
  // }


  @Post()
  async create(@Body() req): Promise<Task> {
    return this.taskService.create(req.body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() req): Promise<Task> {
    const updatedTask = await this.taskService.update(id, req.body);

    if (!updatedTask) {
      throw new NotFoundException(`Task with ID '${id}' not found.`);
    }
    return updatedTask;
  }

}
