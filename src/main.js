//引入iview
import 'iview/dist/styles/iview.css';
import iView from 'iview';
//引入主模块
import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router/router'
//引入仓库
import store from './store'
//引入字体图标库
import '../src/assets/fonts/iconfont.css'

Vue.config.productionTip = false
//注册到全局
Vue.use(iView)

//创建Vue对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
