/*
 * @Author: daxzhu 
 * @Date: 2018-03-26 11:12:49 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-29 13:36:14
 */
'use strict'
const _mm = require('util/mm.js')
require("page/common/header/index.js")
require("page/common/nav/index.js")
var navSide = require("page/common/nav-side/index.js")
require("node_modules/font-awesome/css/font-awesome.min.css")

navSide.init({name:"pass-update"})
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
// var html = '<div>{{data}}</div>';
// var data = {
//   data: 123
// }

// console.log(_mm.renderHtml(html, data))