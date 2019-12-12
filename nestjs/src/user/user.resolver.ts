
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../modle/graphql.schema';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}
  // @Query(returns => String)
  // seaHello(): string {
  //   return 'hello boy!';
  // }
  @Query(returns => User)
  async user(@Args('id') id: number): Promise<User> {
    // throw new Error(String(id));
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }
}
