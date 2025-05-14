<script lang="ts">
	import type { Snippet } from 'svelte';
	import CategoryBanner from './CategoryBanner.svelte';
	import HeroSection from './HeroSection.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="m-auto max-w-[1216px] space-y-6">
	<HeroSection backgroundImageSrc="https://picsum.photos/1000/400">
		<div class="flex flex-2/3">
			<h1>Восток ближе, чем кажется</h1>
			<p>
				Теперь у меня есть мой маленький Ливан, мой собственный Ближний Восток. Это мир, который
				станет продолжением блога Юлии Табулле, наполненным новыми историями и открытием себя. Здесь
				можно делиться не только словами, но и вещами, наполненными духом восточных базаров и тёплым
				солнцем.
			</p>
		</div>
	</HeroSection>
	<div class="flex gap-6 flex-wrap md:flex-nowrap">
		<CategoryBanner backgroundImageSrc="https://picsum.photos/400/201"></CategoryBanner>
		<CategoryBanner backgroundImageSrc="https://picsum.photos/400/200"></CategoryBanner>
	</div>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
</style>
