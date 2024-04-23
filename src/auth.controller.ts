import { Body, Controller, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersService } from './users/users.service';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Request() req) {
    try {
      const { username, password } = req.body;
      console.log(req.body.username, username, password);
      const user = await this.authService.validateUser(username, password);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const token = this.authService.generateToken(user);
      return { user, token };
    } catch (error) {
      console.error(error);
    }

  }

  @Post('protected-route')
  @UseGuards(AuthGuard()) // Apply AuthGuard to this route
  async protectedRoute(@Request() req) {
    // Handle logic for protected route
  }

}


