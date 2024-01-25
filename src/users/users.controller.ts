/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post,Put, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./data/user.dto";
// import { UserPipe } from "./users.pipes";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get('/findAll')
    getAllUser(): User[]{
        return this.userService.findAllUser();
    }

    @Put('/update')
    updateUser(@Body() user:User): string{
        return this.userService.updateUser(user);
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id') userId: string): string {
        return this.userService.deleteUser(userId);
    }

    @Post('/add')
    addUser(@Body(new ValidationPipe()) user:User): string{
        return this.userService.addUser(user);
    }
}