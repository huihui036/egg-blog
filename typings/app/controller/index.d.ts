// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';
import ExportBlogColumns from '../../../app/controller/blog/columns';
import ExportBlogPost from '../../../app/controller/blog/post';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
    blog: {
      columns: ExportBlogColumns;
      post: ExportBlogPost;
    }
  }
}
