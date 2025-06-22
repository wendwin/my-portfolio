import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Project from '../pages/Project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/project', component: Project },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router