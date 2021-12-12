/*
 * @Description:参数验证
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 10:33:22
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-04 12:19:05
 */
import { Controller } from 'egg';
import { HttpParameterExceptions } from '../middleware/exceptions';

export default class Validators extends Controller {
  public parameter(rule) {
    const { ctx } = this;
    try {

      ctx.validate(rule, ctx.request.body);
    } catch (error) {
      const errors = error as any;
      throw new HttpParameterExceptions(errors.errors);
    }
  }
}

