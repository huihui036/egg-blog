/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-19 10:15:05
 * @LastEditors: qinghui
 * @LastEditTime: 2022-01-09 15:32:18
 */
import { Controller } from 'egg';

import Validators from '../../validators/validators';
import { CreatePost } from '../../interface/blog';
import { createPostRule } from '../../rule/blog';

/**
 * @Controller 文章信息
 */
export default class PostController extends Controller {
  public async createPost() {
    const { ctx } = this;

    const post: CreatePost = this.ctx.request.body;
    // 验证参数

    new Validators(ctx).parameter(createPostRule);
    interface Userinfo {
      userId: string
      iat: number
    }
    const userinfo: Userinfo = ctx.state.userinfo;
    post.author = userinfo.userId;
    await ctx.service.blog.post.creatPost(post);
  }
}
