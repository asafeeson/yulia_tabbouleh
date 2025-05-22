<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from '../UI/Image.svelte';
	import Section from './Section.svelte';
	import Link from '../UI/Link.svelte';

	interface Props {
		children?: Snippet;
		backgroundImageSrc?: string;
		width?: string;
		height?: string;
		urlButton?: string;
	}

	let { children, backgroundImageSrc, urlButton }: Props = $props();
</script>

<Section
	sectionHeight="h-[90dvh]"
	sectionClass="relative"
	sectionBackground=""
	contentFlexClass="flex flex-col mx-auto"
	contentHeight="h-full"
>
	<div class="z-1 relative flex flex-grow flex-col justify-center items-center md:items-left gap-6 px-6 md:w-[40%] lg:px-0">
		<h1 class="md:text-left text-center">Восток ближе, чем кажется</h1>
		<p class="mb-6 md:text-left text-center">
			Теперь у меня есть мой маленький Ливан, мой собственный Ближний Восток. Это мир, который
			станет продолжением блога Юлии Табулле, наполненным новыми историями и открытием себя. Здесь
			можно делиться не только словами, но и вещами, наполненными духом восточных базаров и тёплым
			солнцем.
		</p>
		<Link href={urlButton}>Смотреть коллекцию</Link>
	</div>
	{#if children}
		{@render children()}
	{/if}
	{#if backgroundImageSrc}
		<Image
			src={backgroundImageSrc}
			classImage="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 object-cover h-full w-auto"
		></Image>
	{/if}
</Section>

<style>
</style>
