import Mock from 'mockjs'
import { Random } from 'mockjs'

let dataList=[];
for(let i=0;i<0;i++){
	dataList.push({
		'id':Random.id(),
		'name':Random.cname()
	});
}

// 登录
export function login() {
  return {
    'msg': 'success',
    'code': 0,
    'expire': Mock.Random.natural(60 * 60 * 1, 60 * 60 * 12),
    // 随机生成一个token
    'token': Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32)
  }
}
// 返回所有的数据接口
export function list(){
	return {
		'msg':'success',
		'code':401,
		data:dataList
	}
}
// 登录接口
Mock.mock('/sys/login','post',login)
Mock.mock('/sys/user/list','get',list)  // 模拟返回所有的数据接口
