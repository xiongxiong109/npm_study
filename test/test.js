// 单元测试

// 引入断言模块, 使用chai断言库, 用mocha 进行单元测试
var expect = require('chai').expect;

// 引入开发模块
var greet = require('../index');

describe('测试greet函数', function() {

	it('函数不传递参数的时候, 默认会打印出hello', function() {
		expect(greet()).to.equal('hello');
	});

	it('函数传递参数的时候, 返回参数 + hello', function() {
		for (var i = 0; i< 10; i++) {
			expect(greet(i)).to.equal('hello' + i);
		}
	});

});