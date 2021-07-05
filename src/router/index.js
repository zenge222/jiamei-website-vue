import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import MyServices from '@/components/myServices'
import MyStory from '@/components/myStory'
import MyNews from '@/components/myNews'
import NewsDetail from '@/components/newsDetail'
import ContactUs from '@/components/contactUs'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '嘉美美家',
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/myServices',
      name: 'MyServices',
      component: MyServices,
      meta: {
        title: '我的服务',
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/myStory',
      name: 'MyStory',
      component: MyStory,
      meta: {
        title: '我的故事',
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/myNews',
      name: 'MyNews',
      component: MyNews,
      meta: {
        title: '我的新闻',
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      meta: {
        title: '新闻详情',
        requireAuth: false,
        keepAlive: false
      }
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        title: '联系我们',
        requireAuth: false,
        keepAlive: false
      }
    }

  ],
  mode: 'history',
  history: true,
})
