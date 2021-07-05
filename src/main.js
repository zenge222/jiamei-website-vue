// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as types from './store/mutations';
import './element/index'
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
// 直接使用animated中的动画class名，注意：必须使用animated这个class名，否则动画会无效 
Vue.use(animated)
// import './scss/element-variables.scss'
Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.pushTo = function (path, parameter = {}) {
  router.push({
    name: path,
    params: parameter
  });
};
Vue.prototype.replaceTo = function (path, parameter = {}) {
  router.replace({
    name: path,
    params: parameter
  });
};
window.document.title = '嘉美美家';
router.beforeEach((to, from, next) => {
  // 设置title
  // if (to.meta.title) {
  //   window.document.title = to.meta.title;
  // }
  next();
})

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
