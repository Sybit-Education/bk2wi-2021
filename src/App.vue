<template>
  <div id="app">
    <nav-bar />
    <main class="container content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>
