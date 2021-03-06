'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors:{
    enable: true,
    package: 'egg-cors',
  },
  jwt:{
    enable: true,
    package: "egg-jwt"
  },
  mysql : {
    enable: true,
    package: 'egg-mysql',
  },
  http: {
    enable: true,
    package: 'egg-axios'
  }
};

