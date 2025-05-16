import { createMemoryHistory, createRouter } from 'vue-router'

import appView from './App.vue'
import microblading from './views/MicrobladingPage.vue'

const routes = [
  { path: '/', component: appView },
  { path: '/microblading', component: microblading },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router