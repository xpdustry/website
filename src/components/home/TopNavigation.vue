<script setup lang="ts">
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconXPDark from '@/components/icons/IconXPDark.vue'
</script>

<template>
  <nav class="flex flex-row">
    <RouterLink
			class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" to="/"
		>
      <IconXPDark class="fill-cyan-400" />
    </RouterLink>
    <a
      class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2 ml-auto"
      href="https://discord.xpdustry.com"
    >
      <IconDiscord class="fill-cyan-400" />
    </a>
    <a
      class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2"
      href="https://github.com/Xpdustry"
    >
      <IconGithub class="fill-cyan-400" />
    </a>
  </nav>
</template>
