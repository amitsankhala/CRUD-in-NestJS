import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UserMiddleware } from './users.middleware';

@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserService]
})
export class UsersModule implements NestModule{
    constructor(){
        console.log("UserModule");
    }
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserMiddleware).forRoutes('user');
    }
}
