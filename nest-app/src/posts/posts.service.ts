import { Inject, Injectable } from '@nestjs/common';
import {Post} from './types';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      postCaption: 'This is a post',
      postImage: 'https://via.placeholder.com/150',
      postLikesCount: 0,
      postCommentsCount: 0,
    },
    {
      id: 2,
      postCaption: 'This is another post',
      postImage: 'https://via.placeholder.com/150',
      postLikesCount: 12,
      postCommentsCount: 5,
    },
  ];

  getPosts(): Post[] {
    return this.posts;
  } 

  getPostById(id: number): (Post | []) {
    const post = this.posts.find(post => post.id === id);

    if(!post) {
      return [];
    }

    return post;
  }
  
  getPostLikesById(id: number): [{message: string}] {
    const post = this.posts.find(post => post.id === id);

    if(!post) {
      return [{message: 'Post not found'}];
    }

    return [{message: `Likes for post with id ${id} are ${post.postLikesCount}`}];
  }
}
