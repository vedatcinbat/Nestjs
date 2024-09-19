import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    publishedDate: Date;

    @Column()
    isDeleted: boolean;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;
}