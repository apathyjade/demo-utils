import { Injectable } from '@nestjs/common';
import { User } from '../modle/graphql.schema';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {
  private readonly Users: User[] = [
    { id: 1, name: 'User1', age: 5 },
    { id: 2, name: 'User2', age: 6 },
    { id: 3, name: 'User3', age: 7 },
  ];

  create(user: User): User {
    user.id = this.Users.length + 1;
    this.Users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.Users;
  }

  async findOneById(id: number): Promise<User> {
    return this.Users.find(user => user.id === id) as any;
  }
}
