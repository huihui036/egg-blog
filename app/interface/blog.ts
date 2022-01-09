/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2021-12-12 15:17:11
 * @LastEditors: qinghui
 * @LastEditTime: 2021-12-26 12:31:47
 */
export interface CreateColumns {
  description:string,
  title:string
}
export interface UpDataColumns {
  columnId:string
  description?: string
  title?: string
}
export interface CreatePost {
  title: string
  content: string
  column: string
  author: string
}
export interface pageSeizeSech {
  current: number
  siez: number
}
