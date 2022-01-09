/*
 * @Description:路由
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:27:31
 * @LastEditors: qinghui
 * @LastEditTime: 2022-01-09 16:26:58
 */
import { Application } from 'egg';
import routerData from './routerData';
export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  app.router.redirect('/', routerData.swagger.path, 302);
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
   * @description: 更新用户信息
   * @author: qinghui
   */
  router.put('/user/updatedInform', controller.user.updatedInform);

  /**
   * @description: 创建专栏
   * @param {*}
   * @return {*}
   * @author: qinghui
   */

  router.post('/blog/addColumns', controller.blog.columns.createColumns);
  /**
   * @description: 获取专栏
   * @param {*}
   * @return {*}
   * @author: qinghui
   */
  router.get('/blog/columns', controller.blog.columns.seachColumns);
  router.put('/blog/column', controller.blog.columns.changeColumns);

  /**
   * @description: 创建文章
   * @author: qinghui
   */
  router.post('/blog/createPost', controller.blog.post.createPost);
};
