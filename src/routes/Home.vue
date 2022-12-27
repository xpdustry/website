<template>
  <div class="p-4 h-screen nice-gradient">
    <header class="flex flex-row w-full">
      <nav class="basis-1/2 flex flex-row">
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="#">
          <XpdustryIcon class="fill-cyan-400"/>
        </a>
      </nav>
      <div class="basis-1/2 flex flex-row flex-row-reverse">
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://discord.xpdustry.fr">
          <DiscordIcon class="fill-cyan-400"/>
        </a>
        <a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://github.com/Xpdustry">
          <GithubIcon class="fill-cyan-400"/>
        </a>
      </div>
    </header>
    <main class="m-4 h-80 vertical-center-please">
      <div class="w-full">
        <h1 class="font-audiowide text-4xl md:text-8xl justify-center m-4">
          Xpdustry
        </h1>
        <p class="italic text-xl">
          The first and only Mindustry French server since 2019
        </p>
      </div>
    </main>
    <div>
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Audiowide";
  src: local("Audiowide"), url(@/assets/fonts/audiowide/Audiowide-Regular.ttf) format("truetype");
}

.font-audiowide {
  font-family: Audiowide, Helvetica, Arial, serif;
}

/* https://codepen.io/hylobates-lar/pen/qBbQeON */
.nice-gradient {
  background: linear-gradient(-45deg, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: nice-gradient-animation 15s ease infinite;
}

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

.vertical-center-please {
  @apply flex items-center
}
</style>
