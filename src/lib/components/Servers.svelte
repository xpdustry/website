<script lang="ts">
	export let loading = true
</script>

<div class="server-box" class:loading />

<style>
	.server-box {
		background: rgba(255, 255, 255, 0.547);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		transition: all 0.2s ease-in-out;
		width: 100%;
		height: 100%;
	}
</style>
