/*
 * @Author: daxzhu 
 * @Date: 2018-03-29 12:42:34 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-29 13:24:55
 */
'use strict'
require("./index.css")

var _mm = require("util/mm.js")
//通用页面头部
var header = {
  init(){
    this.bindEvent()
  },
  onLoad(){
    var keyword = _mm.getUrlParam("keyword");
    //keyword 存在， 将回填输入框 
    if(keyword) $("#search-input").val(keyword)
  },
  bindEvent(){
    var that = this;
    //点击搜索按钮之后的搜索提交
    $('#search-btn').click(function(){
      that.searchSubmit()
    })
    //输入回车 提交
    $('#search-input').keyup(function(e){
      if(e.keyCode === 13){
        that.searchSubmit()
      }
    })
  },
  searchSubmit(){
    var keyword = $.trim($("#search-input").val())
    // 如果提交的时候有 keyword ， 正常跳转到list页面
    if(keyword) {
      window.location.href = './list.html?keyword=' + keyword
    }
    // 如果keyword为空，直接返回首页
    else{
      _mm.goHome
    }
  }
}

header.init()