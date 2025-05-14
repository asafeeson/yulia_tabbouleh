<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from './Image.svelte';
	import Section from './Section.svelte';

	interface Props {
		children?: Snippet;
		backgroundImageSrc?: string;
		width?: string;
		height?: string;
	}

	let { children, backgroundImageSrc }: Props = $props();
</script>

<Section
	sectionHeight="h-[50dvh]"
	sectionClass="relative"
	sectionBackgound=""
	contentFlexClass="flex m-auto items-center"
	contentHeight="h-full"
>
	<div class="flex w-[50%] flex-col">
		<h1>Восток ближе, чем кажется</h1>
		<p>
			Теперь у меня есть мой маленький Ливан, мой собственный Ближний Восток. Это мир, который
			станет продолжением блога Юлии Табулле, наполненным новыми историями и открытием себя. Здесь
			можно делиться не только словами, но и вещами, наполненными духом восточных базаров и тёплым
			солнцем.
		</p>
	</div>
	{#if children}
		{@render children()}
	{/if}
	{#if backgroundImageSrc}
		<Image
			src={backgroundImageSrc}
			classImage="absolute right-0 top-1/2 -translate-y-1/2 object-cover h-full w-auto -z-1"
		></Image>
	{/if}
</Section>

<style>
</style>
