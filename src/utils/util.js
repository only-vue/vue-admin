
import { Notification,Message,MessageBox} from 'element-ui';

/**
 * setStorage 存储
 * getStorage 取到
 * removeStorage 移除
 */
export const storage = {
    setStorage:(name,val)=>{
        sessionStorage.setItem(name,val);
    },

    getStorage:(val)=>{
        return sessionStorage.getItem(val)
    },
    removeStorage:(val)=>{
        sessionStorage.removeItem(val)
    }
}

/**
 * 列表配置控制器
 * page 分页
 * total 总共条数
 * selection 开启复选框
 * rank 开启序号
 */
export const ListConfig = {
    page:1,
    total:0,
    state1:{
        selection:true, 
        rank:true 
    },
    state2:{
        selection:true,
        rank:false 
    },
    state3:{
        selection:false, 
        rank:true
    },
    state4:{
        selection:false,
        rank:false 
    }
}




/**
 * vue 挂载
 * this...
 */

export default {
    install:function(Vue,options){
        Vue.prototype.Notification=function(title,message){
           this.$notify({
               title: title?title:'提示',
               message:message
             });
        }

        Vue.prototype.Message=function(obj){
            this.$message(obj);
        }

        /**
         * 弹出窗
         * callback 返回函数
         * 
         */

        Vue.prototype.MessageBox=function(title,message,callback){
            this.$alert(message, title?title:'提示', {
                confirmButtonText: '确定',
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
        
        Vue.prototype.FmtDate = function(obj){
            var date = new Date(obj * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d+' '+h+':'+minute;
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
     
  
    }
  }