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
<main class="lg:mb-24 lg:space-y-24 mb-12 space-y-12">
	<HeroSection backgroundImageSrc="/hero_famous_lebanes.webp"></HeroSection>
	<CategoriesSection></CategoriesSection>
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
	<Section contentFlexClass="flex lg:flex-row flex-col items-stretch mx-auto gap-6">
		<HeroBannerWithCta extraClass="lg:flex-1/3 relative flex flex-col h-[300px] lg:h-auto ">
			<div class="flex-grow"></div>
			<div class="flex flex-col gap-6 p-6">
				<h4 class="text-white">Важный баннер о чем-то классном</h4>
				<Link href="/">Каталог</Link>
			</div>
		</HeroBannerWithCta>
		<ul class="lg:flex-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
			<li>
				<ProductMiniCard image="/shirt_01.png" title="Название продукта" price="10.000 руб"
				></ProductMiniCard>
			</li>
		</ul>
	</Section>
</main>
<Footer></Footer>

<style>
</style>
