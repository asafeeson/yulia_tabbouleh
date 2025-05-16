<script lang="ts">
	import type { Snippet } from 'svelte';
	import CategoriesSection from './CategoriesSection.svelte';
	import FeaturesBlock from './FeaturesBlock.svelte';
	import HeroBannerWithCta from './HeroBannerWithCTA.svelte';
	import HeroSection from './HeroSection.svelte';
	import Link from './Link.svelte';
	import ProductMiniCard from './ProductMiniCard.svelte';
	import Section from './Section.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<Header></Header>
<main class="space-y-6">
	<HeroSection backgroundImageSrc="https://picsum.photos/1000/400"></HeroSection>
	<CategoriesSection></CategoriesSection>
	<Section contentFlexClass="flex lg:flex-row flex-col items-stretch mx-auto gap-6">
		<HeroBannerWithCta extraClass="lg:flex-1/3 relative flex flex-col">
			<div class="flex-grow"></div>
			<div class="flex flex-col gap-4 p-4 lg:p-6">
				<h4 class="text-white">Важный баннер о чем-то классном</h4>
				<Link href="/">Каталог</Link>
			</div>
		</HeroBannerWithCta>
		<ul class="lg:flex-2/3 flex flex-wrap items-start justify-between gap-6">
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
			<li><ProductMiniCard title="Название продукта" price="10.000 руб"></ProductMiniCard></li>
		</ul>
	</Section>
	<Section
		sectionBackgound="bg-linear-to-tl from-green-dark to-green-default to-80%"
		sectionHeight="h-dvh"
		sectionClass="flex flex-col"
		contentClass="py-10 px-10 lg:px-0"
		contentFlexClass="flex flex-col flex-grow gap-6 mx-auto"
	>
		<div class="flex flex-col gap-6 text-white">
			<h3>Заголовок секции</h3>
			<p>Описание короткий текст</p>
			<Link href="/" isSkeleton={true}>Узнать больше</Link>
		</div>
		<div class="flex flex-grow"></div>
		<ul class="flex flex-wrap justify-between gap-6 text-white md:flex-nowrap">
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
			<li>
				<FeaturesBlock
					icon=""
					title="Заголовок"
					text="Это длинный или не очень длинный, может быть даже короткий текст"
				></FeaturesBlock>
			</li>
		</ul>
	</Section>
</main>
<Footer></Footer>

<style>
</style>
