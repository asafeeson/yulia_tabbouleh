<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './UI/Image.svelte';
    interface Props {
        extraClass: string;
        children?: Snippet;
    }
	let { children, extraClass }: Props = $props();
</script>

<div class="lg:w-[472px] w-full relative {extraClass}">
	{#if children}
		{@render children()}
	{/if}
	<Image src="/yulia.jpg" classImage="object-cover absolute inset-0 h-full w-full -z-1"></Image>
</div>

<style>
</style>
