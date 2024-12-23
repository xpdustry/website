<script setup lang="ts">
import HomeSectionCard from '@/components/home/HomeSection.vue'
import { ref } from 'vue'
import type { ChaoticServer } from '@/helper/server'
import HomeSectionField from '@/components/home/HomeSectionField.vue'

const servers = ref<Array<ChaoticServer>>([])

fetch('https://api.xpdustry.com/v0/servers')
  .then((response) => response.json())
  .then((json) =>
    (json as Array<ChaoticServer>)
      .filter((server) => server.name !== 'hub')
      .sort((a, b) => a.name.localeCompare(b.name))
  )
  .then((entries) => (servers.value = entries))
  .catch((error) => console.error('Error fetching server list:', error))
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-audiowide text-4xl xl:text-8xl m-4">Xpdustry</h1>
    <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      <HomeSectionCard title="DESCRIPTION">
        A group of Mindustry developers, hosting servers and providing powerful tools since 2019
      </HomeSectionCard>
      <HomeSectionCard v-for="server in servers" :key="server.name" :title="server.name">
        <div class="space-y-2 pt-2">
          <HomeSectionField name="MAP" :value="server.mapName" :slide="true" />
          <HomeSectionField name="WAVE" :value="server.wave.toString()" />
          <HomeSectionField name="DESC" :value="server.description" :slide="true" />
          <HomeSectionField name="PLAYERS" :value="server.playerCount.toString()" />
        </div>
      </HomeSectionCard>
    </div>
  </div>
</template>
