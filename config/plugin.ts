/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:27:31
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-11 18:36:06
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  mongoose: {
    enable: true, // 开启插件
    package: 'egg-mongoose',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  swaggerdoc: {
    enable: true, // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 第三方插件 包名称
  },
};

export default plugin;
