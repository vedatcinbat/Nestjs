import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { Profile } from './profile/profile.entity';
import { Post } from './post/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'yourMySqlDbPasswordHere',
      database: 'nestormdb',
      entities: [User, Profile, Post],
      synchronize: true
    }),
    TypeOrmModule.forFeature([User, Profile, Post])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
