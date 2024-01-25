import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controllers';
import { BookService } from './app.service';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [UsersModule, ChatModule],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {
  constructor(){
    console.log("App module");
  }
}
