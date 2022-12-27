<script lang="ts">
import { defineComponent } from 'vue'
import Home from './routes/Home.vue'
import NotFound from './routes/NotFound.vue'

const routes = {
  '/': Home
}

export default defineComponent({
  data () {
    return {
      currentPath: window.location.pathname
    }
  },
  computed: {
    currentView () {
      return routes[this.currentPath as keyof typeof routes] || NotFound
    }
  },
  mounted (): void {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.pathname
    })
  }
})
</script>

<template>
  <component :is="currentView" />
</template>
