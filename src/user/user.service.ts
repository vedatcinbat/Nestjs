import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserRequest } from './dto/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneUser(id: number): Promise<User|[]> {
    return this.userRepository.findOne({
      where: {id},
      relations: ['profile', 'posts'] // To load the related profile
    })
  }

  createUser(user: CreateUserRequest): Promise<User> {
    return this.userRepository.save(user);
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}
