<script lang="ts">
import Home from './routes/Home.vue'
import NotFound from './routes/NotFound.vue'

const routes = {
  '/': Home
}

export default {
  data () {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView () {
      return routes[this.currentPath.slice(1) as keyof typeof routes || '/'] || NotFound
    }
  },
  mounted (): void {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <component :is="currentView" />
</template>
