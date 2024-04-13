<script setup lang="ts">
import { RouterView } from 'vue-router'
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconXPDark from '@/components/icons/IconXPDark.vue'
</script>

<template>
	<div class="p-4 h-screen bg-gradient-to-tl from-cyan-500 to-green-500 text-gray-700">
		<header class="flex flex-row w-full">
			<nav class="basis-1/2 flex flex-row">
				<RouterLink class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" to="/">
					<IconXPDark class="fill-cyan-400"/>
				</RouterLink>
			</nav>
			<div class="basis-1/2 flex flex-row-reverse">
				<a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://discord.xpdustry.fr">
					<IconDiscord class="fill-cyan-400"/>
				</a>
				<a class="rounded-lg bg-white drop-shadow-lg w-12 h-12 m-2 p-2" href="https://github.com/Xpdustry">
					<IconGithub class="fill-cyan-400"/>
				</a>
			</div>
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>
