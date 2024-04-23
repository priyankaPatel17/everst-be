import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  // constructor(private readonly userService: UserService) {}

  // @Post('insert-test-user')
  // async insertTestUser(): Promise<string> {
  //   try {
  //     await this.userService.insertTestUser();
  //     return 'Test user inserted successfully';
  //   } catch (error) {
  //     return 'Error inserting test user';
  //   }
  // }
}
