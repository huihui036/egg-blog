// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportColumns from '../../../app/model/columns';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Columns: ReturnType<typeof ExportColumns>;
    User: ReturnType<typeof ExportUser>;
  }
}
