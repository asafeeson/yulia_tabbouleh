<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';

	let { children, backgroundImageSrc }: { children: Snippet, backgroundImageSrc: string } = $props();
</script>

<section class="flex items-center justify-center md:justify-start overflow-clip w-full bg-amber-200 relative h-auto">
	{#if children}
		{@render children()}
	{/if}
	<Image src={backgroundImageSrc} classImage="h-full w-auto object-cover"></Image>
</section>

<style>
</style>
