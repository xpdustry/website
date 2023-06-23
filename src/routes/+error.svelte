<script lang="ts">
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>Xpdustry | {$page.status} - Bruh, what are you doing ?</title>
</svelte:head>

<div class="error">
	<h1>{$page.status}</h1>
	<i><b>Bruh, what are you doing ?</b></i>
</div>

<style>
	.error {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		user-select: none;
		height: 100%;
		font-size: clamp(1rem, -2.4375rem + 11vw, 3.75rem);
	}

	.error h1 {
		font-family: var(--xpd-font);
	}
</style>
