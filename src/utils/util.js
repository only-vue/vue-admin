
import { Notification,Message,MessageBox} from 'element-ui';

/**
 * setStorage 存储
 * getStorage 取到
 * removeStorage 移除
 */
export const storage = {
	setStorage: (name, val) => {
    if (typeof val == 'object') {
      val = JSON.stringify(val)
    }
    sessionStorage.setItem(name, val)
  },

  getStorage: val => {
    let value = sessionStorage.getItem(val)
    if (value) {
      if (value.indexOf('{') != -1) {
        return JSON.parse(value)
      } else {
        return value
      }
    } else {
      return null
    }
  },
  removeStorage: val => {
    sessionStorage.removeItem(val)
  }
}



/**
 * vue 挂载
 * this...
 */

export default {
    install:function(Vue,options){
			  /**
				 * 消息通知
				 * mssage 信息
				 */
        Vue.prototype.Notification=function(title="提示",message){
           this.$notify({
               title: title,
               message:message
             });
        }

				/**
				 * 消息提示
				 * mssage 信息
				 */
        Vue.prototype.Message=function(message){
            this.$message(message);
        }

        /**
         * 弹出窗
         * callback 返回函数
         * 
         */

        Vue.prototype.MessageBox=function(title="提示",message,type='info',callback){
            this.$alert(message, title, {
								confirmButtonText: '确定',
								type: type,
                callback: action => {
                  if(callback){
                    this.callback()
                  }
                }
              });
        }

				/**
				* 时间戳转成时间格式
				* xxxx-xx-xx
				*
				*/
	 
			 Vue.prototype.FmtDate = function(obj, type) {
				 if (obj) {
					 var date = new Date(obj)
					 var y = date.getFullYear()
					 var m = date.getMonth() + 1
					 m = m < 10 ? '0' + m : m
					 var d = date.getDate()
					 d = d < 10 ? '0' + d : d
					 var h = date.getHours()
					 h = h < 10 ? '0' + h : h
					 var minute = date.getMinutes()
					 var second = date.getSeconds()
					 minute = minute < 10 ? '0' + minute : minute
					 second = second < 10 ? '0' + second : second
					 if (type == 'year') {
						 return y
					 } else if (type == 'month') {
						 return y + '-' + m
					 } else if (type == 'date') {
						 return y + '-' + m + '-' + d
					 }
					 return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
				 }
			 }
         /**
         * 返回上一页
         * -1,-2,-3
         * 
         */
        Vue.prototype.Back = function(){
            this.$router.back(-1)
        }

       
          
        /**
         *  AuthCode 短信倒计时
         *  sendAuthCode 发送状态
         *  authTime 倒计时时间
         */
        Vue.prototype.AuthCode = function(){
            this.sendAuthCode = false;
            var authTimetimer = setInterval(()=>{
                this.authTime--;
                if(this.authTime<=0){
                    this.sendAuthCode = true;
                    this.authTime = this.authTime;
                    clearInterval(authTimetimer);
                }
            }, 1000);
           
				}
				
				/**
     * 生成数字字母组合随机数
     */
    Vue.prototype.RandomRange = function(min, max) {
      var returnStr = '',
        range = max ? Math.round(Math.random() * (max - min)) + min : min,
        arr = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z'
        ]
      for (var i = 0; i < range; i++) {
        var index = Math.round(Math.random() * (arr.length - 1))
        returnStr += arr[index]
      }
      return returnStr
    }
     
  
    }
  }