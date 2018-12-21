import * as api from './api';

export default api;


const config={
    api:{  //api请求地址
       index:'/main/init' //首页 

    }
}

export default {
    install:function(Vue,options,){
        Vue.prototype.api=config.api;
    }
    
}    