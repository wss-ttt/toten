import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import router from '@/router/index.js'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
axios.defaults.timeout = 40000

// 请求拦截器
axios.interceptors.request.use(config => {
  // 获取token
  const token = localStorage.getItem('token');
  if (token) {
  	// 把token放在请求头里面
    config.headers['token'] = token;
  }

  return config;
}, error => {
  return Promise.reject(error);
})
// 相应拦截
axios.interceptors.response.use(response => {
  if(response.data.code===401){
    // 说明token已经过期了
    localStorage.removeItem('token');
    console.log('此时已经移除了token');
    // 回到登录页面去
    router.push({name:'Login'});
  }
  return response;
}, error => {
  console.log('error:', error);
  return Promise.reject(error);
})

// 导出axios对象
export default axios
