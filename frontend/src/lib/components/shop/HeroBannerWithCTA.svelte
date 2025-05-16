<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';
    interface Props {
        extraClass: string;
        children?: Snippet;
    }
	let { children, extraClass }: Props = $props();
</script>

<div class="md:w-[472px] relative {extraClass}">
	{#if children}
		{@render children()}
	{/if}
	<Image src="https://picsum.photos/800/1000" classImage="object-cover absolute inset-0 h-full w-full -z-1"></Image>
</div>

<style>
</style>
