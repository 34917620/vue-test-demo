<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>页面标题</h1>
    </header>
    <div class="main-container">
      <button @click="toggleSidebar">
        {{ isSidebarOpen ? '←' : '→' }}
      </button>
      <aside class="sidebar" :class="{ 'collapsed': !isSidebarOpen }">
        <nav>
          <ul>
            <h>{{ $route.fullPath }}</h>
            <li><RouterLink  to="/">首页</RouterLink ></li>
            <li><RouterLink  to="/microblading">纹绣推广</RouterLink ></li>
          </ul>
        </nav>
      </aside>
      <main class="content">
        
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

button {
  height: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
}

.main-container {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 0;
  overflow: hidden;
}

.content {
  flex: 1;
  padding: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.header h1 {
  color: red;
  text-align: center;
}
</style>
