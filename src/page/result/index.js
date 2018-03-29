/*
 * @Author: daxzhu 
 * @Date: 2018-03-29 16:53:36 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-29 17:17:49
 */
'use strict'
require('./index.css')
const _mm = require('util/mm.js')
require("page/common/nav-simple/index.js")

$(function(){
  var type= _mm.getUrlParam("type") || "default"
  //显示对应的提示元素
  $('.'+ type + "-success").show()
})