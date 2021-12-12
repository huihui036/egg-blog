/*
 * @Description:Y
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 10:39:49
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-04 16:39:31
 */
const emailCode = {
  email: {
    type: 'email',
  },
  codeType: [ 1000, 1001, 1002 ],
};
const registersRule = {
  email: {
    type: 'email',
  },
  userName: {
    type: 'string',
  },
  password: {
    type: 'password',
    allowEmpty: false,
  },
  password2: {
    type: 'password',
    allowEmpty: false,
  },
};
const loginRule = {
  email: {
    type: 'email',
  },
  password: {
    type: 'password',
    allowEmpty: false,
  },
};
const rectPasswordRule = {
  email: {
    type: 'email',
  },
  newPassword: {
    type: 'password',
    allowEmpty: false,
  },

};

export { emailCode, registersRule, loginRule, rectPasswordRule };
