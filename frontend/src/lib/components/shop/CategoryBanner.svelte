<script lang="ts">
	import Image from './UI/Image.svelte';
	import Link from './UI/Link.svelte';

	interface Props {
		linkUrl?: string;
		backgroundImageSrc?: string;
		title?: string;
		subtitle?: string;
		className?: string;
	}

	let {
		backgroundImageSrc = 'https://picsum.photos/400',
		linkUrl = '/',
		title = 'Название категории товаров',
		subtitle,
		className
	}: Props = $props();
</script>

<div class="relative flex min-h-[224px] px-10 py-6 w-full flex-col overflow-clip rounded-3xl bg-white {className}">
	<!-- card content -->
	<div class="flex w-3/4 flex-grow flex-col justify-between gap-6 ">
		<div class="w-2/3 space-y-6 ">
			<h3 class="font-normal">{title}</h3>
			{#if subtitle}
				<p>{subtitle}</p>
			{/if}
		</div>
		<Link href={linkUrl}>Каталог</Link>
	</div>
	<!-- backgound fill -->
	<!-- <div class="-z-1 from-green-default to-green-dark absolute inset-0 bg-gradient-to-r"></div> -->
	<!-- background image -->
	<Image
		src={backgroundImageSrc}
		classImage="absolute right-4 top-0 object-cover h-full py-6 drop-shadow-xl"
	/>
</div>

<style>
</style>
