/*
 * @Author: daxzhu 
 * @Date: 2018-03-27 18:42:58 
 * @Last Modified by: daxzhu
 * @Last Modified time: 2018-03-27 18:56:52
 */
'use strict'
const Hogan = require("hogan")
// 便于线上api地址修改
const conf = {
  serverHost: ''
}
var _mm = {
  // 网络请求
  request(param){
    const that = this
    $.ajax({
      type:     param.method  || 'get',
      url:      param.url     || '',
      dataType: param.type    || 'json',
      data:     param.data    || '',
      success:  function(res){
        //请求成功
        if(res.status===0){
          typeof param.success === 'function' && param.success(res.data,res.msg)
        }
        //没有登陆状态，需要强制登陆
        else if (res.status===10){
          that.doLogin()
        }
        //请求参数错误
        else if(res.status === 1){
          typeof param.error === 'function' && param.success(res.msg)
        }
      },
      // 类似 404 处理
      error:    function(err){
        typeof param.error === 'function' && param.success(err.statusText)
      }

    })
  },
  // 获取服务器地址
  getServerUrl(path){
    return conf.serverHost + path
  },
  // 获取 url 参数
  getUrlParam(){
    var reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)')
    var result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  },
  //同一登陆处理
  doLogin(){
    window.location.href = './login.html?redirect='+ encodeURIComponent(window.location.href)
  },
  //渲染 HTML
  renderHtml(htmlTemplate,data){
    var template = Hogan.compile(htmlTemplate);//编译
    return template.render(data) //渲染
  }
}

module.exports = _mm