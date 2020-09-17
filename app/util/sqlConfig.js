'use strict';

/** @type Egg.EggPlugin */

// 分页器
const getPageNum = (pageNo,pageSize)=>(pageNo - 1) * pageSize
// 毫秒级时间
const day = _=> 24 * 60 * 60 * 1000
const month = _=> day() * 30
const now = _=> (new Date()).getTime()

module.exports = {
  //  查询产品列表
  getCompanyListSystem:(data)=>`select * from moduleManagementLogin where if('${data.auth_account_status}' <>'',auth_account_status='${data.auth_account_status}',1=1) and if('${data.account_type}' <>'',account_type='${data.account_type}',1=1) and (account_type='1' or account_type=2) order by login_id desc limit  ${getPageNum(data.pageNo,data.pageSize)}, ${data.pageSize}`,

  //查询产品总数
  getCompanyTotalSystem:(data)=>`select count(*) from moduleManagementLogin where if('${data.auth_account_status}' <>'',auth_account_status='${data.auth_account_status}',1=1) and if('${data.account_type}' <>'',account_type='${data.account_type}',1=1) and (account_type='1' or account_type=2)`,

  // 查询服务商用户登记列表
  serviceUserList:(data)=>`select * from serviceUser  order by serviceUserId desc limit  ${getPageNum(data.pageNo,data.pageSize)}, ${data.pageSize}`,

  // 查询服务商用户登记总数
  serviceUserTotal:(data)=>`select count(*) from serviceUser`,

  // 更新转发服务订阅状态（未订阅）
  updateStatusNo:(data)=>`update serviceUser set status = 1 where overTime-time>${3*month()} and overTime < ${now()}`,

   // 更新转发服务订阅状态（已订阅）
   updateStatusYes:(data)=>`update serviceUser set status = 2 where overTime-time>${3*month()} and overTime >= ${now()}`
};


