/*
 * @Description:用户表
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-05 09:10:55
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-05 09:10:56
 */

export default function(app: { mongoose: any }) {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
      type: String,
      minlength: [ 2, '最小长度为2' ],
      maxlength: [ 18, '最大度为18' ],
      required: [ true, '此项为必填内容' ],
      comment: '用户名称',
    },
    account: {
      type: String,
      required: [ true, 'account-此项为必填内容' ],
      comment: '用户账号',
    },
    avatar: {
      type: String,
      comment: '用户头像',
    },
    password: {
      type: String,
      required: [ true, '此项为必填内容' ],
      comment: '用户密码',
    },
    email: {
      type: String,
      required: [ true, '此项为必填内容' ],
      comment: '邮箱',
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  });

  const User = mongoose.model('Users', UserSchema);

  return User;
}
