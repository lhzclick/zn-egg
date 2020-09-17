'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller , jwt} = app;
    router.get('/', controller.home.index);
    //  用户管理系统
    router.post('/loginSystem', controller.login.loginSystem)
    // router.post('/getCompanyListSystem',jwt, controller.login.getCompanyListSystem)//authSystem
    
}