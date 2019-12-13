import axios from 'axios'
import { storage } from './util.js'

axios.defaults.timeout = 50000

//http request 拦截器

axios.interceptors.request.use(
  config => {
    // const user = storage.getStorage('user')
    // if (user) {
    //   config.headers = {
    //     Authorization: 'Bearer ' + user.token
    //   }
    // }
    // return config
  },
  error => {
    return Promise.reject(err)
  }
)

//统一处理返回结果
export function callbackData(response, that) {
  let code = response.data.code
  switch (code) {
    case 10000: //成功回调
      return '10000'
      break
    
    default:
      that.MessageBox('提示',response.data.msg,'warning');
      break
  }
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, that, loading = true) {
  return new Promise((resolve, reject) => {

    axios
      .get(window.base + url, {
        params: params
      })
      .then(response => {
        HideLoading()
        let code = callbackData(response, that, callback)
        if (code == '10000' || code == '20004') {
          resolve(response.data)
        }
      })
      .catch(err => {
				that.MessageBox('提示','网络异常，请稍候再试！','warning');
      })
      .finally(err => {
        
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, that, loading = true) {
  return new Promise((resolve, reject) => {
    axios
      .post(window.base + url, data)
      .then(response => {
        HideLoading()
        let code = callbackData(response, that, callback)
        if (code == '10000' || code == '20004') {
          resolve(response.data)
        }
      })
      .catch(err => {
        that.MessageBox('提示','网络异常，请稍候再试！','warning');
      })
      .finally(err => {
        
      })
  })
}
