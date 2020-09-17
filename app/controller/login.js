//  用户管理系统
const Controller = require('egg').Controller;
const sqlConfig = require('../util/sqlConfig')


class TestController extends Controller {
    // 登录
    async loginSystem() {
        const { ctx, app } = this;
        const r_body = ctx.request.body;
        const mysql = app.mysql
        const data = await mysql.select('systemUser')
        if (data.find(item => item.userName == r_body.userName && item.password == r_body.password)) {
            const token = app.jwt.sign({
                userName: r_body.userName,
                password: r_body.password
            }, app.config.jwt.secret);
            ctx.body = {
                code: 200,
                msg: 'LOGIN SUCCESS',
                data: {
                    token: token,
                    userName: r_body.userName
                }
            }
        } else {
            ctx.body = {
                err: -1,
                msg: '用户名或密码错误',
            }
        }
    }
}

module.exports = TestController;