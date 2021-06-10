import Vue from 'vue'//在页面中引入vue.js
import App from './App.vue' //引入自定义组件，就是view下的App.vue
import router from './router' //引入vue的路由js
import store from './store' //全局状态
import ElementUI from 'element-ui';  //引用element-UI
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false //阻止启动生产消息，让自己知道哪里有错
Vue.use(ElementUI); //使用el-UI


new Vue({   //vue的全局实例
  router, //注册路由对象
  store,
  render: h => h(App)
}).$mount('#app') //做一个扩展，然后用$mount的方法把扩展挂载到dom上

/*这里是一个主入口，保护了app根目录的实例，并把它作为组件
挂载到index.html上的app*/