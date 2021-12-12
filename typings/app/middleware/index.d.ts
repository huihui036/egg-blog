// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportExceptions from '../../../app/middleware/exceptions';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    exceptions: typeof ExportExceptions;
  }
}
