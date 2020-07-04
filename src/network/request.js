import axios from 'axios'
export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.axios的拦截器
  //2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
  	//1.修改config中一些不符合服务器的要求
  	
  	//2.每次发送请求时增加等待提示
  	
  	//3.某些网络请求(比如登录)，必须携带一些特殊标识
  	
  	// 拦截后必须返回config
  	return config

  },err => {

  })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
  	console.log(res)
  	return res.data
  },err => {
  	console.log(err)
    return err
  })

  //3.发送真正的网络请求
  return instance(config)

}
