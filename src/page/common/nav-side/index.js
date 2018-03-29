/*
 * @Author: daxzhu 
 * @Date: 2018-03-29 13:33:15 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-29 13:34:51
 */
'use strict'
require('./index.css')

var _mm = require('util/mm.js')
var templateIndex = require('./index.string')
//侧边导航
var navSide = {
  option: {
    name: '',
    navList: [
      {
        name: 'user-center',
        desc: "个人中心",
        href: "./user-center.html"
      },
      {
        name: 'order-list',
        desc: "我的订单",
        href: "./order-list.html"
      },
      {
        name: 'pass-update',
        desc: "修改密码",
        href: "./pass-update.html"
      },
      {
        name: 'about',
        desc: "关于MMall",
        href: "./about.html"
      }
    ]
  },
  init(option) {
    $.extend(this.option,option)
    this.renderNav(this.option);
  },
  renderNav() {
    //计算active数据
    for(let i=0,iLength=this.option.navList.length; i<iLength; i++){
      if(this.option.navList[i].name === this.option.name){
        this.option.navList[i].isActive = true
      }
    }
    // 渲染数据
    var navHtml = _mm.renderHtml(templateIndex,{
      navList: this.option.navList
    })
    $(".nav-side").html(navHtml)
  }
}
module.exports = navSide