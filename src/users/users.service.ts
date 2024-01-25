/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './data/user.dto';
// import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
 
  users: User[] = [];

  addUser(user: User): string {
    // user.id=uuidv4();
    this.users.push(user);
    return 'Users has been added';
  }

  updateUser(user: User): string {
    const index = this.users.findIndex((currentUser) => {
      return (currentUser.id = user.id);
    });
    this.users[index] = user;
    return 'User successfully updated';
  }
  deleteUser(userId: string): string{
    this.users=this.users.filter((user)=>{
      return user.id!=userId;
    })
    return "users has been deleted";
  }
  findAllUser(): User[]{
    return this.users;
  }
}
