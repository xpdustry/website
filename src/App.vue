<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import TopNavigation from '@/components/home/TopNavigation.vue'
</script>

<template>
  <SpeedInsights />
  <div
    class="flex flex-col p-4 bg-gradient-to-tl from-cyan-500 to-green-500 text-gray-700 space-y-8 min-h-screen"
  >
    <header>
      <TopNavigation />
    </header>
    <main class="container mx-auto h-auto">
      <RouterView />
    </main>
    <footer>
      <p class="text-center">© 2024 Xpdustry</p>
    </footer>
  </div>
</template>
