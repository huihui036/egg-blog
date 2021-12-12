/*
 * @Description:配置接口返回值的约束
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-11 18:41:35
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-11 19:23:24
 */
module.exports = {
  // 默认接口类型
  User: {
    userName: { type: 'string', description: '用户名称' },
    account: { type: 'string', description: '账号' },
    avatar: { type: 'string', description: '头像' },
    email: { type: 'string', description: '邮箱' },
    date: { type: 'string', description: '日期' },
  },
  getUsserData: {
    requestUrl: { type: 'string', description: '请求路由' }, // 结果
    msg: { type: 'string', description: '信息' },
    code: { type: 'number', description: '状态码' },
    errsInfo: { type: 'string', description: '错误详细信息' },
    data: {
      type: 'User',
      description: '用户信息',
    },
  },
};
