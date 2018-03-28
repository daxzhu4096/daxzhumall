/*
 * @Author: daxzhu 
 * @Date: 2018-03-26 11:12:49 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-27 02:15:32
 */
'use strict'
const _mm = require('util/mm.js')
// _mm.request({
//   url: '/product/list.do?keyword=1',
//   success(res){
//     console.log(res)
//   },
//   error(err){
//     console.log(err)
//   }

// })
// console.log(_mm.getUrlParam("test"))
var html = '<div>{{data}}</div>';
var data = {
  data: 123
}

console.log(_mm.renderHtml(html, data))