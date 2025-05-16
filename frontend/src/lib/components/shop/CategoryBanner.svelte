<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	interface Props {
		linkUrl?: string;
		backgroundImageSrc?: string;
		title?: string;
		subtitle?: string;
	}

	let {
		backgroundImageSrc = 'https://picsum.photos/400',
		linkUrl = '/',
		title = 'Название категории товаров',
		subtitle
	}: Props = $props();
</script>

<div class="relative flex min-h-80 w-full flex-col overflow-clip">
	<!-- card content -->
	<div class="flex w-3/4 flex-grow flex-col justify-between gap-6 p-10">
		<div class="space-y-6 text-white">
			<h3>{title}</h3>
			{#if subtitle}
				<p>{subtitle}</p>
			{/if}
		</div>
		<Link href={linkUrl} isSkeleton={true}>Каталог</Link>
	</div>
	<!-- backgound fill -->
	<div class="-z-1 absolute inset-0 bg-gradient-to-r from-green-default to-green-dark"></div>
	<!-- background image -->
	<Image
		src={backgroundImageSrc}
		classImage="absolute right-0 top-1/2 -translate-y-1/2 object-cover h-full -z-1"
	/>
</div>

<style>
</style>
