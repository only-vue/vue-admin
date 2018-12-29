
import { Notification,Message,MessageBox} from 'element-ui';

export default {
    install:function(Vue,options,){

        Vue.prototype.Notification=function(title,message){
           this.$notify({
               title: title?title:'提示',
               message:message
             });
        }

        Vue.prototype.Message=function(obj){
            this.$message(obj);
        }

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