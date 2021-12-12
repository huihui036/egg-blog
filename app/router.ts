/*
 * @Description:路由
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:27:31
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 17:06:33
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  app.router.redirect('/', '/swagger-ui.html', 302);
  // 注册
  router.post('/user/register', controller.user.register);
  // 登入
  router.post('/user/login', controller.user.login);
  /**
   * @description: 获取用户新
   * @param {*}
   * @return {*}
   * @author: qinghui
   */

  router.get('/user/getUserData', controller.user.getUserData);

  /**
 * @description: 创建专栏
 * @param {*}
 * @return {*}
 * @author: qinghui
 */

  router.post('/blog/columns', controller.blog.columns.createColumns);

};
