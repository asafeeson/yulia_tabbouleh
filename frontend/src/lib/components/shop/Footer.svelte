<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div>
	<h2>Это футер сайта</h2>
	{@render children()}
</div>

<style>
</style>
