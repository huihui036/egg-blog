/*
 * @Description:专栏
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 14:17:02
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-26 12:39:53
 */
import { Controller } from 'egg';
import { CreateColumns, UpDataColumns } from '../../interface/blog';
import Validators from '../../validators/validators';

import { columnRule, upDatacolumnRule } from '../../rule/blog';
/**
 * @Controller 专栏信息
 */
export default class ColumnsController extends Controller {
  public async createColumns() {
    const { ctx } = this;

    const column: CreateColumns = this.ctx.request.body;
    // 验证参数

    new Validators(ctx).parameter(columnRule);
    await ctx.service.blog.column.creatColumn(column);
  }

  public async seachColumns() {
    const { ctx } = this;

    await ctx.service.blog.column.getAllColumn();
  }

  public async changeColumns() {
    const { ctx } = this;
    const column: UpDataColumns = this.ctx.request.body;
    new Validators(ctx).parameter(upDatacolumnRule);
    await ctx.service.blog.column.changeColumns(column);
  }
}
