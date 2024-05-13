<script setup lang="ts">
const props = defineProps({
  name: String,
  value: String,
  slide: {
    type: Boolean,
    default() {
      return false
    }
  }
})
</script>

<template>
  <div class="flex flex-row shadow-md rounded-lg">
    <div class="w-1/2 bg-gradient-to-r from-cyan-500 to-white font-bold p-2 rounded-l-lg">
      {{ props.name }}
    </div>
    <div class="w-2/3 m-2 bg-white rounded-lg overflow-hidden">
      <p class="text-nowrap text-end" :class="slide ? 'slide-left' : ''">
        {{ props.value }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.slide-left {
  animation: slide-left 10s linear infinite;
}

@keyframes slide-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
