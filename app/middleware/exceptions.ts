/*
 * @Description:异常处理
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:43:34
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-26 12:09:27
 */
import { ParameterError } from '../interface/general';
class HttpExceptions extends Error {
  public code: number;
  public msg: string;
  public errsInfo: any[];

  public data: any;
  constructor(msg = '服务器出错误了', code = 1, data?, errsInfo?) {
    super();
    this.code = code;
    this.msg = msg;
    this.errsInfo = errsInfo;

    this.data = data || null;
  }
}

// 参数异常
class HttpParameterExceptions extends Error {
  public code: string;
  public msg: ParameterError[];
  public field: string;
  constructor(message = [], code = 'invalid', field = '') {
    super();
    this.code = code;
    this.msg = message;
    this.field = field;
  }
}

export { HttpExceptions, HttpParameterExceptions };
