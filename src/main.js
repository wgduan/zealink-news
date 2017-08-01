import Promise from 'promise-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import ExecutivesNews from './ExecutivesNews.vue'
import InvestorRelations from './InvestorRelations.vue'

if (!window.Promise) {  
  window.Promise = Promise;  
}  

Vue.use(ElementUI,{ locale })
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/ExecutivesNews' },
  { path: '/ExecutivesNews', component: ExecutivesNews },
  { path: '/InvestorRelations', component: InvestorRelations },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
