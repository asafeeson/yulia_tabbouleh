<script lang="ts">
	import type { Snippet } from 'svelte';
	import CategoriesSection from './CategoriesSection.svelte';
	import FeaturesBlock from './FeaturesBlock.svelte';
	import HeroBannerWithCta from './HeroBannerWithCTA.svelte';
	import HeroSection from './HeroSection.svelte';
	import Link from './Link.svelte';
	import ProductMiniCard from './ProductMiniCard.svelte';
	import Section from './Section.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<main class="space-y-6">
	<HeroSection backgroundImageSrc="https://picsum.photos/1000/400"></HeroSection>
	<CategoriesSection></CategoriesSection>
	<Section contentFlexClass="flex items-stretch mx-auto gap-6">
		<HeroBannerWithCta extraClass="flex-1/3 relative flex flex-col">
			<div class="flex-grow"></div>
			<div class="flex flex-col gap-4 p-4 lg:p-6">
				<h4 class="text-white">Важный баннер о чем-то классном</h4>
				<Link href="/">Каталог</Link>
			</div>
		</HeroBannerWithCta>
		<div class="lg:flex-2/3 flex flex-wrap items-start justify-between gap-6">
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
			<ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard>
		</div>
	</Section>
	<Section sectionBackgound="bg-green-default" sectionHeight="h-dvh" contentClass="p-6" contentFlexClass="flex flex-col gap-6 mx-auto">
		<div class="flex flex-col gap-6">
			<h3>Заголовок секции</h3>
			<p>Описание короткий текст</p>
			<Link href="/" className="bg-green-default border text-white hover:text-green-default hover:bg-white">Узнать больше</Link>
		</div>
		<div class="flex-grow"></div>
		<div class="flex gap-6 justify-between">
			<FeaturesBlock
				icon=""
				title="Заголовок"
				text="Это длинный или не очень длинный, может быть даже короткий текст"
			></FeaturesBlock>
			<FeaturesBlock
				icon=""
				title="Заголовок"
				text="Это длинный или не очень длинный, может быть даже короткий текст"
			></FeaturesBlock>
			<FeaturesBlock
				icon=""
				title="Заголовок"
				text="Это длинный или не очень длинный, может быть даже короткий текст"
			></FeaturesBlock>
		</div>
	</Section>
</main>

<style>
</style>
