// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';
import ExportBlogColumn from '../../../app/service/blog/column';
import ExportBlogPost from '../../../app/service/blog/post';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    user: AutoInstanceType<typeof ExportUser>;
    blog: {
      column: AutoInstanceType<typeof ExportBlogColumn>;
      post: AutoInstanceType<typeof ExportBlogPost>;
    }
  }
}
