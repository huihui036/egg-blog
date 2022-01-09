/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 16:29:07
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-19 10:59:35
 */

import { Service } from 'egg';
import { HttpExceptions } from '../../middleware/exceptions';
import { CreatePost } from '../../interface/blog';
export default class PostServer extends Service {
  public async creatPost(createPost: CreatePost) {

    const isExtent = await this.app.model.Post.findOne({
      title: createPost.title,
    });
    if (isExtent) throw new HttpExceptions('文章已经', 10007, isExtent);
    const column = await this.app.model.Post.create(createPost);
    if (column) throw new HttpExceptions('创建成功', 10000, column);
    throw new HttpExceptions('创建失败', 10007);
  }
}
