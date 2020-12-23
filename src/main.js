import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueLazyload from 'vue-lazyload'
import md5 from 'js-md5'
import '@/assets/css/base.css'
import '@/assets/css/iconfont.css'
import {Button, Form, Field, Toast, Icon} from 'vant'
import { prefix } from '@/assets/js/utils'

Vue.use(Form).use(Button).use(Toast).use(Field).use(Icon)
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  preLoad: 1.5,
  attempt: 1,
  loading: './assets/dog.png',
  listenEvents:['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'webkitAnimationend', 'webkitTransitionend', 'touchmove']
})

//事件总线
Vue.prototype.$bus = new Vue()

Vue.prototype.prefix = prefix;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.afterEach(() => {
//   window.scrollTo(0,0)
// })

Vue.prototype.$md5 = md5
window.vRouter = router
