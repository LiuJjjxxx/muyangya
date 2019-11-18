import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import * as sessiondate from '../static/staticData'
// 导入Element-ui

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//vue 加载 Element-ui
Vue.use(ElementUI);

//导入全局scss
import './static/scss/style.scss'
//导入api
import * as api from './api/index'
Vue.prototype.$http = api

var code = null;
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  methods: {
      getCode () { // 非静默授权，第一次有弹框
                      this.code = ''
                      var local = 'http://172.16.15.186:8080' // 获取页面url
                      var appid = 'wxd06678c5cee88b3a' 
                      this.code = this.getUrlCode().code // 截取code
                      if (this.code == null || this.code === '') { // 如果没有code，则去请求
                          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${local}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
                      } else {
                          // 你自己的业务逻辑
                      }
                  },
      getUrlCode() { // 截取url中的code方法
                      var url = location.search
                      this.winUrl = url
                      var theRequest = new Object()
                      if (url.indexOf("?") != -1) {
                          var str = url.substr(1)
                          var strs = str.split("&")
                          for(var i = 0; i < strs.length; i ++) {
                              theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
                          }
                      }
                      return theRequest
                  }
  },
  mounted() {
    // if(!window.localStorage.getItem('openId')){ // 如果缓存localStorage中没有微信openId，则需用code去后台获取
    //     // this.getCode()
    // } else {
    //     // 别的业务逻辑
    // }
}
})
