import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postsService.getPostById(Number(id));
    }

    @Get(':id/likes')
    likePost(@Param('id') id: string) {
        return this.postsService.getPostLikesById(Number(id));
    }
}