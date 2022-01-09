/*
 * @Description:专栏
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 20:01:10
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-14 20:45:26
 */
export default function(app: { mongoose: any }) {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ColumnSchema = new Schema({
    title: {
      type: String,
      required: [ true, '此项为必填内容' ],
      comment: '用户名称',
    },
    description: {
      type: String,
      comment: '详情信息',
    },

    date: {
      type: Date,
      default: Date.now(),
    },

  });

  const ColumnModel = mongoose.model('column', ColumnSchema);
  return ColumnModel;
}
