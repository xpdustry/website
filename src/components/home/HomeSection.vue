<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <section class="bg-white rounded-lg p-4 drop-shadow-xl min-h-48">
    <h2 class="font-audiowide font-bold text-2xl">{{ props.title.toUpperCase() }}</h2>
    <slot />
  </section>
</template>
