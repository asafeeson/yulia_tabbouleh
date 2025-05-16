<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<header class="min-h-[10dvh] w-full">
	<div class="mx-auto max-w-[1216px]">
		<h2>Это шапка сайта</h2>
		{#if children}
			{@render children()}
		{/if}
	</div>
</header>

<style>
</style>
