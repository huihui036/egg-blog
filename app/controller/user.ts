/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 10:31:34
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 11:03:37
 */
import { Controller } from 'egg';

import { Register, Logion } from '../interface/general';
import Validators from '../validators/validators';

import { registersRule, loginRule } from '../rule/user-rele';
/**
 * @Controller 用户信息
 */
export default class UserController extends Controller {
  public async register() {
    const { ctx } = this;
    const userData: Register = this.ctx.request.body;
    // 验证参数
    new Validators(ctx).parameter(registersRule);
    await ctx.service.user.register(userData);
  }

  public async login() {
    const { ctx } = this;
    const userData: Logion = this.ctx.request.body;
    // 验证参数
    new Validators(ctx).parameter(loginRule);
    // 成功返回
    await ctx.service.user.login(userData);
  }

  /**
   * @summary 查询用户信息
   * @router get /user/getUserData
   * @response 200 getUsserData 操作结果
   */


  public async getUserData() {
    const { ctx } = this;
    interface Userinfo {
      userId: string, iat: number
    }

    await this.service.user.getUserData(ctx.state.userinfo as Userinfo);
  }
}
