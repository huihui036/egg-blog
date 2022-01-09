/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-19 10:21:52
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-19 10:53:11
 */
export default function(app: { mongoose: any }) {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    title: {
      type: String,
      required: [ true, '标题内容为必填内容' ],
      comment: '标题',
    },
    content: {
      type: String,
      required: [ true, '文章内容-此项为必填内容' ],
      comment: '文章内容',
    },
    excerpt: {
      type: String,
      comment: '简介',
    },
    author: {
      type: String,
      required: [ true, '用户id-此项为必填内容' ],
      comment: '用户id',
    },

    column: {
      type: String,
      required: [ true, '此项为必填内容' ],
      comment: '专题',
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  });

  const post = mongoose.model('post', PostSchema);

  return post;
}
