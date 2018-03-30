/*
 * @Author: daxzhu 
 * @Date: 2018-03-26 11:17:11 
 * @Last Modified by:   MyPC
 * @Last Modified time: 2018-03-30 11:31:01
 */
'use strict'
require('./index.css')
const _mm = require('util/mm.js')
const _user = require('service/user-service.js')
require("page/common/nav-simple/index.js")

//表单错误提示
const formError = {
  show(errMsg) {
    $('.error-item').show().find('.error-msg').text(errMsg)
  },
  hide() {
    $('.error-item').hide().find('.error-msg').text('')
  }
}
//page的逻辑部分
const page = {
  init() {
    this.bindEvent()
  },
  bindEvent() {
    const that = this
    $('#submit').click(function() {
      that.submit()
    })
    $('.user-content').keyup(function(e) {
      if (e.keyCode === 13) {
        that.submit()
      }
    })
  },
  // 提交表单
  submit() {
    var formData = {
        username: $.trim($('#username').val()),
        password: $.trim($('#password').val())
      },
      //表单验证结果
      validateResult = this.formValidate(formData);
    if (validateResult.status) {
      //提交
      _user.login(formData, function(res) {
        //window.localtion.href = _mm.getUrlParam("redirect") || './index.html'
      }, function(errMsg) {
        formError.show(errMsg)
      })
    } else {
      formError.show(validateResult.msg)
    }
  },
  formValidate(formData) {
    //表单验证
    var result = {
      status: false,
      msg: ''
    };
    if (!_mm.validate(formData.username, "require")) {
      result.msg = "用户名不能为空"
      return result
    }
    if (!_mm.validate(formData.password, "require")) {
      result.msg = "密码不能为空"
      return result
    }

    result.status = true;
    result.msg = "验证通过"

    return result
  }
}
$(function() {
  page.init()
})