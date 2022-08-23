// 封装的是具体的接口请求方法
// 注意：每个方法只负责请求一个url地址
import request from '@/utils/request' // 引入自定义axios函数

// 导出接口方法，为了在逻辑页面引入后调用
// 形参obj的值
// obj ={username:'值',password:'值',repassword:'值'}
// 左侧想要对象解构赋值（语法）
// 函数形参obj就改成对象解构接收传入数据对象
// {username:username,password:password,repassword:repassword}
// key是传入的对象key匹配，value是变量名，用于接收外面传入的值
// ES6规定，key和value变量同名时候，可以简写（key即为key也是value变量名）
export const registerAPI = ({ username, password, repassword }) => {
  // 原地是Promise对象（内部包含原生ajax请求）
  // return这个Promise对象到逻辑页面，去那边对Promise对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    // axios 传参 params,data
    // params的对象参数名和值，axios源码会把参数和值，拼接在url?后面给后台（query查询字符串）
    // data的对象参数名和值，axios源码会把参数和值，拼接在请求体里(body参数)
    data: {
      username,
      password,
      repassword
    }
  })
}
