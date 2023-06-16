<script lang="ts">
	import '../app.postcss';
	import '/src/styles/app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.layout {
		min-height: 100vh;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: 2rem;
	}

	main {
		padding-block: 1rem;
	}

	/* @media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	} */
</style>
