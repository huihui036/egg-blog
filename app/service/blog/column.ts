/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 16:29:07
 * @LastEditors: qinghui
 * @LastEditTime: 2022-01-09 09:33:21
 */

import { Service } from 'egg';
import { HttpExceptions } from '../../middleware/exceptions';
import { CreateColumns, UpDataColumns } from '../../interface/blog';
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
  removePropertyOfNull(obj) {
    Object.keys(obj).forEach(item => {
      if (!obj[item]) delete obj[item];
    });
    return obj;
  }
  public async changeColumns(upData: UpDataColumns) {
    const Updata:UpDataColumns = this.removePropertyOfNull(upData);
    if (!Updata.description && !Updata.title) {
      throw new HttpExceptions('名称跟备注不能同时为空', 10007);
    }

    if (Updata.title) {
      const findcolumns = await this.app.model.Columns.findOne({
        title: Updata.title,
      });
      if (findcolumns) {
        throw new HttpExceptions('标题已经被使用', 10007);
      }
    }


    let changeResult;
    try {
      changeResult = await this.app.model.Columns.updateOne(
        {
          _id: '61b892065a256427ec903b95',
        },
        Updata,
      );
    } catch (error) {
      changeResult = null;
    }

    if (changeResult == null) {
      throw new HttpExceptions('修改失败', 10007, null, changeResult);
    }
    console.log(changeResult);
    if (changeResult.n === 1 && changeResult.ok === 1) {
      throw new HttpExceptions('修改成功', 10000, null);
    } else {
      throw new HttpExceptions('修改失败', 10007, null, changeResult);
    }
  }

  public async getAllColumn() {
    const allolumns = await this.app.model.Columns.find();
    if (allolumns) throw new HttpExceptions('成功', 10000, allolumns);
    throw new HttpExceptions('没有专栏', 10007);
  }
}
