<template>
  <div class="p-4 h-screen bg-gradient-to-tl from-custom-cyan to-custom-green animate-[nice-gradient-animation_15s_ease_infinite] bg-[length:400%_400%] font-avenir antialiased text-center text-[#2c3e50]">
    <header class="flex flex-row w-full">
      <nav class="basis-1/2 flex flex-row">
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="#">
          <XpdustryIcon class="fill-cyan-400"/>
        </a>
      </nav>
      <div class="basis-1/2 flex flex-row-reverse">
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://discord.xpdustry.fr">
          <DiscordIcon class="fill-cyan-400"/>
        </a>
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://github.com/Xpdustry">
          <GithubIcon class="fill-cyan-400"/>
        </a>
      </div>
    </header>
    <main class="m-4 h-80 flex items-center">
      <div class="w-full">
        <h1 class="font-audiowide text-4xl md:text-8xl justify-center m-4">
          Xpdustry
        </h1>
        <p class="italic text-xl">
          The first and only Mindustry French server since 2019
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// TODO Find a way to apply tailwind classes to svg icons so we avoid this mess...
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import XpdustryIcon from '@/components/icons/XpdustryIcon.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    XpdustryIcon,
    DiscordIcon,
    GithubIcon
  }
})
</script>

<style>
/* https://codepen.io/hylobates-lar/pen/qBbQeON */
@keyframes nice-gradient-animation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
