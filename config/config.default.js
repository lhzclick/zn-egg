/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.customLogger = {
    scheduleLogger: {
      // consoleLevel: 'NONE',
      // file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-schedule.log'),
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587868929984_3673';

  // add your middleware config here
  config.middleware = [];
  // web安全
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  };
  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // jwt
  config.jwt = {
    secret: "123456"
  }
  // 启动配置
  config.cluster = {
    listen: {
      path: '',
      port: 5001,
      hostname: '0.0.0.0',
    }
  };
  exports.mysql = {
    // 单数据库信息配置
    client: {
      host: '39.98.141.127',
      port: '3306',
      user: 'root',
      password: 'Cdy@2019',
      database: 'smart_water_platform',
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false,// 是否加载到 agent 上，默认关闭
  };
  // axios请求
  exports.http = {
    headers: {
       common: {
          'Content-Type': 'application/json; charset=UTF-8'
         }
    },
   timeout: 10000
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
