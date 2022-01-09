/*
 * @Description:配置接口返回值的约束
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-11 18:41:35
 * @LastEditors: qinghui
 * @LastEditTime: 2022-01-09 16:13:49
 */
const globeData = {
  requestUrl: { type: 'string', description: '请求路由' }, // 结果
  msg: { type: 'string', description: '信息' },
  code: { type: 'number', description: '状态码' },
  errsInfo: { type: 'string', description: '错误详细信息' },
};

module.exports = {
  globeData: {
    ...globeData,
  },
  // 注册参数
  Register: {
    email: {
      type: 'string',
      required: false,
      example: '1315574336@qq.com',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      description: '邮箱',
    },
    userName: { type: 'string', required: true, description: '用户名称' },
    password: { type: 'string', required: true, description: '密码' },
    password2: { type: 'string', required: true, description: '再次输入密码' },
  },
  LoginUser: {
    email: {
      type: 'string',
      required: false,
      example: '1315574336@qq.com',
      format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      description: '邮箱',
    },
    password: { type: 'string', required: true, description: '密码' },
  },
  Token: {
    token: { type: 'string', description: 'jwt信息' },
  },
  LoginUserResult: {
    ...globeData,
    data: {
      type: 'Token',
      description: '用户信息',
    },
  },
  // 默认接口类型
  User: {
    userName: { type: 'string', description: '用户名称' },
    account: { type: 'string', description: '账号' },
    avatar: { type: 'string', description: '头像' },
    email: { type: 'string', description: '邮箱' },
    date: { type: 'string', description: '日期' },
  },
  getUserData: {
    ...globeData,
    data: {
      type: 'User',
      description: '用户信息',
    },
  },
};
