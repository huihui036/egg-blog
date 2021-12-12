/*
 * @Description:配置
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:27:31
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 14:10:20
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638581238458_7268';

  // add your egg config in here
  config.middleware = [ 'errorHandler' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.jwt = {
    secret: '165165',
    sign: {
      expiresIn: 1 * 60 * 60 * 24,
    },
  };
  config.routerAuth = [ '/user/login', '/user/register', '/blog/columns' ];


  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/egg-mongo',
      options: {},
    },
  };

  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    // 接口文档的标题，描述或其它
    apiInfo: {
      title: 'Render', // 接口文档的标题
      description: '个人博客接口文档', // 接口文档描述
      version: '1.0.0', // 接口文档版本
    },
    schemes: [ 'http', 'https' ], // 配置支持的协议
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {
      //  配置接口安全授权方式
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'HTTP/HTTPS Bearer',
      },
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: true, // 是否启用授权，默认 false（不启用）
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）
    routerMap: false, // 是否启用自动生成路由，默认 true (启用)
    enable: true, // 默认 true (启用)
  };


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
