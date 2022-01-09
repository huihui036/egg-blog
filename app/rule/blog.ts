/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 14:24:12
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-26 12:39:27
 */
const columnRule = {
  title: {
    type: 'string',
    allowEmpty: false,
  },
  description: {
    type: 'string',
    allowEmpty: false,
  },
};

const upDatacolumnRule = {
  columnId: {
    type: 'string',
    allowEmpty: false,
  },

};

const createPostRule = {

  title: {
    type: 'string',
    allowEmpty: false,
  },
  content: {
    type: 'string',
    allowEmpty: false,
  },
  column: {
    type: 'string',
    allowEmpty: false,
  },
};

export { columnRule, createPostRule, upDatacolumnRule };
