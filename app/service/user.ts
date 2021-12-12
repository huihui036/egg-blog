/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 10:41:26
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 11:31:19
 */
import { Service } from 'egg';
import { hashSync, compareSync } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { HttpExceptions } from '../middleware/exceptions';
import { Register, Logion, RegisterDb as RecitedDb } from '../interface/general';

export default class User extends Service {
  public async register(userData: Register) {
    // 密码检查
    if (userData.password !== userData.password2) {
      throw new HttpExceptions('两次密码输入不同', 10006);
    }

    const findUser = await this.app.model.User.findOne({
      email: userData.email,
    });
    if (findUser) throw new HttpExceptions('邮箱已经被注册', 10006);
    const userDb: RecitedDb = { ...userData, state: 1, account: uuidv4() };
    // 密码密码
    const saltRounds = 10;
    userDb.password = hashSync(userDb.password, saltRounds);
    const creatUser = await this.app.model.User.create(userDb);

    if (creatUser) throw new HttpExceptions('注册成功', 10000);
    throw new HttpExceptions('注册失败，请重新注册', 10007);
  }
  // 登入
  public async login(userData: Logion) {
    const findUser = await this.app.model.User.findOne({
      email: userData.email,
    });
    if (!findUser) throw new HttpExceptions('登入失败用户不存在', 10006);
    // 密码校验
    const chekPassword = compareSync(userData.password, findUser.password);
    if (!chekPassword) throw new HttpExceptions('密码错误', 10007);
    const token = this.app.jwt.sign(
      {
        userName: findUser.name,
        userId: findUser.id,

      },
      this.app.config.jwt.secret,
    );
    throw new HttpExceptions('登入成功', 10006, { token });
  }

  /**
   *查询用户信息
   *
   */
  public async getUserData(userinfo) {
    console.log(userinfo);
    const findUserData = await this.app.model.User.findOne({
      _id: userinfo.userId,
    });

    if (findUserData) throw new HttpExceptions('成功', 10000, findUserData);
    throw new HttpExceptions('查询失败,', 10002);
  }
}
