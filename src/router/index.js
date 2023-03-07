import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import VilaApplicationView from '../views/VilaApplicationView.vue'
import AmazonApplicationView from '../views/AmazonApplicationView.vue'
import StickyProjectsView from '../views/StickyProjectsView.vue'
import ChangeMagazineView from '../views/ChangeMagazineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/vila-application',
      name: 'vila-application',
      component: VilaApplicationView
    },
    {
      path: '/amazon-application',
      name: 'amazon-application',
      component: AmazonApplicationView
    },
    {
      path: '/sticky-projects',
      name: 'sticky-projects',
      component: StickyProjectsView
    },
    {
      path: '/change-magazine',
      name: 'change-magazine',
      component: ChangeMagazineView
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    //scroll to top
    return { top: 0 }
  }
})

export default router
