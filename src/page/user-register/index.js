/*
 * @Author: daxzhu
 * @Date:   2018-03-30 13:31:32
 * @Last Modified by:   MyPC
 * @Last Modified time: 2018-03-30 21:13:39
 */
'use strict'
require('./index.css')
require("page/common/nav-simple/index.js")
const _mm = require('util/mm.js')
const _user = require('service/user-service.js')


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
		$('.username').blur(function() {
			var username = $.trim(this.val())
			//一部验证用户名是否存在
			if (!username) {
				return
			}
			_user.checkUsername(username, function(res) {
				formError.hide()
			}, function(errMsg) {
				formError.show(errMsg.msg)
			})
		})
	},
	// 提交表单
	submit() {
		var formData = {
				username: $.trim($('#username').val()),
				password: $.trim($('#password').val()),
				passwordConfirm: $.trim($('#password-confirm').val()),
				phone: $.trim($('#phone').val()),
				email: $.trim($('#email').val()),
				question: $.trim($('#question').val()),
				answer: $.trim($('#answer').val())
			},
			//表单验证结果
			validateResult = this.formValidate(formData);
		if (validateResult.status) {
			//提交
			_user.register(formData, function(res) {
				window.localtion.href = './result.html?type=register'
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
		if (formData.password.length < 6) {
			result.msg = "密码长度不能小于6位"
			return result
		}
		if (formData.password !== formData.passwordConfirm) {
			result.msg = "两次密码输入不一致"
			return result
		}
		if (!_mm.validate(formData.phone, "phone")) {
			result.msg = "手机号码格式错误"
			return result
		}
		if (!_mm.validate(formData.email, "email")) {
			result.msg = "邮箱格式错误"
			return result
		}
		if (!_mm.validate(formData.question, "require")) {
			result.msg = "提示问题不能为空"
			return result
		}
		if (!_mm.validate(formData.answer, "require")) {
			result.msg = "提示问题答案不能为空"
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