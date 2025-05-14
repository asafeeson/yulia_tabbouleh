<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	interface Props {
		linkUrl?: string;
		backgroundImageSrc?: string;
		children?: Snippet;
		title?: string;
		subtitle?: string;
	}

	let {
		children,
		backgroundImageSrc = 'https://picsum.photos/400',
		linkUrl = '/',
		title = 'Название категории товаров',
		subtitle
	}: Props = $props();
</script>

<div class="relative h-auto w-full overflow-clip">
	<div class="w-3/4 space-y-6 p-10">
		<h3>{title}</h3>
		<p>{subtitle}</p>
		{#if children}
			{@render children()}
		{/if}
		<Link href={linkUrl}>Каталог</Link>
	</div>
	<div class="-z-1 absolute inset-0 bg-gradient-to-r from-amber-700 to-[transparent_50%]"></div>
	<Image
		src={backgroundImageSrc}
		classImage="absolute right-0 top-1/2 -translate-y-1/2 object-cover h-full w-auto -z-1"
	/>
</div>

<style>
</style>
