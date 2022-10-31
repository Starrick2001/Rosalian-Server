import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UsersDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':sub')
  async getUser(@Res() res: Response, @Param('sub') sub: string) {
    try {
      const user = await this.userService.findOne(sub);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  @Post()
  async createUser(@Res() res: Response, @Body() createUserDto: UsersDTO) {
    try {
      res.status(200).json(await this.userService.create(createUserDto));
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  }
}
