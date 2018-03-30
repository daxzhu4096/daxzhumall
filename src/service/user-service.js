/*
 * @Author: daxzhu
 * @Date:   2018-03-30 09:28:39
 * @Last Modified by:   MyPC
 * @Last Modified time: 2018-03-30 21:08:03
 */
'use strict'
const _mm = require("util/mm.js")
const _user = {
	//检查登陆状态
	checkLogin(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/get_user_info.do'),
			method: "POST",
			success: resolve,
			err: reject
		})
	},
	// 登出
	loginOut(resolve, reject) {

	},

	// 用户登陆
	login(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/login.do'),
			method: "POST",
			success: resolve,
			error: reject,
			data: userInfo
		})
	},
	//检查用户名
	checkUsername(username, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/check_valid.do'),
			method: "POST",
			success: resolve,
			error: reject,
			data: {
				type: 'username',
			}
		})
	},
	// 用户注册
	register(userInfo, resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/register.do'),
			method: "POST",
			success: resolve,
			error: reject,
			data: userInfo
		})
	},
}
module.exports = _user