/*
 * @Description:专栏
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 14:17:02
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 17:09:27
 */
import { Controller } from 'egg';
import { CreateColumns } from '../../interface/blog';
import Validators from '../../validators/validators';

import { columnRule } from '../../rule/blog';
/**
 * @Controller 专栏信息
 */
export default class ColumnsController extends Controller {
  public async createColumns() {
    const { ctx } = this;
    console.log('123');
    const column: CreateColumns = this.ctx.request.body;
    // 验证参数
    console.log(column);
    new Validators(ctx).parameter(columnRule);
    await ctx.service.blog.column.creatColumn(column);
  }
}
