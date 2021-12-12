/*
 * @Description:信息返回-错误拦截
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-04 09:45:28
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-12 17:11:15
 */
import { HttpExceptions, HttpParameterExceptions } from './exceptions';
import { ErrorData } from '../interface/general';
module.exports = (options, app) => {

  function httpRest(err, error, ctx) {
    const status = 500;

    if (err instanceof HttpExceptions) {
      error.requestUrl = `${ctx.method} : ${ctx.path}`;
      error.msg = err.msg;
      error.code = err.code;
      error.data = err.data;
    } else if (err instanceof HttpParameterExceptions) {
      error.requestUrl = `${ctx.method} : ${ctx.path}`;
      error.msg = '参数错误';
      error.code = 4001;
      error.errsInfo = err.msg;
    } else {
      // 未知异常，系统异常，线上不显示堆栈信息
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      console.log('err', err);
      //  console.log('err', err.message);
      error.requestUrl = `${ctx.method} : ${ctx.path}`;
      error.code = status;
      error.errsInfo = '服务器异常';
    }
    // 从 error 对象上读出各个属性，设置到响应中
    ctx.body = error;
  }

  return async function errorHandler(ctx, next) {
    const error: ErrorData = {
      requestUrl: '/',
      msg: '',
      code: 0,
      errsInfo: '',
      data: '',
    };

    // 判断当前路由是否需要验证token
    const flag = app.config.routerAuth.includes(ctx.url);
    try {
      const { authorization } = ctx.header;
      if (flag) {
        await next();
      } else {
        if (!authorization) {
          error.msg = '请传入token';
          ctx.body = error;
        } else {
          console.log(options, app);
          let user = {};
          try {
            user = await app.jwt.verify(authorization.substring(7), app.config.jwt.secret);
            ctx.state.userinfo = user;
            await next();
          } catch (e) {
            const err = e as Error;
            if (err.name === 'JsonWebTokenError') {
              error.msg = 'token错误';
              ctx.body = error;
            } else if (err.name === 'TokenExpiredError') {
              error.msg = 'token过期';
              ctx.body = error;
            } else {
              httpRest(err, error, ctx);
            }

          }

        }
      }
      //    ;

    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      // ctx.app.emit('error', err, ctx);
      httpRest(err, error, ctx);
    }
  };
};
