<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';
	import Section from './Section.svelte';
	import Link from './Link.svelte';

	interface Props {
		children?: Snippet;
		backgroundImageSrc?: string;
		width?: string;
		height?: string;
	}

	let { children, backgroundImageSrc }: Props = $props();
</script>

<Section
	sectionHeight="h-[80dvh]"
	sectionClass="relative"
	sectionBackgound="bg-green-default"
	contentFlexClass="flex flex-col mx-auto"
	contentHeight="h-full"
>
	<div class="z-1 relative flex w-[50%] flex-grow flex-col justify-center gap-6 text-white">
		<h1>Восток ближе, чем кажется</h1>
		<p class="mb-6">
			Теперь у меня есть мой маленький Ливан, мой собственный Ближний Восток. Это мир, который
			станет продолжением блога Юлии Табулле, наполненным новыми историями и открытием себя. Здесь
			можно делиться не только словами, но и вещами, наполненными духом восточных базаров и тёплым
			солнцем.
		</p>
		<Link href="/" isSkeleton={true}>Перейти в каталог</Link>
	</div>
	{#if children}
		{@render children()}
	{/if}
	{#if backgroundImageSrc}
		<Image
			src={backgroundImageSrc}
			classImage="absolute right-0 top-1/2 -translate-y-1/2 object-cover h-full w-auto"
		></Image>
	{/if}
</Section>

<style>
</style>
