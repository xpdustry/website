<script lang="ts">
	import Servers from '$lib/components/Servers.svelte'
</script>

<svelte:head>
	<title>Xpdustry | Servers</title>
</svelte:head>

<div class="top">
	<h1>Servers</h1>
	<div class="box">
		<Servers />
	</div>
</div>

<style>
	.top {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.top .box {
		height: 100%;
	}

	.top h1 {
		font-family: var(--xpd-font);
		font-size: clamp(3.75rem, 2.1875rem + 5vw, 5rem);
	}
</style>
