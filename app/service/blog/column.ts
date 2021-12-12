/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 16:29:07
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 20:44:41
 */

import { Service } from 'egg';
import { HttpExceptions } from '../../middleware/exceptions';
import { CreateColumns } from '../../interface/blog';
export default class Column extends Service {
  public async creatColumn(createColumn: CreateColumns) {
    const isExtent = await this.app.model.Columns.findOne({
      title: createColumn.title,
    });
    if (isExtent) throw new HttpExceptions('专题已经存在', 10007, isExtent);
    const column = await this.app.model.Columns.create(createColumn);
    if (column) throw new HttpExceptions('创建成功', 10000, column);
    throw new HttpExceptions('创建失败', 10007);
  }
}
